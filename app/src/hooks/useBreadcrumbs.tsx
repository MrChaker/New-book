import { onMount } from "solid-js";

const useBreadcrumbs = () => {
  const highlight = (section_id: string) => {
    let breadcrumbs = document.querySelectorAll(".breadcrumb");
    let to_highlight: HTMLElement | null = null;

    if (section_id === "exercises") {
      to_highlight = breadcrumbs.item(breadcrumbs.length - 1) as HTMLElement;
    } else {
      let section_index_str = section_id?.slice("section-".length) || "";
      let section_idx = Number(section_index_str) - 1;
      to_highlight = document.getElementById("breadcrumb-" + section_idx);
    }

    breadcrumbs.forEach((el) => {
      el.classList.remove("highlighted");
    });

    to_highlight?.classList.add("highlighted");
  };

  onMount(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // to be safe
    const sections = document.querySelectorAll("section");
    const sectionVisibility = new Map();

    sections.forEach((section) => {
      sectionVisibility.set(section.id, { element: section, isVisible: false });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        let anyVisible = false;

        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          sectionVisibility.set(sectionId, {
            ...sectionVisibility.get(sectionId),
            isVisible: entry.isIntersecting,
          });
        });

        // Find the first visible section (prioritize top-most)
        for (const [sectionId, data] of sectionVisibility) {
          if (data.isVisible) {
            highlight(sectionId);
            anyVisible = true;
            break;
          }
        }

        // If no section is visible, find closest to viewport top
        if (!anyVisible) {
          let closestSection: HTMLElement | null = null;
          let minDistance = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);

            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section as HTMLElement;
            }
          });

          if (closestSection) highlight((closestSection as HTMLElement).id);
        }
      },
      {
        threshold: 0,
        rootMargin: "-50% 0px -20% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // commented out L83 b/c Solid was generating an annoying warning 
    //     'cleanups created outside a `createRoot` or `render` will never be run'
    // onCleanup(() => observer.disconnect());
  });
};

export default useBreadcrumbs;
