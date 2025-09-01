import mainColumnWidth from "~/hooks/useMainColumnWidth";
import {
  CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP,
  CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE,
  CHAPTER_TITLE_TOP_MARGIN_DESKTOP,
  CHAPTER_TITLE_TOP_MARGIN_MOBILE,
} from "../constants";
import useOnMobile from "../hooks/useOnMobile";
import { ParentProps } from "solid-js";

const ArticleTitle = (props: ParentProps & {
  banner?: string;
}) => {
  const { on_mobile } = useOnMobile();

  return (
    <div class="text-column" style={`width:${mainColumnWidth()}px;`}>
      <h1
        class="text-2rem sm:text-4xl pt-5 sm:pt-4 pb-4"
        style={`margin-top: ${
          on_mobile()
            ? CHAPTER_TITLE_TOP_MARGIN_MOBILE
            : CHAPTER_TITLE_TOP_MARGIN_DESKTOP
        }px;margin-bottom: ${
          on_mobile()
            ? CHAPTER_TITLE_BOTTOM_MARGIN_MOBILE
            : CHAPTER_TITLE_BOTTOM_MARGIN_DESKTOP
        }px`}
      > {props.banner}
        {" "}
        {props.children}
      </h1>
    </div>
  );
};

export default ArticleTitle;
