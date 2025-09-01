import { createEffect, createSignal, onCleanup } from "solid-js";
import {
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { twJoin } from "tailwind-merge";
import smoothScrollTo from "~/utils/smoothScrollTo";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { useExercisesContext } from "~/store/ExercisesStoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const PageTopBottomArrows = () => {
  const { store } = useGlobalContext();
  const { exercises_store } = useExercisesContext();
  const [opacity, set_opacity] = createSignal(1);
  const [hovered, set_hovered] = createSignal(false);

  const calc_opacity = () => {
    // prettier-ignore
    return Math.min(
      0.0,
      Math.max(0, 1.0 - (store.scrollY - HAMBURGER_MENU_SCROLLY_START_FADE) / (HAMBURGER_MENU_SCROLLY_END_FADE - HAMBURGER_MENU_SCROLLY_START_FADE))
    );
  };

  const handleScroll = () => {
    set_opacity(calc_opacity());
  };

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  const { calculateTargetCenterOnPage } = useScrollToInChapter();
  const selectedExercise = () =>
    document
      .querySelectorAll(".exo-statement")
      .item(
        exercises_store.list_view ? 0 : exercises_store.selected_exo - 1,
      ) as HTMLElement;

  const handleUpClick = (_: MouseEvent) => {
    let middleScroll = calculateTargetCenterOnPage(selectedExercise());
    let scrollTo = store.scrollY < middleScroll + 100 ? 0 : middleScroll + 50;
    smoothScrollTo(scrollTo, store.animations ? 100 : 0);
  };

  const handleDownClick = (_: MouseEvent) => {
    let middleScroll = calculateTargetCenterOnPage(selectedExercise());
    let scrollTo =
      store.scrollY > middleScroll - 100
        ? document.body.scrollHeight
        : middleScroll + 50;

    smoothScrollTo(scrollTo, store.animations ? 100 : 0);
  };

  const containerWidth = () => {
    return Math.max(
      store.innerWidth,
      store.maxElementWidth + 60,
      mainColumnWidth() + 2 * store.pageNecessaryMargin,
    );
  };

  const effectiveMarginWidth = () => {
    return (containerWidth() - mainColumnWidth()) / 2;
  };

  return (
    <div
      id="scroll-btns"
      onMouseOver={() => set_hovered(true)}
      onMouseOut={() => set_hovered(false)}
      style={{
        opacity: hovered() ? 1 : opacity(),
        left: `${effectiveMarginWidth() - store.scrollX - 33}px`,
      }}
      class="fixed bottom-3">
      <button
        onClick={handleUpClick}
        style={{
          "background-color": store.show_areas ? "#fff000" : "transparent",
        }}
        class={twJoin(
          "block px-1 mb-2",
          store.scrollY > 1
            ? "stroke-black hover:stroke-stone-600"
            : "stroke-stone-300",
          "transition-all",
        )}>
        <DoubleUpArrowSVG />
      </button>
      <button
        onClick={handleDownClick}
        style={{
          "background-color": store.show_areas ? "#fff000" : "transparent",
        }}
        class={twJoin(
          "block px-1 mb-1",
          store.scrollY + store.innerHeight - store.scrollHeight < -1
            ? "stroke-black hover:stroke-stone-600"
            : "stroke-stone-300",
          "transition-all",
        )}>
        <DoubleDownArrowSVG />
      </button>
    </div>
  );
};

const sw = 2.6;
const cdy = -1;
const ady = 8;
const adx = 8;
const sep = 10;
const un = 30 / 2;

const DoubleUpArrowSVG = (props: { class?: string; style?: string }) => {
  const { store } = useGlobalContext();

  return (
    <svg
      style={{
        "background-color": store.show_areas ? "#ffc0cb" : "transparent",
      }}
      class={props.class}
      width="30"
      height="30"
      viewBox="0 5 30 35">
      <path
        d={`
          M${un - adx} ${un + cdy + ady} l${adx} ${-ady} ${adx} ${ady}
          M${un - adx} ${un + cdy + ady + sep} l${adx} ${-ady} ${adx} ${ady}
        `}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"></path>
    </svg>
  );
};

const DoubleDownArrowSVG = (props: { class?: string; style?: string }) => {
  const { store } = useGlobalContext();

  return (
    <svg
      style={{
        "background-color": store.show_areas ? "#ffc0cb" : "transparent",
      }}
      class={props.class}
      width="30"
      height="30"
      viewBox="0 -15 30 35">
      <path
        d={`
          M${un - adx} ${un - cdy - ady} l${adx} ${ady} ${adx} ${-ady}
          M${un - adx} ${un - cdy - ady - sep} l${adx} ${ady} ${adx} ${-ady}
        `}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"></path>
    </svg>
  );
};

export default PageTopBottomArrows;
