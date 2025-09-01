import { useLocation, useSearchParams } from "@solidjs/router";
import { createEffect, createSignal, onMount } from "solid-js";
import useScrollToInChapter from "./useScrollToInChapter";
import { useGlobalContext } from "~/store/StoreProvider";

const useCheckedSavedScroll = () => {
  const [searchParams, _] = useSearchParams();
  const location = useLocation();
  const { store, set_store } = useGlobalContext();

  onMount(() => {
    set_store("saved_scroll_finished", false);
  });

  if (searchParams.id) {
    const { scrollToInChapter } = useScrollToInChapter();

    onMount(() => {
      setTimeout(async () => {
        await scrollToInChapter(searchParams.id as string);
        set_store("saved_scroll_finished", true);
      }, 200);
    });

    return;
  }

  const [scroll, set_scroll] = createSignal<number | null>(null);
  createEffect(() => {
    const update = (e: Event) => {
      set_scroll(window.scrollY);
    };

    setTimeout(() => {
      const article = location.pathname.split("/").pop();
      set_scroll(Number(localStorage.getItem(`${article}_scroll`) || "0"));

      if (scroll() !== null) {
        window.scrollTo(
          (document.body.scrollWidth - window.innerWidth) / 2,
          Number(scroll()),
        );
      }
      set_store("saved_scroll_finished", true);

      window.addEventListener("scroll", update);
    }, 100);

    return () => {
      window.removeEventListener("scroll", update);
    };
  });

  createEffect(() => {
    if (scroll() !== null) {
      requestAnimationFrame(() => {
        const article = location.pathname.split("/").pop();
        localStorage.setItem(`${article}_scroll`, window.scrollY.toString());
      });
    }
  });
};

export default useCheckedSavedScroll;
