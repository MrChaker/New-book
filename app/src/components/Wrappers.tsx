import { ParentProps } from "solid-js";
import { SectionDivider } from "./SectionDivider";
import { useGlobalContext } from "~/store/StoreProvider";

export const Section = (
  props: ParentProps & { divider?: boolean; id?: string },
) => {
  const { store } = useGlobalContext();
  const show_section_dividers = () => store.show_section_dividers;

  return (
    <>
      <section id={`${props.id}`}>{props.children}</section>
      {show_section_dividers() && <SectionDivider />}
    </>
  );
};

export const Example = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const Note = (props: ParentProps) => {
  return <>{props.children}</>;
};

export const SolutionNote = (props: ParentProps & { id?: string }) => {
  return <div id={props.id}>{props.children}</div>;
};

export const NoBreak = (props: ParentProps) => {
  return <span class="nobreak">{props.children}</span>;
};

export const Pause = () => {
  return <div class="spacer-150" />;
};
