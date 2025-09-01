const smoothScrollTo = (targetPosition: number, duration: number) => {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: DOMHighResTimeStamp | null = null;

  function animation(currentTime: DOMHighResTimeStamp) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(window.scrollX, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
    else window.scrollTo(window.scrollX, targetPosition);
  }

  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

export default smoothScrollTo;
