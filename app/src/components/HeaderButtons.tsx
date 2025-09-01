import { createEffect, createSignal, onCleanup, ParentProps } from "solid-js";
import { twJoin, twMerge } from "tailwind-merge";
import {
  HAMBURGER_MENU_HEIGHT,
  HAMBURGER_MENU_SCROLLY_END_FADE,
  HAMBURGER_MENU_SCROLLY_START_FADE,
  HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY,
  MOBILE_MAX_WIDTH,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { useGlobalContext } from "../store/StoreProvider";
import usePrevNextPage from "~/hooks/usePrevNextPage";

const HeaderButtons = () => {
  return (
    <ButtonsContainer>
      <LeftArrowButton />
      <RightArrowButton />
      <HamburgerButton />
    </ButtonsContainer>
  );
};

const ButtonsContainer = (props: ParentProps) => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const open = () => store.panel_opened;

  const [opacity, set_opacity] = createSignal(1);

  const calc_opacity = () => {
    // prettier-ignore
    return Math.min(
      1.0,
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

  return (
    <>
      {/* the background */}
      <div
        class={twJoin(
          "fixed right-0 z-40 h-14",
          store.scrollY <= HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY &&
            !on_mobile() &&
            store.scrollX + store.innerWidth >=
              store.scrollWidth / 2 + MOBILE_MAX_WIDTH / 2 &&
            "h-[10rem]"
        )}
        style={{
          width: "134px",
          "background-color":
            store.scrollY > HAMBURGER_MENU_BACKGROUND_OFF_SCROLLY || on_mobile()
              ? "transparent"
              : store.show_areas
                ? "#fff000"
                : "#fff",
        }}
      ></div>
      <div
        class={twJoin(
          "fixed right-0 z-50 h-14",
          !on_mobile() &&
            !open() &&
            store.scrollY < 2 * HAMBURGER_MENU_HEIGHT &&
            "border-b"
        )}
      >
        <div
          class="select-none flex items-center justify-center h-8 m-3 hover:!opacity-100"
          style={{
            opacity:
              open() || on_mobile() || store.scroll_is_at_0
                ? 1
                : store.saved_scroll_finished
                  ? opacity()
                  : 0,
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

const LeftArrowButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const { getPrevArticle, prevDisabled } = usePrevNextPage();
  const [pressed, setPressed] = createSignal(false);
  const [pressedTimeout, setPressedTimeout] = createSignal(false);

  const handleMouseDown = () => {
    setPressed(true);
    setPressedTimeout(true);
    setTimeout(() => {
      setPressedTimeout(false);
    }, on_mobile() ? 50 : 20);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  return (
    <button
      id="prev-btn"
      class={twJoin(
        !on_mobile() && "mr-2",
        on_mobile() && "mr-4",
        prevDisabled() && "cursor-default"
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        getPrevArticle();
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
      style={{
        "background-color":
          (pressed() || pressedTimeout()) && !on_mobile()
            ? "#ececec"
            : store.show_areas
              ? "rgb(224, 215, 48)"
              : "#fff",
        scale: (pressed() || pressedTimeout()) && on_mobile() ? "1.8" : "1",
      }}
    >
      <LeftArrowSVG
        class={twMerge(
          pressed() && !on_mobile()
            ? "stroke-purple-600"
            : !prevDisabled()
              ? "stroke-[rgb(30,30,30)] hover:stroke-stone-600"
              : "stroke-stone-300"
        )}
        style=""
      />
    </button>
  );
};

const RightArrowButton = () => {
  const { on_mobile } = useOnMobile();
  const { store } = useGlobalContext();
  const { getNextArticle, nextDisabled } = usePrevNextPage();
  const [pressed, setPressed] = createSignal(false);
  const [pressedTimeout, setPressedTimeout] = createSignal(false);

  const handleMouseDown = () => {
    setPressed(true);
    setPressedTimeout(true);
    setTimeout(() => {
      setPressedTimeout(false);
    }, on_mobile() ? 50 : 20);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  return (
    <button
      id="next-btn"
      class={twJoin(
        !on_mobile() && "mr-3",
        on_mobile() && "mr-4",
        nextDisabled() && "cursor-default"
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        getNextArticle();
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
      style={{
        "background-color":
          (pressed() || pressedTimeout()) && !on_mobile()
            ? "#ececec"
            : store.show_areas
              ? "rgb(224, 215, 48)"
              : "#fff",
        scale: (pressed() || pressedTimeout()) && on_mobile() ? "1.8" : "1",
      }}
    >
      <RightArrowSVG
        class={twMerge(
          pressed() && !on_mobile()
            ? "stroke-purple-600"
            : !nextDisabled()
              ? "stroke-[rgb(30,30,30)] hover:stroke-stone-600"
              : "stroke-stone-300"
        )}
        style=""
      />
    </button>
  );
};

const HamburgerButton = () => {
  const { store, set_store } = useGlobalContext();
  const open = () => store.panel_opened;

  return (
    <button
      id="menu-btn"
      onClick={(e) => {
        e.stopPropagation();
        set_store("panel_opened", !open());
      }}
      style={{
        "background-color": store.show_areas ? "rgb(224, 215, 48)" : "#fff",
      }}
    >
      <HamburgerButtonSVG
        class="fill-[rgb(30,30,30)] hover:fill-stone-600"
        open={open()}
      />
    </button>
  );
};

// svg paths constants
const sw = 2.6;
const cdx = 4;
const adx = 6.5;
const ady = 6.5;
const un = 30 / 2;

const LeftArrowSVG = (props: { class: string; style: string }) => {
  return (
    <svg
      class={props.class}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={props.style}
    >
      <path
        d={`M${un - cdx + adx} ${un - ady} L${un - cdx} ${un} L${un - cdx + adx} ${un + ady}`}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"
      ></path>
    </svg>
  );
};

const RightArrowSVG = (props: { class: string; style: string }) => {
  return (
    <svg
      class={props.class}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={props.style}
    >
      <path
        d={`M${un + cdx - adx} ${un - ady} L${un + cdx} ${un} L${un + cdx - adx} ${un + ady}`}
        stroke-linecap="round"
        stroke-width={sw}
        fill="none"
      ></path>
    </svg>
  );
};

const HamburgerButtonSVG = (props: { open: boolean; class: string }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" class={props.class}>
      <rect
        x="5"
        y="6"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-1" : ""}`}
      ></rect>
      <rect
        x="5"
        y="13.5"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "opacity-0" : ""}`}
      ></rect>
      <rect
        x="5"
        y="21"
        width="20"
        height="3"
        rx="1.5"
        ry="1.5"
        class={`menu-icon-svg ${props.open ? "close-icon-svg-2" : ""}`}
      ></rect>
    </svg>
  );
};

export default HeaderButtons;
