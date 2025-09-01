import { createEffect, onMount } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import elementPosOnPage from "~/utils/elementPosOnPage";
import { useGlobalContext } from "~/store/StoreProvider";

const useScrollIsAt0 = () => {
  const { store, set_store } = useGlobalContext();
  const [searchParams] = useSearchParams();
  const route = () => store.route;

  createEffect(() => {
    const article = route().split("/").pop();
    if (searchParams.id) {
      set_store("scroll_is_at_0", false);
    } else {
      const savedScroll = Number(
        localStorage.getItem(`${article}_scroll`) || "0",
      );
      set_store("scroll_is_at_0", savedScroll === 0);
    }
  });
};

export default useScrollIsAt0;
