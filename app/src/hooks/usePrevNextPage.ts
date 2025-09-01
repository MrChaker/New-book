import { useNavigate } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const usePrevNextPage = () => {
  const { store, set_store } = useGlobalContext();
  const navigate = useNavigate();
  const clearCurrentPage = () => set_store("loading", true);
  const prevDisabled = () => store.prevPage === "";
  const nextDisabled = () => store.nextPage === "";
  const getPrevArticle = () => getPage(store.prevPage);
  const getNextArticle = () => getPage(store.nextPage);
  const getPage = (page: string) => {
    if (page === "") return;
    clearCurrentPage();
    // if (store.navigation_delays) {
    //   setTimeout(
    //     () => {
    //       navigate(page, { scroll: false });
    //     },
    //     1500 + Math.random() * 1500,
    //   );
    //   return;
    // }
    navigate(page, { scroll: false });
  };
  return {
    prevDisabled,
    nextDisabled,
    getNextArticle,
    getPrevArticle,
    getPage,
  };
};

export default usePrevNextPage;
