import {
  Accessor,
  createEffect,
  createSignal,
  ParentProps,
  onCleanup,
  onMount,
  Setter,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import {
  DESKTOP_COLUMN_WIDTH,
  GREEN_DIV_HEIGHT,
  MOBILE_MAX_WIDTH,
  TEXT_X_PADDING,
} from "~/constants";
import { twJoin } from "tailwind-merge";
import { Spacer, SpacerSm, SpacerXs, SpacerXXs } from "./Spacer";
import { useGlobalContext } from "~/store/StoreProvider";
import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";
import smoothScrollTo from "~/utils/smoothScrollTo";
import { HeightChangeListenerProvider } from "~/store/HeightChangeListenerProvider";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { useOneExerciseContext } from "~/store/OneExerciseStoreProvider";

type SolutionProps = ParentProps &
  SharedProps & {
    re_calculate_height?: boolean;
  };

const SpaceBetweenStatementAndSolutionButton = () => (
  <>
    <Spacer />
    <SpacerXs />
    <SpacerXXs />
  </>
);

const SpaceAfterSolutionButtonAlwaysShowing = () => (
  <>
    <SpacerSm />
    <SpacerXXs />
  </>
);

const ExtraSpaceBetweenSolutionButtonAndSolutionWhenSolutionShowing = () => (
  <>
    <SpacerSm />
  </>
);

const SpaceBeforeNextExerciseWhenNotLastExerciseInListViewAlwaysShowing =
  () => (
    <>
      <SpacerSm />
      <SpacerXs />
    </>
  );

const SpaceBeforeBackupArrow = () => (
  <>
    <Spacer />
  </>
);

export const Solution = (props: SolutionProps) => {
  let ref: HTMLDivElement | undefined;
  let buttonRef: HTMLDivElement | undefined;

  let { store: global_store, set_store: set_global_store } = useGlobalContext();
  const { set_exercises_store: set_store, exercises_store: store } =
    useExercisesContext();
  let {
    store: { number: solution_number },
  } = useOneExerciseContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();

  const solution_open = () =>
    store.exercises[solution_number - 1]?.solution_open;
  const transition_duration = () =>
    store.exercises[solution_number - 1]?.transition_duration;
  const num_exercises = () => store.exercises.length;

  let [content_height, set_content_height] = createSignal(0);
  let [bot_div, set_bot_div] = createSignal(false);
  let [solution_fully_opened, set_solution_fully_opened] = createSignal(false);
  let [handle, set_handle] = createSignal<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [green_div_transition, set_green_div_transition] = createSignal(0);
  const [solution_transition, set_solution_transition] = createSignal(0);
  const [green_div_height, set_green_div_height] =
    createSignal(GREEN_DIV_HEIGHT);

  const handleResize = () => {
    set_content_height(ref?.clientHeight || 0);
  };

  const reset_content_height_etc = () => {
    props.re_calculate_height; // re-calc on change
    if (ref?.clientHeight) {
      set_content_height(ref?.clientHeight || 0);
      updateExerciseByIndex(solution_number - 1, {
        field: "transition_duration",
        value: global_store.animations
          ? Math.min(ref?.clientHeight, 1000) * 0.8
          : 0,
      });
    }
  };

  createEffect(() => {
    reset_content_height_etc();
    setTimeout(() => {
      if (solution_open()) {
        reset_content_height_etc();
      }
    }, 50);
    setTimeout(() => {
      if (solution_open()) {
        reset_content_height_etc();
      }
    }, 500);
    setTimeout(() => {
      if (solution_open()) {
        reset_content_height_etc();
      }
    }, 1200);
  });

  createEffect(() => {
    if (solution_open()) {
      window.addEventListener("scroll", handleResize);
      setTimeout(() => {
        set_bot_div(false);
      }, transition_duration());
    } else {
      window.removeEventListener("scroll", handleResize);
      setTimeout(() => {
        set_bot_div(true);
      }, transition_duration());
    }

    onCleanup(() => window.removeEventListener("scroll", handleResize));
  });

  createEffect(() => {
    // green div height
    // if exercise question is too small we increase green div height
    let exo = document.querySelectorAll(".exercise")?.item(solution_number - 1);
    if (exo?.clientHeight < 200 + green_div_height()) {
      set_green_div_height(700);
    } else {
      set_green_div_height(GREEN_DIV_HEIGHT);
    }
    store.selected_exo; // re-run
  });

  createEffect(() => {
    // green div transition
    if (solution_fully_opened() || !solution_open()) {
      set_green_div_transition(transition_duration());
      setTimeout(() => {
        set_green_div_transition(0);
      }, transition_duration());
    }
  });

  onMount(() => {
    set_solution_fully_opened(solution_open());
    setTimeout(() => {
      set_solution_fully_opened(solution_open());
    }, 100);

    // Typesetting solution mathjax when solution button is in-view . this helps to get rid of lag when openning solution
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (window as any).MathJax.typesetPromise([ref]);
          observer.disconnect();
        }
      },
      {
        rootMargin: "1000px",
      },
    );

    if (buttonRef) observer.observe(buttonRef);
    onCleanup(() => observer.disconnect());
  });

  return (
    <HeightChangeListenerProvider>
      <SpaceBetweenStatementAndSolutionButton />
      <SolutionButton
        handle={handle}
        set_handle={set_handle}
        set_solution_fully_opened={set_solution_fully_opened}
        set_solution_transition={set_solution_transition}
        solution_number={solution_number}
        ref={buttonRef}
        resetter={reset_content_height_etc}
      />
      <SpaceAfterSolutionButtonAlwaysShowing />

      {/* Actual Solution */}
      <div
        class={twJoin(
          "relative transition-all",
          !solution_open() && "pointer-events-none",
          (!solution_open() || !solution_fully_opened()) && "overflow-y-clip",
        )}
        style={{
          height: `${solution_open() ? content_height() : 0}px`,
          "transition-duration": `${global_store.animations ? solution_transition() : 0}ms`,
          "transition-property": "height",
        }}>
        <div
          ref={ref}
          style={{
            position: solution_fully_opened() ? "relative" : "absolute",
          }}
          class={twJoin(" bottom-0 w-full")}>
          <ExtraSpaceBetweenSolutionButtonAndSolutionWhenSolutionShowing />
          {props.children}
        </div>
        <div
          style={`width:${global_store.innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : global_store.innerWidth}px;`}
          class={twJoin(
            "absolute top-0 left-1/2 -translate-x-1/2 spacer-100 bg-bg",
            solution_fully_opened() && "opacity-0",
          )}></div>
      </div>

      {/* Possible backup arrow */}
      {(!store.list_view || solution_number === num_exercises()) && (
        <>
          <SpaceBeforeBackupArrow />
          <div
            style={{
              "transition-duration": `${!global_store.animations ? 0 : solution_open() ? solution_transition() : 50}ms`,
            }}
            class={twJoin(
              "flex items-center justify-center",
              (!solution_open() || !solution_fully_opened()) && "opacity-0",
              bot_div() && "delay-[2s]",
            )}>
            <BackupArrow />
          </div>
        </>
      )}
      {store.list_view && solution_number !== num_exercises() && (
        <SpaceBeforeNextExerciseWhenNotLastExerciseInListViewAlwaysShowing />
      )}

      {/* Green Div */}
      <div
        class="text-column transition-all col-start-2"
        style={{
          height: `${(!store.list_view || solution_number === num_exercises()) && (!solution_open() || bot_div()) ? green_div_height() : 0}px`,
          "background-color": global_store.show_areas ? "#00440050" : "",
          "transition-duration": `${global_store.animations ? green_div_transition() : 0}ms`,
        }}></div>
    </HeightChangeListenerProvider>
  );
};

type SolutionBtnProps = {
  handle: Accessor<ReturnType<typeof setTimeout> | null>;
  set_handle: Setter<ReturnType<typeof setTimeout> | null>;
  solution_number: number;
  set_solution_fully_opened: Setter<boolean>;
  set_solution_transition: Setter<number>;
  ref: HTMLDivElement | undefined;
  resetter: () => void;
};

const SolutionButton = (props: SolutionBtnProps) => {
  const { exercises_store: store } = useExercisesContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();
  const solution_open = () =>
    store.exercises[props.solution_number - 1]?.solution_open;
  const transition_duration = () =>
    store.exercises[props.solution_number - 1]?.transition_duration;
  const transition_duration_with_safety_margin = () =>
    store.exercises[props.solution_number - 1]?.transition_duration + 50;
  const { set_handle, set_solution_fully_opened, set_solution_transition } =
    props;

  return (
    <div
      ref={props.ref}
      class="relative"
      style={`padding-inline: ${TEXT_X_PADDING}px`}>
      <SolutionSVG
        solution_open={solution_open}
        onClick={(event) => {
          event.stopPropagation();

          // *** track if solution is fully opened ***
          if (props.handle()) {
            clearTimeout(props.handle()!);
          }
          if (solution_open()) {
            set_solution_fully_opened(false);
          } else {
            let timeout_handle = setTimeout(() => {
              window.scrollBy(0, 0.1);
              set_solution_fully_opened(true);
            }, transition_duration_with_safety_margin());
            set_handle(timeout_handle);
          }

          // *** update transition duration ***
          set_solution_transition(transition_duration());

          // *** update main value ***
          updateExerciseByIndex(props.solution_number - 1, {
            field: "solution_open",
            value: !solution_open(),
          });

          props.resetter();
          setTimeout(props.resetter, 50);
          setTimeout(props.resetter, transition_duration());

          if (store.list_view) {
            // update localstorage for the solution . as useExercises hook only updates the selectedExo which works only in carousel view
            let article = location.pathname.split("/").pop();
            localStorage.setItem(
              `${article}_exo_${props.solution_number}_opened`,
              String(solution_open()),
            );
          }

          // *** solution transition should be not 0 only when button is clicked ***
          setTimeout(() => {
            set_solution_transition(0);
          }, transition_duration());
        }}
      />
    </div>
  );
};

export const BackupArrow = () => {
  let { store } = useGlobalContext();
  let { exercises_store } = useExercisesContext();

  const { calculateTargetCenterOnPage } = useScrollToInChapter();
  const selectedExercise = () =>
    document
      .querySelectorAll(".exo-statement")
      .item(
        exercises_store.list_view ? 0 : exercises_store.selected_exo - 1,
      ) as HTMLElement;

  return (
    <svg
      id="backup-btn"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="tab cursor-pointer z-10"
      onClick={() => {
        if (store.innerWidth > MOBILE_MAX_WIDTH) {
          smoothScrollTo(
            calculateTargetCenterOnPage(selectedExercise()) + 50,
            store.animations ? 100 : 0,
          );
        } else {
          document?.getElementById("exo")?.scrollIntoView();
        }
      }}>
      <path
        d="M35.4941 1H6.65545C3.53203 1 1 3.53203 1 6.65545V35.4941C1 38.6175 3.53203 41.1495 6.65545 41.1495H35.4941C38.6175 41.1495 41.1495 38.6175 41.1495 35.4941V6.65545C41.1495 3.53203 38.6175 1 35.4941 1Z"
        fill="#EEFFAA"
        fill-opacity="0.4"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="2"></path>
      <path
        d="M20 32C20 32.5523 20.4477 33 21 33C21.5523 33 22 32.5523 22 32H20ZM21 11L15.2265 21H26.7735L21 11ZM22 32L22 20H20L20 32H22Z"
        fill="black"></path>
    </svg>
  );
};

type SolutionSVGProps = {
  onClick: (e: any) => void;
  solution_open: Accessor<boolean>;
};

export const SolutionSVG = (props: SolutionSVGProps) => {
  return (
    <>
      <div onClick={props.onClick} class="cursor-pointer w-fit m-auto">
        <svg class="mx-auto h-[37px] overflow-visible">
          <g transform="translate(96, 0)">
            <rect
              aria-label="solution_button_focus_rect"
              class="focus_alpha_fill"
              x="-7"
              y="-7"
              width="123"
              height="50"></rect>
            <rect
              aria-label="solution_button_focus_rect"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_rect"
                  : "active_solution_button_rect",
              )}
              width="109"
              height="36"></rect>
            <path
              aria-label="solution_button_lip"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_lip"
                  : "active_solution_button_lip",
              )}
              d="M 0 10 v -10 h 109 v 10 M 0 26 v 10 h 109 v -10"></path>
            <g
              aria-label="solution_button_finger_pair"
              class={twJoin(
                "solution_button_transition",
                props.solution_open()
                  ? "inactive_solution_button_hands"
                  : "active_solution_button_hands",
              )}>
              <use
                href="#finger_pointing_left"
                transform="translate(101.5, 18)"></use>
              <use
                href="#finger_pointing_left"
                transform="scale(-1, 1) translate(-8, 20)"></use>
              <use x="-2" href="#solution_button_text"></use>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Solution;
