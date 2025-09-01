import { MOBILE_MAX_WIDTH } from "~/constants";
import { createContext, ParentComponent, ParentProps, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

type ExerciseState = {
  solution_open: boolean;
  transition_duration: number;
};

interface Store {
  selected_exo: number;
  exercises: ExerciseState[];
  list_view: boolean;
}

// Store Provider
const [exercises_store, set_exercises_store] = createStore<Store>({
  selected_exo: 0,
  exercises: [],
  list_view: window.innerWidth > MOBILE_MAX_WIDTH,
});

const StoreContext = createContext<{
  exercises_store: Store;
  set_exercises_store: SetStoreFunction<Store>;
}>();

export const useExercisesContext = () => useContext(StoreContext)!;

export const ExercisesStoreProvider: ParentComponent = (props: ParentProps) => {
  return (
    <StoreContext.Provider
      value={{
        exercises_store,
        set_exercises_store,
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useExercisesStateHelpers = () => {
  const { set_exercises_store } = useExercisesContext();

  const initExercisesState = (length: number) => {
    set_exercises_store(
      "exercises",
      Array.from({ length }).map((el) => ({
        solution_open: false,
        transition_duration: 1000,
      })),
    );
  };

  const updateExerciseByIndex = (
    index: number,
    update_obj: {
      field: keyof ExerciseState;
      value: any;
    },
  ) => {
    set_exercises_store("exercises", (prev) =>
      prev.map((exercise, i) => {
        if (i === index) {
          return {
            ...exercise,
            [update_obj.field]: update_obj.value,
          };
        }
        return exercise;
      }),
    );
  };

  return {
    initExercisesState,
    updateExerciseByIndex,
  };
};
