import { useLocation, useSearchParams } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { useLocalStorage } from "solidjs-hooks";
import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";

const useExercises = (length: number) => {
  const { set_exercises_store: set_store, exercises_store: store } =
    useExercisesContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();

  const stored_selected_exo = () => store.selected_exo;
  const stored_solutions_open = () =>
    store.exercises.map((exo) => exo.solution_open);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const article = () => location.pathname.split("/").pop();

  const [selected_exo, set_selected_exo] = useLocalStorage(
    `${article()}_selected_exo`,
    "0"
  );
  set_store("selected_exo", Number(selected_exo()));

  createEffect(() => {
    set_store("exercises", (prev) =>
      prev.map((exo, i) => ({
        ...exo,
        solution_open:
          localStorage.getItem(`${article()}_exo_${i + 1}_opened`) == "true",
      }))
    );
  });

  const update_solution_open = (
    exercise_number: number,
    value: boolean,
    update_store: boolean = true
  ) => {
    localStorage.setItem(
      `${article()}_exo_${exercise_number}_opened`,
      String(value)
    );
    if (update_store) {
      updateExerciseByIndex(exercise_number - 1, {
        field: "solution_open",
        value,
      });
    }
  };

  // set local stored values from search params if they exist
  if (typeof searchParams.selected === "string") {
    set_selected_exo(searchParams.selected);
    set_store("selected_exo", Number(selected_exo()));
  }

  if (typeof searchParams.opened === "string") {
    update_solution_open(
      Number(selected_exo()),
      searchParams.opened === "true"
    );
  }

  createEffect(() => {
    set_selected_exo(String(stored_selected_exo()));
    setSearchParams({
      selected: String(stored_selected_exo()),
      opened: stored_solutions_open()[stored_selected_exo() - 1],
    });
  });

  createEffect(() => {
    update_solution_open(
      Number(stored_selected_exo()),
      stored_solutions_open()[stored_selected_exo() - 1],
      false
    );
    setSearchParams({
      opened: stored_solutions_open()[stored_selected_exo() - 1],
      selected: String(stored_selected_exo()),
    });
  });
};

export default useExercises;
