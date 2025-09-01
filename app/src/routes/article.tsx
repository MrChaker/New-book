import { ParentProps } from "solid-js";
import SVGDefs from "~/components/SVGDefs";

export default (props: ParentProps) => {
    return <>
        {props.children}
        <SVGDefs />
    </>;
};