import { ParentProps } from "solid-js";
import useScrollToInChapter from "~/hooks/useScrollToInChapter";
import { twJoin } from "tailwind-merge";

const InChapterLink = (
  props: ParentProps & { href: string; class?: string },
) => {
  const { scrollToInChapter } = useScrollToInChapter();

  const handleClick = (e: Event) => {
    e.preventDefault();
    const url = new URL((e.currentTarget as HTMLAnchorElement).href);
    const id = url.searchParams.get("id") || "";
    scrollToInChapter(id, 200);
  };

  return (
    <a
      href={props.href}
      class={twJoin(props.class, "in-chapter-link")}
      onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default InChapterLink;
