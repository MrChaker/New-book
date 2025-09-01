import type { Accessor } from "solid-js";
import { createSignal, onCleanup, createEffect } from "solid-js";
import { MOBILE_MAX_WIDTH } from "../constants";

function useOnMobile() : { on_mobile: Accessor<boolean> } {
  const [on_mobile, set_on_mobile] = createSignal(false);
  
  const handleResize = () => {
    set_on_mobile(window.innerWidth <= MOBILE_MAX_WIDTH);
  };

  createEffect(() => {
    handleResize();
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return { on_mobile };
}

export default useOnMobile;
