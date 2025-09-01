import { useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";

const useSetRoute = () => {
  const { set_store } = useGlobalContext();
  const location = useLocation();

  set_store("route", location.pathname);
  if (localStorage) localStorage.setItem("route", location.pathname);
};

export default useSetRoute;
