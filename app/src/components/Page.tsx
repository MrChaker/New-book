import { onMount, onCleanup, ParentProps } from "solid-js";
import useScrollX from "~/hooks/useScrollX";
import { useGlobalContext } from "~/store/StoreProvider";
import useSetRoute from "~/hooks/useSetRoute";
import useBreadcrumbs from "~/hooks/useBreadcrumbs";
import useScrollIsAt0 from "~/hooks/useScrollIsAt0";
import useOnMobile from "../hooks/useOnMobile";
import usePrevNextPage from "~/hooks/usePrevNextPage";
import { useLocation } from "@solidjs/router";

type PageProps = {
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Page = (props: ParentProps & PageProps) => {
  let { set_store, store } = useGlobalContext();
  const { getPrevArticle, getNextArticle } = usePrevNextPage();
  const { on_mobile } = useOnMobile();
  const location = useLocation();

  useScrollX();
  useScrollIsAt0();
  useSetRoute();
  useBreadcrumbs();

  set_store("pageNecessaryMargin", props.pageNecessaryMargin || 0);
  set_store("maxElementWidth", props.maxElementWidth || 0);
  set_store("nextPage", props.nextPage || "");
  set_store("prevPage", props.prevPage || "");

  // **********************
  // **** handleScroll ****
  // **********************

  const handleScroll = () => {
    set_store("scrollY", window.scrollY);
    set_store("scrollX", window.scrollX);
  };

  // ************************************
  // **** handleScrollendAndTouchend ****
  // ************************************

  const handleScrollendAndTouchend = () => {
    let scrollXWhenCentered = (store.scrollWidth - store.innerWidth) / 2;
    let distanceFromCentered = Math.abs(store.scrollX - scrollXWhenCentered);

    if (distanceFromCentered < 1) {
      set_store("margin_mode", false);
      return;
    }

    if (distanceFromCentered < 200) {
      window.scroll({
        left: scrollXWhenCentered,
        behavior: "smooth",
      });
      set_store("margin_mode", false);
      return;
    }

    set_store("margin_mode", true);
  };

  // **********************
  // **** handleResize ****
  // **********************

  const handleResize = () => {
    let oldInnerWidth = store.innerWidth;
    let oldScrollWidth = store.scrollWidth;

    set_store("innerWidth", window.innerWidth);
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);

    let _dummy =
      store.scrollY +
      store.innerHeight +
      store.scrollHeight +
      store.scrollWidth;

    if (
      oldInnerWidth != store.innerWidth ||
      oldScrollWidth != store.scrollWidth
    ) {
      window.scroll({
        left: (store.scrollWidth - store.innerWidth) / 2,
        behavior: "instant",
      });
    }
  };

  // *********************
  // **** handleClick ****
  // *********************

  const handleClick = (e: MouseEvent) => {
    const targetIsAnchor = (element: Element) => {
      let currentElement = element;
      while (
        currentElement !== null &&
        currentElement !== document.documentElement
      ) {
        if (currentElement.tagName === "A") {
          return true;
        }
        currentElement = currentElement.parentElement as Element;
      }
      return false;
    };

    if (targetIsAnchor(e.target as Element)) {
      return;
    }

    if (store.margin_mode) {
      window.scroll({
        left: (store.scrollWidth - store.innerWidth) / 2,
        behavior: "smooth",
      });
      set_store("margin_mode", false);
      e.stopPropagation();
      return;
    }

    if (on_mobile()) {
      return;
    }

    if (e.clientY <= store.innerHeight * 0.25 && window.scrollY != 0) {
      window.scrollBy({ top: -store.innerHeight });
      e.stopPropagation();
      return;
    }

    if (
      e.clientY >= store.innerHeight * 0.75 &&
      window.scrollY + window.innerHeight < document.body.scrollHeight
    ) {
      window.scrollBy({ top: store.innerHeight });
      e.stopPropagation();
      return;
    }

    if (e.clientX < store.innerWidth * 0.1) {
      getPrevArticle();
      e.stopPropagation();
      return;
    }

    if (e.clientX > store.innerWidth * 0.9) {
      getNextArticle();
      e.stopPropagation();
      return;
    }
  };

  // ***********************
  // **** handleKeydown ****
  // ***********************

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      getPrevArticle();
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      getNextArticle();
      return;
    }
  };

  onMount(() => {
    handleScroll();
    handleResize();
    set_store("loading", false);
    if (location.pathname !== "/") {
      set_store("have_been_outside_home", true);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("scrollend", handleScrollendAndTouchend);
    document.addEventListener("touchend", handleScrollendAndTouchend);
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeydown);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scrollend", handleScrollendAndTouchend);
      document.removeEventListener("touchend", handleScrollendAndTouchend);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeydown);
    });
  });

  return <>{props.children}</>;
};

export default Page;
