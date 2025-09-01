import { createEffect, ParentProps, useContext } from "solid-js";
import { createStore, SetStoreFunction } from "solid-js/store";
import { createContext } from "solid-js";
import { useGlobalContext } from "./StoreProvider";

type HeightChangeListenerStore = {
  re_calculate_height: boolean;
};

const HeightChangeListenerContext = createContext<{
  height_change_listener_store: HeightChangeListenerStore;
  set_height_change_listener_store: SetStoreFunction<HeightChangeListenerStore>;
}>();

export const useHeightChangeListenerContext = () =>
  useContext(HeightChangeListenerContext);

const [height_change_listener_store, set_height_change_listener_store] =
  createStore({
    re_calculate_height: false,
  });

export const HeightChangeListenerProvider = (props: ParentProps) => {
  return (
    <HeightChangeListenerContext.Provider
      value={{
        height_change_listener_store,
        set_height_change_listener_store,
      }}>
      <Listener />
      {props.children}
    </HeightChangeListenerContext.Provider>
  );
};

const Listener = () => {
  const { height_change_listener_store } = useHeightChangeListenerContext()!;
  const { set_store: set_global_store } = useGlobalContext();

  createEffect(() => {
    height_change_listener_store.re_calculate_height; // re-calc on height change
    set_global_store("scrollHeight", document.body.scrollHeight);
  });

  return <></>;
};
