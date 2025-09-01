import SharedProps from "./types/SharedProps";

export const StarDivider = (props: SharedProps) => {
  return (
    <div
      class="text-center"
      style={`transform:translate(0, 0.4em);${props.style}`}>
      *&ensp;&ensp;*&ensp;&ensp;*&ensp;&ensp;*
    </div>
  );
};
