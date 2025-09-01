import {
  createContext,
  createEffect,
  ParentComponent,
  useContext,
} from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { createStore } from "solid-js/store";

export type Store = {
  panel_opened: boolean;
  show_section_dividers: boolean;
  show_areas: boolean;
  show_squiggles: boolean;
  title: string;
  innerWidth: number;
  innerHeight: number;
  scrollWidth: number;
  scrollHeight: number;
  scrollX: number;
  scrollY: number;
  route: string;
  content_loaded: boolean;
  saved_scroll_finished: boolean;
  scroll_is_at_0: boolean;
  margin_mode: boolean;
  pageNecessaryMargin: number;
  maxElementWidth: number;
  nextPage: string;
  prevPage: string;
  loading: boolean;
  have_been_outside_home: boolean;
  last_page_load_ms: number;
  total_page_load_ms: number;
  num_page_loads: number;
  navigation_delays: boolean;
  animations: boolean;
};

const [store, set_store] = createStore<Store>({
  panel_opened: false,
  show_section_dividers: false,
  show_areas: false,
  show_squiggles: false,
  title: "Little Bo Peep",
  innerWidth: document.documentElement.clientWidth || window.innerWidth,
  innerHeight: window.innerHeight,
  scrollWidth: document.body.scrollWidth,
  scrollHeight: document.body.scrollHeight,
  scrollX: window.scrollX,
  scrollY: window.scrollY,
  route: "",
  content_loaded: false,
  saved_scroll_finished: false,
  scroll_is_at_0: false,
  margin_mode: false,
  pageNecessaryMargin: 0,
  maxElementWidth: 0,
  nextPage: "",
  prevPage: "",
  loading: false,
  have_been_outside_home: false,
  last_page_load_ms: 0,
  total_page_load_ms: 0,
  num_page_loads: 0,
  navigation_delays: false,
  animations: true,
});

const StoreContext = createContext<{
  store: Store;
  set_store: SetStoreFunction<Store>;
}>();

export const StoreProvider: ParentComponent = (props) => {
  createEffect(() => {
    set_store(
      "innerWidth",
      document.documentElement.clientWidth || window.innerWidth,
    );
    set_store("innerHeight", window.innerHeight);
    set_store("scrollWidth", document.body.scrollWidth);
    set_store("scrollHeight", document.body.scrollHeight);
    set_store("scrollX", window?.scrollX);
    set_store("scrollY", window?.scrollY);
  });

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

export const useGlobalContext = () => useContext(StoreContext)!;
