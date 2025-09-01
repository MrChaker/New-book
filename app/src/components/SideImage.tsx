import {
  createEffect,
  mergeProps,
  ParentProps,
  createSignal,
  onMount,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import ImageOrSideImage from "./ImageOrSideImage";
import { useGlobalContext } from "~/store/StoreProvider";
import { useScale } from "~/store/ScaleProvider";
import { DESKTOP_COLUMN_WIDTH, MOBILE_MAX_WIDTH } from "~/constants";
import useOnMobile from "../hooks/useOnMobile";

type UserFacingSideImageProps = ParentProps &
  SharedProps & {
    src: string;
    offset_y?: string;
    offset_x?: string;
    compensate_offset_x_for_large_text_columns?: boolean;
    line?: number;
    squiggle?: boolean;
    width?: string;
    squiggle_y?: string | number;
    children_y?: string | number;
    children_x?: string | number;
    clickable_on_desktop?: boolean;
    padding?: string | number;
    popup?: boolean;
  };

type InternalSideImageProps = UserFacingSideImageProps & {
  side: string;
  offset_x: string;
  offset_y: string;
  compensate_offset_x_for_large_text_columns: boolean;
  line: number;
};

const SideImage = (props: InternalSideImageProps) => {
  let container_ref: HTMLDivElement | undefined;
  const { store } = useGlobalContext();
  const show_squiggles = () => store.show_squiggles;
  const scale = useScale();
  // was trying to solve a bug, didn't work, this can be re-simplified at some point (see also (*))
  const [our_scale_copy, set_our_scale_copy] = createSignal(scale().scale);
  const { on_mobile } = useOnMobile();

  let maybeChildren = () => {
    if (props.children) {
      return (
        <div
          class="absolute z-10"
          style={`top: ${props.children_y}; left: ${props.children_x}`}>
          {props.children}
        </div>
      );
    }
    return <></>;
  };

  createEffect(() => {
    set_our_scale_copy(scale().scale);
  });

  onMount(() => {
    setTimeout(() => {
      set_our_scale_copy(scale().scale);
    }, 500);
    setTimeout(() => {
      set_our_scale_copy(scale().scale);
    }, 2000);
  });

  return (
    <div
      ref={container_ref}
      class="absolute"
      style="left:0;top:0;width:100%;height:100%;background-color:none;margin:0;padding:0;pointer-events:none;">
      <div
        style={{
          // visibility: scale().after_first_click || !on_mobile() ? "visible" : "hidden", // (*) have to do this cause we just couldn't get rid of that bug where we can't "hear" the initial scale...
          left: getLeft(
            props.side,
            props.offset_x,
            our_scale_copy(),
            store.innerWidth,
            props.compensate_offset_x_for_large_text_columns,
          ),
          right: getRight(
            props.side,
            props.offset_x,
            our_scale_copy(),
            store.innerWidth,
            props.compensate_offset_x_for_large_text_columns,
          ),
          top: getTop(props.line, props.offset_y, our_scale_copy()),
          transform: `translateY(calc(-50%))`,
          padding: `${props.padding}`,
          "transform-origin": `0 top 0`,
          scale: our_scale_copy(),
          "z-index": 20,
        }}
        class="flex shrink-0 transition-opacity duration-300 lg:transition-none lg:opacity-100 absolute w-max">
        <ImageOrSideImage
          class={twJoin(props.class, !props.width && "max-w-max", "cloud")}
          style={props.style}
          src={props.src}
          side_image={true}
        />
        {maybeChildren()}
      </div>

      {show_squiggles() && props.squiggle && (
        <div
          class="squiggle block sm:hidden absolute"
          style={{
            left: props.side === "right" ? "50%" : "0",
            right: props.side === "right" ? "0" : "50%",
            top: `${props.squiggle_y}`,
            transform: "translate(-50%, -50%)",
            padding: "2.6rem",
          }}>
          <img
            loading="lazy"
            src="/images/squiggle.png"
            class="h-11 min-w-[45px]"
          />
        </div>
      )}
    </div>
  );
};

export const ImageRight = ({
  line = 0,
  offset_x = "0px",
  offset_y = "0px",
  compensate_offset_x_for_large_text_columns = false,
  ...props
}: UserFacingSideImageProps) => {
  let internalProps: InternalSideImageProps = mergeProps(props, {
    side: "right",
    offset_x: offset_x,
    offset_y: offset_y,
    compensate_offset_x_for_large_text_columns:
      compensate_offset_x_for_large_text_columns,
    line: line,
  });

  return <SideImage {...internalProps}></SideImage>;
};

export const ImageLeft = ({
  line = 0,
  offset_x = "0px",
  offset_y = "0px",
  compensate_offset_x_for_large_text_columns = false,
  ...props
}: UserFacingSideImageProps) => {
  let internalProps: InternalSideImageProps = mergeProps(props, {
    side: "left",
    offset_x: offset_x,
    offset_y: offset_y,
    compensate_offset_x_for_large_text_columns:
      compensate_offset_x_for_large_text_columns,
    line: line,
  });

  return <SideImage {...internalProps}></SideImage>;
};

const getLeft = (
  side: string,
  offset_x: string,
  scale: number,
  innerWidth: number,
  compensate_offset_x: boolean,
): string => {
  let text_width =
    innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : innerWidth;
  let added = compensate_offset_x
    ? Math.max(0, (text_width - DESKTOP_COLUMN_WIDTH) / 2)
    : 0;
  return side === "right"
    ? `calc(100% + ${offset_x} * ${scale} + ${added}px * ${scale})`
    : "";
};

const getRight = (
  side: string,
  offset_x: string,
  scale: number,
  innerWidth: number,
  compensate_offset_x: boolean,
): string => {
  let column_width =
    innerWidth > MOBILE_MAX_WIDTH ? DESKTOP_COLUMN_WIDTH : innerWidth;
  let added = compensate_offset_x
    ? Math.max(0, (column_width - DESKTOP_COLUMN_WIDTH) / 2)
    : 0;
  return side === "left"
    ? `calc(100% + ${offset_x} * ${scale} + ${added}px * ${scale})`
    : "";
};

const getTop = (line: number, offset_y: string, scale: number): string => {
  let line_height = 30;
  let top = "";
  if (line > 0) {
    top = `calc(0% + ${(line - 0.5) * line_height}px * ${scale} + ${offset_y} * ${scale})`;
  } else if (line < 0) {
    top = `calc(100% + ${(0.5 + line) * line_height}px * ${scale} + ${offset_y} * ${scale})`;
  } else {
    top = `calc(50% + ${offset_y} * ${scale})`;
  }
  return top;
};
