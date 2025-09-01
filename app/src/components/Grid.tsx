import { MOBILE_MAX_WIDTH } from "~/constants";
import {
  mergeProps,
  ParentProps,
  children,
  For,
  createEffect,
  onCleanup,
  createSignal,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { TEXT_X_PADDING } from "~/constants";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

type GridProps = ParentProps &
  SharedProps & {
    cols?: number;
    sm_cols?: number;
    center_on_overflow?: boolean;
    sm_cutoff?: number;
    place_items?: "end" | "start" | "center";
    margin_top?: number;
    margin_bottom?: number;
    gap?: string;
    column_first?: boolean;
    with_padding?: boolean;
  };

const Grid = (_props: GridProps) => {
  const props = mergeProps(
    {
      margin_top: 0,
      margin_bottom: 0,
      cols: 0,
      sm_cols: -1,
      sm_cutoff: MOBILE_MAX_WIDTH,
      class: "",
      place_items: "center",
      gap: "1rem",
      with_padding: true,
    },
    _props,
  );

  const { store } = useGlobalContext();

  props.cols = Math.max(props.cols, props.sm_cols, 1);
  props.sm_cols = props.sm_cols <= 0 ? props.cols : props.sm_cols;

  const children_array = children(() => props.children).toArray();

  const [cols, setCols] = createSignal(props.cols);

  const handleResize = () => {
    setCols(store.innerWidth <= props.sm_cutoff ? props.sm_cols : props.cols);
  };

  createEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    onCleanup(() => window.removeEventListener("resize", handleResize));
  });

  let parentSpan: HTMLDivElement | undefined;

  createEffect(() => {
    if (!props.column_first) return;
    const children = parentSpan?.children || [];
    const rows = Math.ceil(children.length / cols());
    for (let i = 0; i < children.length; i++) {
      const elementCol = Math.ceil((i + 1) / rows);
      const elementRow = (i % rows) + 1;
      const precedingElementsInPrevRows = (elementRow - 1) * cols();
      const precedingElementsInCurrRow = elementCol - 1;
      let number = precedingElementsInPrevRows + precedingElementsInCurrRow;
      children[i].setAttribute("style", `order: ${number}`);
    }
  });

  return (
    <div
      class={`text-column ${props.class}`}
      style={{
        "margin-top": `${props.margin_top}px`,
        "margin-bottom": `${props.margin_bottom}px`,
        "padding-inline": props.with_padding ? `${TEXT_X_PADDING}px` : "0",
        width: `${mainColumnWidth()}px`,
      }}>
      <div
        ref={parentSpan}
        class={`text-column !grid list-none`}
        style={{
          animation: "appear 2s ease 0s 1 normal forwards",
          "place-items": props.place_items,
          gap: props.gap,
          "grid-template-columns": `repeat(${cols()}, 1fr)`,
        }}>
        <For each={children_array}>
          {(child, index) => {
            return (
              <span
                class={twJoin(
                  "w-max",
                  children_array.length - index() < cols() &&
                    children_array.length % cols() !== 0 &&
                    "col-span-full w-max",
                )}>
                {child}
              </span>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Grid;
