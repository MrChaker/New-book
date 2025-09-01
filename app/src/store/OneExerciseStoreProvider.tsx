import { createContext, ParentComponent, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

interface Store {
  number: number;
}

// Store Provider
const [store, set_store] = createStore<Store>({
  number: 0,
});

const StoreContext = createContext<{
  store: Store;
  set_store: SetStoreFunction<Store>;
}>();

export const useOneExerciseContext = () => useContext(StoreContext)!;

export const OneExerciseStoreProvider: ParentComponent<{ number: number }> = (
  props,
) => {
  set_store("number", props.number);
  return (
    <StoreContext.Provider
      value={{
        store,
        set_store,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};
