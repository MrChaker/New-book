import { createEffect, createSignal, onCleanup } from "solid-js";
import {
  DESKTOP_COLUMN_WIDTH,
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
} from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";
import { twJoin } from "tailwind-merge";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const PageUpDownArrows = () => {
  const { store } = useGlobalContext();
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

  const handleUpClick = (e: MouseEvent) => {
    e.stopImmediatePropagation();
    window.scrollBy({ top: -store.innerHeight });
  };

  const handleDownClick = (e: MouseEvent) => {
    e.stopImmediatePropagation();
    window.scrollBy({ top: store.innerHeight });
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
        left: `${effectiveMarginWidth() - store.scrollX + DESKTOP_COLUMN_WIDTH}px`,
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
            ? "stroke-black hover:stroke-stone-600 fill-black hover:fill-stone-600"
            : "stroke-stone-300 fill-stone-300",
          "transition-all",
        )}>
        <IconSvg style="width:30px;" />
      </button>
      <button
        onClick={handleDownClick}
        style={{
          "background-color": store.show_areas ? "#fff000" : "transparent",
        }}
        class={twJoin(
          "block px-1 mb-1",
          store.scrollY + store.innerHeight - store.scrollHeight < -1
            ? "stroke-black hover:stroke-stone-600 fill-black hover:fill-stone-600"
            : "stroke-stone-300 fill-stone-300",
          "transition-all",
        )}>
        <IconSvg style="width:30px;transform:scale(1, -1);" />
      </button>
    </div>
  );
};

const IconSvg = (props: { style: string }) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 340.45 340.45"
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      style={props.style}>
      <path d="m69.054 40.511h14.452v-13.954h-14.452z" fill="none" />
      <path d="m170.22 40.511h14.452v-13.954h-14.452z" fill="none" />
      <path d="m256.94 124.24h14.452v-13.954h-14.452z" fill="none" />
      <path d="m256.94 291.69h14.452v-13.954h-14.452z" fill="none" />
      <path d="m69.054 291.69h14.452v-13.954h-14.452z" fill="none" />
      <path
        d="m264.17 117.26-86.716-83.724h-101.17v251.18h187.89z"
        fill="#fff"
        stroke-miterlimit="2"
        stroke-width="9"
      />
      <path
        d="m140.72 227.1v-67.754h-35.216l64.484-62.259 64.484 62.259h-35.216v67.754z"
        stroke-miterlimit="2"
        stroke-width="0"
      />
      <path d="m220.81 117.26h-43.358v-41.862z" fill="#fff" />
      <path
        d="m177.45 33.534v83.724h86.716"
        fill="none"
        stroke-miterlimit="2"
        stroke-width="9"
      />
    </svg>
  );
};

export default PageUpDownArrows;
