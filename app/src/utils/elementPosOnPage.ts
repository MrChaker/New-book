const elementPosOnPage = (el: HTMLElement | null) => {
  if (!el) return document.body.scrollHeight;
  const rect = el?.getBoundingClientRect()!;
  return rect.y + window.scrollY;
};

export default elementPosOnPage;
