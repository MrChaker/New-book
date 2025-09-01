import { useGlobalContext } from "~/store/StoreProvider";
import { MOBILE_MAX_WIDTH, DESKTOP_COLUMN_WIDTH } from "../constants";

const mainColumnWidth = () => {
  const { store } = useGlobalContext();
  return store.innerWidth > MOBILE_MAX_WIDTH
    ? DESKTOP_COLUMN_WIDTH
    : store.innerWidth;
};

export default mainColumnWidth;
