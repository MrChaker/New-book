import { JSX } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { useGlobalContext } from "~/store/StoreProvider";
import { ParentProps } from "solid-js";
import usePrevNextPage from "~/hooks/usePrevNextPage";

const HamburgerPanelItem = (
  props: ParentProps & {
    href: string;
    article_type: number;
  },
) => {
  const { store } = useGlobalContext();
  const { getPage } = usePrevNextPage();
  const link = `/article/${props.href}`;

  return (
    <ConditionalLink
      href={link}
      onClick={() => getPage(link)}
      onSameRoute={(e) => {
        e.preventDefault();
        window.scroll({
          left: (store.scrollWidth - store.innerWidth) / 2,
          behavior: "instant",
        });
      }}>
      <div class="panel-item flex items-baseline justify-between leading-9 sm:leading-8 text-2xl">
        <div class="relative m-auto" style={`width:100%;direction:rtl;`}>
          <div class="toc-item-lead-wrapper">
            <div>
              {/* somehow this wrapper div is useful for base-alignment */}
              <span>{props.article_type}</span>
              <span class="toc-item-lead-dots">
                ..........................................................................................................................................................................
              </span>
            </div>
          </div>
          <div class="toc-item-title">
            <span class="bg-stone-100">&lrm;&thinsp;{props.children}&lrm;</span>
          </div>
        </div>
      </div>
    </ConditionalLink>
  );
};

interface ConditionalLinkProps {
  // extends JSX.AnchorHTMLAttributes<HTMLAnchorElement>
  href: string;
  onSameRoute?: (e: MouseEvent) => void;
  onClick?: (e: MouseEvent) => void;
  children: JSX.Element;
}

export function ConditionalLink(props: ConditionalLinkProps) {
  const location = useLocation();
  const { onSameRoute, onClick, ...rest } = props;

  const handleClick = (e: MouseEvent) => {
    if (location.pathname === props.href) {
      // If on the same route, call the custom onSameRoute handler
      onSameRoute?.(e);
    } else {
      // Otherwise, call the original onClick handler if it exists
      e.preventDefault();
      onClick?.(e);
    }
  };

  return <div class="cursor-pointer" onClick={handleClick} {...rest} />;
}

export default HamburgerPanelItem;
