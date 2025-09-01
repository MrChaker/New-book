import {
  children,
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  ParentProps,
} from "solid-js";
import { useGlobalContext } from "~/store/StoreProvider";
import { HAMBURGER_MENU_HEIGHT, MOBILE_MAX_WIDTH } from "~/constants";
import { Component } from "solid-js";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import { twJoin } from "tailwind-merge";
import SharedProps from "./types/SharedProps";
import OutlinedText from "./OutlinedText";
import { useLocalStorage } from "solidjs-hooks";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const screen_width_to_achieve_max_size = 1500;
const screen_width_to_achieve_min_size = 1280;
const screen_width_to_achieve_default_visible = 1280;
const screen_width_to_achieve_on = MOBILE_MAX_WIDTH;
const max_font_size = 14;
const min_font_size = 11;
const max_size_line_wrap_width_pct = 0.6;
const min_size_line_wrap_width_pct = 0.9;
const min_line_height = 1.3; // in rem
const max_line_height = 1.6;
const closing_circle_min_size_stroke_width = 1.5;
const closing_circle_max_size_stroke_width = 2.5;
const min_size_closing_circle_radius = 16;
const max_size_closing_circle_radius = 24;
const min_size_top_margin = 10;
const max_size_top_margin = 18;
const min_size_left_margin = 16;
const max_size_left_margin = 26;

const linear_interpolation = (val_at_0: number, val_at_1: number, t: number) =>
  val_at_0 + (val_at_1 - val_at_0) * t;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const calculate_values = () => {
  const { store } = useGlobalContext();

  const progress = () =>
    clamp(
      (store.innerWidth - screen_width_to_achieve_min_size) /
        (screen_width_to_achieve_max_size - screen_width_to_achieve_min_size),
      0,
      1,
    );

  const font_size = () =>
    linear_interpolation(min_font_size, max_font_size, progress());

  const line_wrap_width_pct = () =>
    linear_interpolation(
      min_size_line_wrap_width_pct,
      max_size_line_wrap_width_pct,
      progress(),
    );

  const line_height = () =>
    linear_interpolation(min_line_height, max_line_height, progress());

  const closing_circle_stroke_width = () =>
    linear_interpolation(
      closing_circle_min_size_stroke_width,
      closing_circle_max_size_stroke_width,
      progress(),
    );

  const closing_circle_radius = () =>
    linear_interpolation(
      min_size_closing_circle_radius,
      max_size_closing_circle_radius,
      progress(),
    );

  const top_margin = () =>
    linear_interpolation(min_size_top_margin, max_size_top_margin, progress());

  const left_margin = () =>
    linear_interpolation(
      min_size_left_margin,
      max_size_left_margin,
      progress(),
    );

  const default_visible_state = () =>
    screen_width_to_achieve_default_visible < store.innerWidth;

  const on = () => screen_width_to_achieve_on <= store.innerWidth;

  return {
    font_size,
    line_wrap_width_pct,
    line_height,
    closing_circle_stroke_width,
    closing_circle_radius,
    top_margin,
    left_margin,
    default_visible_state,
    on,
  };
};

const SectionsBreadcrumbs = (props: ParentProps) => {
  const { store } = useGlobalContext();
  const {
    font_size,
    line_height,
    line_wrap_width_pct,
    top_margin,
    left_margin,
    default_visible_state,
    on,
  } = calculate_values();

  const [visible, setVisible] = useLocalStorage(
    "sections-breadcrumbs-visible",
    default_visible_state(),
  );
  const [hasBeenClosed, setHasBeenClosed] = createSignal(false);
  const really_visible = () => visible() && store.have_been_outside_home;

  const [outSideHovered, setOutSideHovered] = createSignal(false);
  let children_list = children(() => props.children).toArray();

  const top_margin_when_not_sticky = () => HAMBURGER_MENU_HEIGHT + top_margin();
  const sticky = () =>
    store.scrollY > top_margin_when_not_sticky() - top_margin();

  let ref: HTMLUListElement | undefined;

  const { getPrevArticle, prevDisabled, getNextArticle, nextDisabled } =
    usePrevNextPage();

  createEffect(() => {
    if (!visible()) {
      setHasBeenClosed(true);
    }
  });

  onMount(() => {
    const isMouseOverElement = (
      element: HTMLElement | null,
      { x, y }: MouseEvent,
    ) => {
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      );
    };

    const hotCorner = document.getElementById("hot-corner");

    const handler = (e: MouseEvent) => {
      if (isMouseOverElement(hotCorner, e)) {
        setTimeout(() => {
          setOutSideHovered(false);
        }, 100);
        return;
      }
      setOutSideHovered(true);
    };

    (window as any).MathJax.typesetPromise([ref]);
    ref?.querySelectorAll(".math").forEach((math) => {
      (math as HTMLElement).style.opacity = "1";
    });

    document.body.addEventListener("mouseover", handler);
    onCleanup(() => {
      document.body.removeEventListener("mouseover", handler);
    });
  });

  return (
    <>
      <div
        id="ultra-hot-corner" // unused 'id' but for self-documenting purposes...
        style={{
          border: store.show_areas ? "5px solid rgb(181, 25, 25)" : "none",
          width: "150px",
          height: "50px",
          position: "fixed",
          top: (sticky() ? 0 : HAMBURGER_MENU_HEIGHT - store.scrollY) + "px",
          left: "0",
          "z-index": 20,
        }}
        onMouseEnter={() => setVisible(true)}></div>
      <div
        id="hot-corner" // this one is used!
        style={{
          border: store.show_areas ? "5px solid rgb(249, 150, 150)" : "none",
          width: "150px",
          height: "200px",
          position: "fixed",
          top: (sticky() ? 0 : HAMBURGER_MENU_HEIGHT - store.scrollY) + "px",
          left: "0",
          "z-index": 10,
        }}
        onMouseEnter={() => {
          setVisible(really_visible() || outSideHovered());
        }}></div>
      <div
        id="breadcrumbs"
        style={{
          background: store.show_areas ? "#5a3a" : "#0000",
          position: sticky() ? "fixed" : "absolute",
          "z-index": really_visible() ? 25 : 0,
          top: (sticky() ? top_margin() : top_margin_when_not_sticky()) + "px",
          "padding-inline": left_margin() + "px",
          width:
            0.5 *
              (store.innerWidth - mainColumnWidth()) *
              line_wrap_width_pct() +
            "px",
          left: sticky() ? "0" : store.scrollX + "px",
          display: on() ? "block" : "none",
        }}>
        <div
          style={{
            transform: `translateY(${really_visible() ? "0" : "-120%"})`,
            opacity: really_visible() ? 1 : 0,
            transition: hasBeenClosed()
              ? `all ${Math.min(300 + children_list.length * 50, 600)}ms ease-in-out`
              : "none",
          }}>
          <ul
            ref={ref}
            style={{
              "font-size": font_size() + "px",
              "line-height": line_height() + "rem",
            }}>
            <li
              style={{
                "font-size": font_size() * 0.99 + "px", // slightly smaller font-size
                "padding-bottom": line_height() * 0.06 + "rem", // ...and more space below, to offset optical illusion caused by underline
              }}
              class="breadcrumb-prev-next flex gap-2">
              <OutlinedText
                onClick={(e: any) => {
                  e.stopPropagation();
                  getPrevArticle();
                }}
                class={twJoin(
                  prevDisabled() && "!text-stone-300 cursor-default",
                  "underline cursor-pointer",
                )}>
                &lt;&lt;prev
              </OutlinedText>
              <OutlinedText
                onClick={(e: any) => {
                  e.stopPropagation();
                  getNextArticle();
                }}
                class={twJoin(
                  nextDisabled() && "!text-stone-300 cursor-default",
                  "underline cursor-pointer",
                )}>
                next&gt;&gt;
              </OutlinedText>
            </li>
            {props.children}
          </ul>
          <CloseCircleIcon
            class="mt-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export const BreadcrumbItem = (props: ParentProps & SharedProps) => {
  return (
    <li id={props.id} class="breadcrumb">
      <OutlinedText>{props.children}</OutlinedText>
    </li>
  );
};

const CloseCircleIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
  props,
) => {
  const {
    closing_circle_stroke_width: strokeWidth,
    closing_circle_radius: circleRadius,
  } = calculate_values();

  const iconSize = () => circleRadius() + 4;
  const crossSize = () => iconSize() * 0.4;
  const strokeColor = "currentColor";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize()}
      height={iconSize()}
      viewBox={`0 0 ${iconSize() * 2} ${iconSize() * 2}`}
      fill="none"
      stroke={strokeColor}
      stroke-width={strokeWidth()}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
      onMouseOver={props.onMouseOver}
      onClick={props.onClick}>
      <circle cx={iconSize()} cy={iconSize()} r={circleRadius()}></circle>
      <line
        x1={iconSize() + crossSize()}
        y1={iconSize() - crossSize()}
        x2={iconSize() - crossSize()}
        y2={iconSize() + crossSize()}></line>
      <line
        x1={iconSize() - crossSize()}
        y1={iconSize() - crossSize()}
        x2={iconSize() + crossSize()}
        y2={iconSize() + crossSize()}></line>
    </svg>
  );
};

export default SectionsBreadcrumbs;
