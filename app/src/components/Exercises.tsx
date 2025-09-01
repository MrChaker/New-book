import { children, For, ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import Image from "./Image";
import { JSX } from "solid-js/h/jsx-runtime";
import { twJoin } from "tailwind-merge";
import useExercises from "~/hooks/useExercises";
import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";
import { OneExerciseStoreProvider } from "~/store/OneExerciseStoreProvider";

type ExercisesProps = ParentProps & SharedProps;

type ExerciseProps = ParentProps & {
  number: number;
};

export const Exercises = (props: ExercisesProps) => {
  let children_list = children(() => props.children);
  let num_exercises = children_list.toArray().length;

  useExercises(num_exercises);

  const { set_exercises_store: set_store, exercises_store: store } =
    useExercisesContext();
  const { initExercisesState } = useExercisesStateHelpers();

  let selected_exo = () => store.selected_exo;
  initExercisesState(num_exercises);

  if (selected_exo() > num_exercises) {
    set_store("selected_exo", num_exercises);
  } else if (selected_exo() < 1) {
    set_store("selected_exo", 1);
  }

  return (
    <>
      <Image
        id="exo"
        src="/images/separator.png"
        height="50px"
        class="mt-[15px] mb-[40px]"></Image>
      <Switcher exercises={children_list.toArray()} />
      <div class="h-[31px]"></div>
      <section id="exercises">
        <For each={children_list.toArray()}>
          {(child, index) => {
            return (
              <div
                class={twJoin(
                  "exercise duration-500 ",
                  selected_exo() == index() + 1 || store.list_view
                    ? "opacity-100 h-auto overflow-visible transition-none"
                    : "opacity-0 h-0 overflow-hidden transition-opacity",
                )}>
                {child}
              </div>
            );
          }}
        </For>
      </section>
    </>
  );
};

type SwitcherProps = {
  exercises: JSX.Element[];
};

const Switcher = (props: SwitcherProps) => {
  const { set_exercises_store: set_store, exercises_store: store } =
    useExercisesContext();
  let selected_exo = () => store.selected_exo;

  // gap between left/right buttons
  let gap = 8.5;

  // left/right button size & radius
  let w = 40.2;
  let rx = 5.65;

  // left/right arrow
  let triangle_sidelength = 11.5;
  let triangle_tip_to_edge = 7;
  let arrow_start_to_edge = 7.4;
  let arrow_body_width = 2;
  let arrow_body_length = 18;

  // gap between right button and toggle
  let toggle_gap = 26;

  // toggle
  let r1 = 8.5;
  let dr = 2.8;
  let r2 = r1 - dr;
  let c2c = (r1 * 15) / 9.5;
  let toggle_transition = 100;

  let toggle_cx = () => {
    return store.list_view ? 1 + r1 : 1 + r1 + c2c;
  };

  const left_on = () => {
    return store.selected_exo > 1 && !store.list_view;
  };

  const right_on = () => {
    return store.selected_exo < props.exercises.length && !store.list_view;
  };

  return (
    <div class="m-auto">
      <div
        id="exercises-btns"
        class="flex justify-center !text-xl gap-0 mt-[2px]">
        <svg
          width={`${2 + w}`}
          height={`${2 + w}`}
          viewBox={`0 0 ${2 + w} ${2 + w}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class={twJoin(
            "tab cursor-pointer overflow-visible",
            left_on() ? "" : "disabled",
          )}
          onClick={(e) => {
            e.stopPropagation();
            if (left_on()) {
              set_store("selected_exo", selected_exo() - 1);
            }
          }}>
          <path
            d={`M 1 ${1 + rx}A ${rx} ${rx} 0 0 1 ${1 + rx} ${1}H ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w} ${1 + rx}V ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w - rx} ${1 + w}H ${1 + rx}A ${rx} ${rx} 0 0 1 ${1} ${1 + w - rx}Z`}
            fill={left_on() ? "#f8fee0" : "#ebebeb"}
            stroke={left_on() ? "#000" : "#464646"}
            stroke-width="1.5"
            stroke-miterlimit="2"></path>
          <path
            d={`M ${1 + triangle_tip_to_edge} ${1 + w / 2} l ${(triangle_sidelength * Math.sqrt(3)) / 2} ${-0.5 * triangle_sidelength} v ${triangle_sidelength} z`}
            fill={left_on() ? "#000" : "#464646"}
            // stroke={left_on() ? "#000" : "#464646"}
          ></path>
          <path
            d={`M ${1 + w - arrow_start_to_edge} ${1 + w / 2 - arrow_body_width / 2} v ${arrow_body_width} h ${-arrow_body_length} v ${-arrow_body_width} z`}
            fill="black"
            // stroke={left_on() ? "#000" : "#464646"}
          ></path>
        </svg>
        <svg
          width={`${gap}`}
          height={`${2 + w}`}
          xmlns="http://www.w3.org/2000/svg"></svg>
        <div class="relative w-fit">
          <svg
            width={`${2 + w}`}
            height={`${2 + w}`}
            viewBox={`0 0 ${2 + w} ${2 + w}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={twJoin(
              "tab cursor-pointer overflow-visible",
              right_on() ? "" : "disabled",
            )}
            onClick={() => {
              if (right_on()) {
                set_store("selected_exo", selected_exo() + 1);
              }
            }}>
            <path
              d={`M 1 ${1 + rx}A ${rx} ${rx} 0 0 1 ${1 + rx} ${1}H ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w} ${1 + rx}V ${1 + w - rx}A ${rx} ${rx} 0 0 1 ${1 + w - rx} ${1 + w}H ${1 + rx}A ${rx} ${rx} 0 0 1 ${1} ${1 + w - rx}Z`}
              fill={right_on() ? "#f8fee0" : "#ebebeb"}
              stroke={right_on() ? "#000" : "#464646"}
              stroke-width="1.5"
              stroke-miterlimit="2"></path>
            <path
              d={`M ${1 + w - triangle_tip_to_edge} ${1 + w / 2} l ${(-triangle_sidelength * Math.sqrt(3)) / 2} ${-0.5 * triangle_sidelength} v ${triangle_sidelength} z`}
              fill={right_on() ? "#000" : "#464646"}></path>
            <path
              d={`M ${1 + arrow_start_to_edge} ${1 + w / 2 - arrow_body_width / 2} v ${arrow_body_width} h ${arrow_body_length} v ${-arrow_body_width} z`}
              fill={right_on() ? "#000" : "#464646"}></path>
          </svg>
          <svg
            class={twJoin(
              "toggle absolute cursor-pointer",
              store.list_view ? "disabled" : "",
            )}
            style={`left:${w + toggle_gap}px;top:0px;`}
            width={`${c2c + 2 * r1 + 2}`}
            height={`${2 + w}`}
            viewBox={`0 0 ${c2c + 2 * r1 + 2} ${2 + w}`}
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              set_store("list_view", !store.list_view);
            }}>
            <path
              d={`
                M ${1 + r1 + c2c} ${w / 2 - r1}
                a ${r1} ${r1} 0 0 1 ${r1} ${r1}
                a ${r1} ${r1} 0 0 1 ${-r1} ${r1}
                h ${-c2c}
                a ${r1} ${r1} 0 0 1 ${-r1} ${-r1}
                a ${r1} ${r1} 0 0 1 ${r1} ${-r1}
                z
              `}
              fill={store.list_view ? "#ebebeb" : "#f8fee0"}
              stroke={store.list_view ? "#464646" : "#000"}
              stroke-width="1.5"></path>
            <circle
              cx={`${toggle_cx()}`}
              cy={`${w / 2}`}
              r={`${r2}`}
              fill="#fff"
              stroke={store.list_view ? "#464646" : "#000"}
              stroke-width="1.5"
              style={`transition:${toggle_transition}ms`}></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const Exercise = (props: ExerciseProps) => {
  return (
    <OneExerciseStoreProvider number={props.number}>
      <div>{props.children}</div>
    </OneExerciseStoreProvider>
  );
};

export const ExerciseStatement = (props: any) => {
  let { children, ...rest } = props;
  return (
    <div class="exo-statement" {...rest}>
      {children}
    </div>
  );
};
