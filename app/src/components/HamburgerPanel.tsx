import { HAMBURGER_MENU_HEIGHT } from "~/constants";
import { Store, useGlobalContext } from "~/store/StoreProvider";
import HamburgerPanelTitle from "./HamburgerPanelTitle";
import HamburgerPanelAuthorSuppliedContents from "./HamburgerPanelAuthorSuppliedContents";
import { createSignal, createEffect } from "solid-js";

const HamburgerPanel = () => {
  const { store } = useGlobalContext();
  const menu_closed = () => !store.panel_opened;
  const env = import.meta.env.VITE_ENV;

  const toggle_scroll = (overflow: string) => {
    if (menu_closed()) {
      document.body.style.setProperty("overflow", overflow);
    } else {
      document.body.style.setProperty("overflow", overflow);
    }
  };

  return (
    <div
      id="hamburger_panel"
      classList={{
        "duration-500": store.animations && menu_closed(),
        "duration-200": store.animations && !menu_closed(),
        "duration-0": !store.animations,
      }}
      onMouseEnter={() => toggle_scroll("hidden")}
      onMouseLeave={() => toggle_scroll("auto")}
      onTouchStart={() => toggle_scroll("hidden")}
      onTouchEnd={() => toggle_scroll("auto")}
      style={{
        "min-height": `calc(100vh - ${HAMBURGER_MENU_HEIGHT - 1.0}px)`,
        height: `calc(100vh - ${HAMBURGER_MENU_HEIGHT}px)`,
        transform: `translateX(${menu_closed() ? "100%" : "0"})`,
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      class="text-xl leading-3 sm:leading-5 z-50 fixed right-0 top-14 scrollbar-hidden select-none overscroll-none w-[17rem] sm:w-[20rem] bg-stone-100 overflow-y-scroll translate-y-0 sm:translate-y-[-1px] pt-[0.6em] px-[1em] [&ul]:mb-[8px] [&ul]:p-0">
      <HamburgerPanelAuthorSuppliedContents />
      {env === "DEV" || env === "LOCAL" ? (
        <>
          <div id="options">
            <HamburgerPanelTitle label="Options" />
            <Option label="Areas" state_key="show_areas" />
            <Option
              label="Section Dividers"
              state_key="show_section_dividers"
            />
            <Option label="Navigation delays" state_key="navigation_delays" />
            <Option label="Animations" state_key="animations" />
            <ClearCache />
          </div>
          <div id="stats">
            <HamburgerPanelTitle label="Stats" />
            <Stat
              label="Page load"
              value={`${(store.last_page_load_ms / 1000).toFixed(2)}s`}
            />
            <Stat
              label="Avg Page load"
              value={
                store.num_page_loads
                  ? `${(store.total_page_load_ms / (store.num_page_loads * 1000)).toFixed(2)}s`
                  : "0s"
              }
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const Option = (props: { label: string; state_key: keyof Store }) => {
  const { store, set_store } = useGlobalContext();
  const state = () => store[props.state_key] as boolean;

  return (
    <div
      id="option-btn"
      class="flex justify-between items-center text-2xl pb-1.5 sm:pb-2">
      <p>{props.label}</p>
      <Checkbox
        value={state()}
        onChange={() => set_store(props.state_key, !state())}
      />
    </div>
  );
};

const Stat = (props: { label: string; value: string }) => {
  return (
    <div class="flex justify-between items-center text-2xl pb-1.5 sm:pb-2">
      <p>{props.label}</p>
      <p>{props.value}</p>
    </div>
  );
};

const ClearCache = () => {
  const handleClear = () => {
    localStorage.clear();
    (window.location.reload as any)(true);
  };

  return (
    <div
      id="clear-cache-btn"
      onClick={handleClear}
      class="flex justify-between items-center text-2xl pb-1.5 sm:pb-2 cursor-pointer hover:text-blue-600">
      <p>Clear Cache/Cookies</p>
      <div class="w-5 h-5 flex items-center justify-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const Checkbox = (props: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        props.onChange(!props.value);
      }}
      class={`w-5 h-5 border border-solid border-black rounded flex items-center justify-center cursor-pointer ${
        props.value
          ? "bg-[#c1ebff] hover:bg-[#9ac1d3]"
          : "bg-white hover:bg-[#f3f3f3]"
      }`}>
      {props.value && (
        <svg
          width="14"
          height="9"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            width="2.09"
            height="7.33987"
            rx="1.045"
            transform="matrix(0.460058 -0.887889 0.625737 0.780034 0 6.85571)"
            fill="white"></rect>
          <rect
            width="2.09"
            height="13.38"
            rx="1.045"
            transform="matrix(0.529272 0.848452 -0.560655 0.828049 11.5157 0)"
            fill="white"></rect>
        </svg>
      )}
    </div>
  );
};

export default HamburgerPanel;
