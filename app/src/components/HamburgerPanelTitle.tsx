import {
  TOCTitleLeftEndmarkSVG,
  TOCTitleRightEndmarkSVG,
} from "./TOCTitleEndmarks";

const HamburgerPanelTitle = (props: { label: string }) => {
  return (
    <h1 class="font-baskerville-italic mt-[5px] mb-[7px] flex justify-between !text-3xl items-baseline !leading-9 ">
      <TOCTitleLeftEndmarkSVG />
      <span class="body_line" style="margin-right:0.6em;"></span>
      <span class="text-right">{props.label}</span>
      <span class="body_line" style="margin-left:0.6em;"></span>
      <TOCTitleRightEndmarkSVG />
    </h1>
  );
};

export default HamburgerPanelTitle;
