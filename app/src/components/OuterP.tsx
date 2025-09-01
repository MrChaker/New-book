import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "../store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

const OuterP = (props: ParentProps & SharedProps) => {
  const { store } = useGlobalContext();

  return (
    <p
      class={twJoin(
        "text-column",
        props.class,
        store.show_areas && "left-right-background-divide",
      )}
      style={`width:${mainColumnWidth()}px;${props.style}`}>
      {props.children}
    </p>
  );
};

export default OuterP;
