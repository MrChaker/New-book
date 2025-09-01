import {
  TOCTitleLeftEndmarkSVG,
  TOCTitleRightEndmarkSVG,
} from "./TOCTitleEndmarks";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const TOCTitle = (props: { label: string }) => {
  return (
    <h1
      class="text-column flex items-baseline justify-between font-baskerville-italic mb-5 !text-[2.2rem] !leading-9"
      style={`width:${mainColumnWidth()}px;`}
    >
      <TOCTitleLeftEndmarkSVG />
      <span class="body_line" style="margin-right:0.6em;"></span>
      <span class="text-right">{props.label}</span>
      <span class="body_line" style="margin-left:0.6em;"></span>
      <TOCTitleRightEndmarkSVG />
    </h1>
  );
};

export default TOCTitle;
