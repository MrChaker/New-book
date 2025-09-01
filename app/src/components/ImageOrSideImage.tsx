import { ParentProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";

type ImageOrSideImageProp = {
  side_image?: boolean;
};

function ImageOrSideImage(
  props: ParentProps &
    JSX.ImgHTMLAttributes<HTMLImageElement> &
    ImageOrSideImageProp,
) {
  let { store } = useGlobalContext();

  return (
    <img
      ref={props.ref}
      onLoad={props.onLoad}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt || ""}
      class={twJoin(
        props.class,
        store.show_areas &&
          (props.side_image ? "top-bottom-background-divide" : "left-right-background-divide"),
      )}
      style={props.style || ""}
    />
  );
}

export default ImageOrSideImage;
