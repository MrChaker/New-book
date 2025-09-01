import { MOBILE_MAX_WIDTH } from "~/constants";
import {
  ParentProps,
  createSignal,
  createEffect,
  onCleanup,
  onMount,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

const Table = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();
  let [scale, set_scale] = createSignal(1.0);
  let [scaled_down, set_scaled_down] = createSignal(false);
  let [recent_click, set_recent_click] = createSignal(false);
  let [after_first_load, set_after_first_load] = createSignal(false);
  let table_ref: HTMLTableElement | undefined;

  const tableWidth = () => {
    let toReturn = table_ref ? table_ref.offsetWidth : 3000;
    return toReturn;
  };

  const tableHeight = () => {
    let toReturn = table_ref ? table_ref.offsetHeight : 3000;
    return toReturn;
  };

  const scaled_down_scale = () =>
    Math.min(1, (store.innerWidth - 32.0) / tableWidth());
  const our_on_mobile = () => store.innerWidth <= MOBILE_MAX_WIDTH;

  const reset_scale = () => {
    if (our_on_mobile() && scaled_down_scale() < 1) {
      set_scale(scaled_down_scale());
      set_scaled_down(true);
    } else {
      set_scale(1);
      set_scaled_down(false);
    }
  };

  const handleResize = () => {
    let previous_on_mobile = our_on_mobile();
    if (previous_on_mobile != our_on_mobile() || !previous_on_mobile)
      reset_scale();
  };

  createEffect(() => {
    window.requestAnimationFrame(() => {
      handleResize();
      reset_scale();
    });
    setTimeout(() => {
      set_after_first_load(true);
    }, 2000);
    window.addEventListener("resize", handleResize);
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <div style={props.style}>
      <table
        class={twJoin(
          props.class,
          "scrollbar-hidden sm:overflow-x-visible m-auto h-[inherit]",
          // recent_click() && "bg-reddish",
          after_first_load() && "transition-all",
        )}
        ref={table_ref}
        onClick={(_) => {
          const newScaledDown = our_on_mobile() ? !scaled_down() : false;
          set_scaled_down(newScaledDown);
          set_after_first_load(true);
          set_scale(newScaledDown ? scaled_down_scale() : 1);
          set_recent_click(true);
          setTimeout(() => {
            set_recent_click(false);
          }, 100);
        }}
        style={`transform:scale(${scale()});margin-top:${(tableHeight() * (scale() - 1)) / 2}px;margin-bottom:${(tableHeight() * (scale() - 1)) / 2}px;`}>
        {props.children}
      </table>
    </div>
  );
};

export default Table;
