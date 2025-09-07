import HamburgerPanelItem  from "~/components/HamburgerPanelItem";
import HamburgerPanelTitle  from "~/components/HamburgerPanelTitle";

const HamburgerPanelAuthorSuppliedContents = () => {
  return <>
    <div id="chapter">
      <HamburgerPanelTitle label="Chapters" />
      <ul>
        <HamburgerPanelItem
          article_type={1}
          href="chapter1">
          A {" "}
          <i>
            Few
          </i>
          {" "} Refreshers
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={2}
          href="chapter2">
          Slopes
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={3}
          href="chapter3">
          Functions
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={4}
          href="chapter4">
          Derivatives
        </HamburgerPanelItem>
        <HamburgerPanelItem
          article_type={5}
          href="chapter5">
          The Trigonometric Functions
        </HamburgerPanelItem>
      </ul>
    </div>
  </>;
};

export default HamburgerPanelAuthorSuppliedContents;