import { createSignal, createContext, useContext } from "solid-js";
import { ParentProps } from "solid-js";
import SharedProps from "../components/types/SharedProps";

const ScaleContext = createContext<() => {scale: number, name: string, after_first_click: boolean}>();

type ScaleProps = {
  scale: () => {
    scale: number,
    name: string,
    after_first_click: boolean,
  }
};

export function ScaleProvider(
    props: ParentProps & SharedProps & ScaleProps
) {
  return (
    <ScaleContext.Provider value={props.scale}>
      {props.children}
    </ScaleContext.Provider>
  );
}

export function useScale() {
  const scale = useContext(ScaleContext);
  if (!scale) { return () => {return {scale: 1, name: "no_name", after_first_click: false}}; }
  return scale;
}
