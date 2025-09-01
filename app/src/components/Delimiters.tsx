import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import { useGlobalContext } from "~/store/StoreProvider";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

export const CentralDisplay = (
  props: ParentProps & SharedProps & { indent?: boolean }
) => {
  let { store } = useGlobalContext();
  return (
    <div
      class={twJoin(
        props.class,
        "text-column text-center block",
        store.show_areas && "bg-[#ebe3a0b0]"
      )}
      style={`width:${mainColumnWidth()}px;${props.style}`}
    >
      <span class="block pl-[2em] pr-[2em]" style={props.style}>
        {props.children}
      </span>
    </div>
  );
};

export const CentralDisplayItalic = (
  props: ParentProps & SharedProps & { indent?: boolean }
) => {
  let { store } = useGlobalContext();
  return (
    <div
      class={twJoin(
        props.class,
        "text-column text-center block pl-[2em] pr-[2em]",
        store.show_areas && "bg-[#ebe3a0b0]"
      )}
      style={`width:${mainColumnWidth()}px;`}
    >
      <i class="block pl-[2em] pr-[2em]" style={props.style}>
        {props.children}
      </i>
    </div>
  );
};
