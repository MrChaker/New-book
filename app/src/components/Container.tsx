import { ParentProps } from "solid-js";
import Nav from "./Nav";
import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import LoadingGraphic from "./LoadingGraphic";

const Container = (props: ParentProps) => {
  let { store } = useGlobalContext();

  const containerWidth = () =>
    Math.max(
      store.innerWidth,
      store.maxElementWidth + 60,
      mainColumnWidth() + 2 * store.pageNecessaryMargin,
    );

  const marginWidth = () => (containerWidth() - mainColumnWidth()) / 2;

  const marginBeyondNecessaryMargin = () =>
    marginWidth() - store.pageNecessaryMargin;

  const marginShowAreaDivs = () => {
    return (
      <>
        <div
          style={`position:absolute;top:0;left:${marginBeyondNecessaryMargin()}px; width:${store.pageNecessaryMargin}px;height:100%;background-color:rgba(255, 0, 0, 0.2);border:2px solid red;pointer-events:none;z-index:1000;`}
        />
        <div
          style={`position:absolute;top:0;right:${marginBeyondNecessaryMargin()}px;width:${store.pageNecessaryMargin}px;height:100%;background-color:rgba(255, 0, 0, 0.2);border: 2px solid red;pointer-events:none;z-index:1000;`}
        />
      </>
    );
  };

  const maxElementShowAreasDiv = () => {
    return (
      <div
        style={`position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: ${store.maxElementWidth}px; height: 100%; background-color: rgba(0, 255, 0, 0.2); border: 2px solid green; pointer-events: none; z-index: 999;`}
      />
    );
  };

  return (
    <>
      <div
        id="Container"
        class="min-h-screen pb-14 -z-10 relative overflow-hidden"
        style={{
          width: containerWidth() + "px",
          opacity: store.saved_scroll_finished || store.scroll_is_at_0 ? 1 : 0,
        }}>
        <EarlyImages />
        {store.show_areas &&
          store.pageNecessaryMargin > 0 &&
          marginShowAreaDivs()}
        {store.show_areas && maxElementShowAreasDiv()}
        <Nav />
        {props.children}
        {store.loading && <LoadingGraphic />}
      </div>
    </>
  );
};

const EarlyImages = () => {
  return (
    <div style="overflow:hidden;position:absolute;top:0px;left:0px;pointer-events:none;width:1px;height:1px;">
      <img src="/images/svg_base_exponent.svg" style="position:absolute" />
      <img src="/images/loading_screen.png" style="position:absolute" />
      <img
        src="/images/svg_ch1_ch_minus_two_squared_cloud.svg"
        style="position:absolute"
      />
      <img src="/images/chapter_2_1.svg" style="position:absolute" />
      <img src="/images/svg_ch3_f_box.svg" style="position:absolute" />
      <img src="/images/svg_ch4_ch_polaroids.svg" style="position:absolute" />
      <img src="/images/svg_ch5_ch_cosine.svg" style="position:absolute" />
      <img
        src="/images/svg_ch5_ch_cosine_and_sine.svg"
        style="position:absolute"
      />
      <b>Load the bold font!</b>
      <i>Load the italic font!</i>
    </div>
  );
};

export default Container;
