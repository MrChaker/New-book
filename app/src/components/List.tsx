import { ParentProps } from "solid-js";
import SharedProps from "./types/SharedProps";
import { twJoin } from "tailwind-merge";
import mainColumnWidth from "~/hooks/useMainColumnWidth";

export const List = (props: ParentProps & SharedProps) => {
  return (
    <div
      class={twJoin("text-column", props.class)}
      style={`width:${mainColumnWidth()}px;${props.style}`}
    >
      <ol class="list-decimal px-4 ml-6">{props.children}</ol>
    </div>
  );
};

export const Item = (props: ParentProps & SharedProps) => {
  return (
    <li class={props.class} style={props.style}>
      {props.children}
    </li>
  );
};
