const useScrollX = () => {
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => {
      window.scroll({
        left: (document.body.scrollWidth - window.innerWidth) / 2,
        behavior: "instant",
      });
    });
  }
};

export default useScrollX;
