import { MOBILE_MAX_WIDTH } from "~/constants";
import {
  createEffect,
  createSignal,
  onCleanup,
  mergeProps,
  ParentProps,
} from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import ImageOrSideImage from "./ImageOrSideImage";
import { ScaleProvider } from "~/store/ScaleProvider";
import { useGlobalContext } from "~/store/StoreProvider";
import { useHeightChangeListenerContext } from "~/store/HeightChangeListenerProvider";

type ImageProps = ParentProps &
  SharedProps & {
    src: string;
    id?: string;
    width?: string;
    height?: string;
  };

const Image = (props: ImageProps) => {
  let [scale, set_scale] = createSignal({
    scale: 1.0,
    name: props.src,
    after_first_click: false,
  });
  let [scaled_down, set_scaled_down] = createSignal(false);
  let [recent_click, set_recent_click] = createSignal(0);
  const [innerWidth, set_innerWidth] = createSignal(0);
  let [after_first_click, set_after_first_click] = createSignal(false);
  let image_ref: HTMLImageElement | undefined;
  const { set_height_change_listener_store } =
    useHeightChangeListenerContext() || {};
  const { store } = useGlobalContext();

  props = mergeProps(
    {
      height: "",
      width: "",
    },
    props,
  );

  const imageWidth = () => {
    return image_ref
      ? Math.max(image_ref.naturalWidth, image_ref.offsetWidth)
      : 3000;
  };
  const scaled_down_scale = () =>
    Math.min(1, (store.innerWidth - 32.0) / imageWidth());
  const our_on_mobile = () => store.innerWidth <= MOBILE_MAX_WIDTH;

  const set_should_be_scaled_down = (should_be_scaled_down: boolean) => {
    const large_scale = scaled_down_scale() < 0.81 ? 1 : scaled_down_scale();
    const scale_to_use = should_be_scaled_down
      ? scaled_down_scale()
      : large_scale;

    set_scale({
      scale: 1.1,
      name: props.src,
      after_first_click: after_first_click(),
    }); // desperately trying to get a reaction
    set_scale({
      scale: scale_to_use,
      name: props.src,
      after_first_click: after_first_click(),
    });
    set_scaled_down(scale_to_use < large_scale);
  };

  const reset_scale = () => {
    if (our_on_mobile() && (scaled_down_scale() < 1 || scaled_down())) {
      set_should_be_scaled_down(true);
    } else {
      set_should_be_scaled_down(false);
    }
  };

  const handleResize = () => {
    // backup
    let previous_on_mobile = our_on_mobile();

    // we only want to reset scale as a result of
    // resize if we are not on mobile, or if the on_mobile
    // status has changed (true -> false, false -> true)
    if (previous_on_mobile != our_on_mobile() || !previous_on_mobile)
      reset_scale();
  };

  createEffect(() => {
    window.requestAnimationFrame(() => {
      handleResize();
      set_should_be_scaled_down(true);
    });
    setTimeout(() => {
      set_should_be_scaled_down(true);
    }, 600);
    window.addEventListener("resize", handleResize);
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <ScaleProvider scale={scale}>
      <div id={props.id} class={twJoin("w-fit relative m-auto", props.class)}>
        <ImageOrSideImage
          ref={image_ref}
          onLoad={() => {
            window.requestAnimationFrame(() => {
              set_should_be_scaled_down(true);
            });
          }}
          onClick={() => {
            if (store.margin_mode) return;

            // should we scale? (if it's the first click we should def. scale up)
            const should_be_scaled_down =
              our_on_mobile() && !scaled_down() && after_first_click();
            set_should_be_scaled_down(should_be_scaled_down);

            // bookkeeping other things
            set_after_first_click(true);
            set_scale({
              scale: scale().scale,
              name: scale().name,
              after_first_click: true,
            });
            set_recent_click(should_be_scaled_down ? 1 : 2);
            setTimeout(() => {
              set_recent_click(0);
            }, 100);
            set_innerWidth(window.innerWidth); // (refreshing for safety, since we have all these bugs)
            set_height_change_listener_store?.(
              "re_calculate_height",
              (prev) => !prev,
            );
          }}
          class={twJoin(
            props.class,
            "scrollbar-hidden sm:overflow-x-visible m-auto h-[inherit]",
            our_on_mobile() &&
              (scale().scale < 1 || !after_first_click()) &&
              "max-width-screen",
            our_on_mobile() &&
              (scale().scale < 1 || !after_first_click()) &&
              "scaled-down-bg",
            !(our_on_mobile() && (scale().scale < 1 || !after_first_click())) &&
              "scaled-up-bg",
            // (our_on_mobile() && scale().scale < 0.81) && "scaled-down-bg",  // dark gray means "max-width-screen"
            // !(our_on_mobile() && scale().scale < 0.81) && "scaled-up-bg",   // light gray means not "max-width-screen"

            // (our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 0 && "bg-slate-500",  // dark means "max-width-screen"
            // !(our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 0 && "bg-slate-200", // light means not "max-width-screen"
            // (our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 1 && "bg-reddish-dark", // dark red means "max-width-screen" & recent "scale down" click
            // !(our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 1 && "bg-reddish",     // light red means not "max-width-screen" & recent "scale down" click
            // (our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 2 && "bg-yellowish-dark", // dark yellow means "max-width-screen" & recent "scale up" click
            // !(our_on_mobile() && (scaled_down() || !after_first_click())) && recent_click() == 2 && "bg-yellowish",     // light yellow means not "max-width-screen" & recent "scale up" click

            after_first_click() && "transition-all",
          )}
          style={`width:${props.width};height:${props.height};${props.style}`}
          src={props.src}
          side_image={false}
        />
        {props.children}
      </div>
    </ScaleProvider>
  );
};

export default Image;
