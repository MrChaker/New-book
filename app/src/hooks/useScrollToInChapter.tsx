import {
  useExercisesContext,
  useExercisesStateHelpers,
} from "~/store/ExercisesStoreProvider";
import elementPosOnPage from "../utils/elementPosOnPage";
import smoothScrollTo from "../utils/smoothScrollTo";
import { useGlobalContext } from "~/store/StoreProvider";

const useScrollToInChapter = () => {
  const { exercises_store, set_exercises_store } = useExercisesContext();
  const { store } = useGlobalContext();
  const { updateExerciseByIndex } = useExercisesStateHelpers();

  const getClosestExerciseParentIndex = (
    target: HTMLElement | null,
  ): number => {
    if (!target) return -1;

    let current: HTMLElement | null = target;
    const allExercises = document.querySelectorAll(".exercise");

    while (current) {
      if (current.classList.contains("exercise")) {
        // Find position of this exercise among all exercises
        const position = Array.from(allExercises).findIndex(
          (ex) => ex === current,
        );
        return position + 1;
      }
      current = current.parentElement;
    }

    return -1;
  };

  const isInsideElementWithClass = (
    parentClass: string,
    target: HTMLElement | null,
  ): boolean => {
    const parents = document.querySelectorAll("." + parentClass);

    if (!parents || !target) {
      return false;
    }

    let inside = false;
    parents.forEach((exo) => {
      exo.contains(target) && (inside = true);
    });
    return inside;
  };

  const getHeight = (el: HTMLElement | null) => {
    return el?.getBoundingClientRect().height || 0;
  };

  const calculateTargetCenterOnPage = (target: HTMLElement | null) =>
    elementPosOnPage(target) -
    store.innerHeight / 2 + // step 1:  center top of element on screen
    Math.min(getHeight(target) / 2, store.innerHeight / 2); // if target height is bigger than screen step 1 is reveresed | else the target itself is centered on screen

  const firstSectionEdgeCase = (target: HTMLElement | null) => {
    if (!target || target.id !== "section-1") return false;
    return true;
  };

  const exercisesEdgeCase = (target: HTMLElement | null) => {
    if (!target || target.id !== "exercises") return target;
    return target
      ?.querySelectorAll(".exo-statement")
      ?.item(
        exercises_store.list_view ? 0 : exercises_store.selected_exo - 1,
      ) as HTMLElement;
  };

  const addSafeMarginForLongTarget = (target: HTMLElement | null) => {
    if (!target) return 0;
    let scrollTo = calculateTargetCenterOnPage(target);
    if (getHeight(target) > store.innerHeight) {
      scrollTo -= 20; // for safe margin
    }

    // another edge case for exo-statement
    if (target.classList.contains("exo-statement")) {
      scrollTo += 50;
    }

    return scrollTo;
  };

  const scrollToInChapter = async (
    targetId: string,
    scrollDuration: number = 100,
  ) => {
    let target = document.getElementById(targetId);
    target = exercisesEdgeCase(target);

    // check if target is not inside exercise
    if (!isInsideElementWithClass("exercise", target)) {
      // just scroll to the target
      smoothScrollTo(
        firstSectionEdgeCase(target) ? 0 : addSafeMarginForLongTarget(target),
        store.animations ? scrollDuration : 0,
      );
      return;
    }
    const exo_number = getClosestExerciseParentIndex(target);

    // check if taget is inside solution
    if (isInsideElementWithClass("solution", target)) {
      updateExerciseByIndex(exo_number - 1, {
        field: "solution_open",
        value: true,
      });
    }

    if (exercises_store.list_view) {
      smoothScrollTo(
        addSafeMarginForLongTarget(target),
        store.animations ? scrollDuration : 0,
      );
      return;
    }

    set_exercises_store("selected_exo", exo_number);
    if (
      target &&
      (target.getBoundingClientRect().top < 0 ||
        target.getBoundingClientRect().bottom > store.innerHeight)
    ) {
      smoothScrollTo(
        addSafeMarginForLongTarget(target),
        store.animations ? scrollDuration : 0,
      );
    }
    Promise.resolve();
  };

  return { scrollToInChapter, calculateTargetCenterOnPage };
};

export default useScrollToInChapter;
