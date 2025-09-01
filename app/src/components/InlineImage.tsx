import SharedProps from "./types/SharedProps";
import ImageOrSideImage from "./ImageOrSideImage";
import styleJoin from "~/utils/styleJoin";

type InlineImageProps = SharedProps & {
  src: string;
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  marginLeft?: string;
  marginRight?: string;
};

const InlineImage = (props: InlineImageProps) => {
  return (
    <>
      <ImageOrSideImage
        loading="lazy"
        class={`bg-cover inline-block relative ${props.class}`}
        style={styleJoin(
          {
            width: props.width,
            height: props.height,
            top: props.top,
            right: props.right,
            bottom: props.bottom,
            left: props.left,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
          },
          props.style,
        )}
        src={props.src}></ImageOrSideImage>
    </>
  );
};

export default InlineImage;
