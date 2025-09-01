import { twJoin } from "tailwind-merge";

const OutlinedText = (props: any) => {
  return (
    <span {...props} class={twJoin(props.class, "relative flex")}>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          "-webkit-text-stroke-color": "white",
          "-webkit-text-stroke-width": "5px",
        }}>
        {props.children}
      </span>
      <span
        style={{
          position: "relative",
          "z-index": 10,
        }}>
        {props.children}
      </span>
    </span>
  );
};

export default OutlinedText;
