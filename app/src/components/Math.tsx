import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  ParentProps,
} from "solid-js";
import { TEXT_X_PADDING } from "~/constants";
import { useGlobalContext } from "~/store/StoreProvider";

export const Math = (props: ParentProps) => {
  let ref: HTMLSpanElement | undefined;
  const [visible, setVisible] = createSignal(false);
  const { set_store } = useGlobalContext();

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (window as any).MathJax.typesetPromise([ref]);
          setVisible(true);
          set_store("scrollHeight", document.body.scrollHeight);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      },
    );
    if (ref) observer.observe(ref);
    onCleanup(() => observer.disconnect());
  });

  return (
    <span
      class="math inline-flex indent-0 transition-opacity"
      style={{ opacity: visible() ? "1" : "0" }}
      ref={ref}>
      {props.children}
    </span>
  );
};

export const MathBlock = (props: ParentProps) => {
  let ref: HTMLDivElement | undefined;
  const { store, set_store } = useGlobalContext();
  const [visible, setVisible] = createSignal(false);
  const [scaledDown, setScaledDown] = createSignal(false);
  const [originalWidth, setOriginalWidth] = createSignal(0);
  const [localInnerWidthCopy, setLocalInnerWidthCopy] = createSignal(0);

  const handleClick = () => {
    setScaledDown(!scaledDown());
  };

  const shouldBeScaledDown = () => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      return rect.width > localInnerWidthCopy() - TEXT_X_PADDING * 2;
    }
    return false;
  };

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (window as any).MathJax.typesetPromise([ref]);
          setVisible(true);
          set_store("scrollHeight", document.body.scrollHeight);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      },
    );

    if (ref) {
      observer.observe(ref);
      setOriginalWidth(ref.getBoundingClientRect().width);
      ref?.querySelector("svg")?.classList.add("transition-all");
    }

    const handleResize = () => {
      let oldInnerWidth = localInnerWidthCopy();
      let newInnerWidth = window.innerWidth;
      setLocalInnerWidthCopy(newInnerWidth);
      if (newInnerWidth != oldInnerWidth) setScaledDown(shouldBeScaledDown());
    };

    handleResize(); // should result in call to setScaledDown()
    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    });
  });

  createEffect(() => {
    if (scaledDown()) {
      ref?.style.setProperty(
        "width",
        store.innerWidth - TEXT_X_PADDING * 2 + "px",
      );
      return;
    }
    ref?.style.setProperty(
      "width",
      originalWidth() > 0 ? originalWidth() + "px" : "auto",
    );
  });

  return (
    <div
      class="mathblock transition-all"
      style={{ opacity: visible() ? "1" : "0" }}
      onClick={handleClick}
      ref={ref}>
      {props.children}
    </div>
  );
};
