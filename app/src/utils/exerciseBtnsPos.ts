const exerciseBtnsPos = () => {
  if (!document.getElementById("exercises-btns"))
    return document.body.scrollHeight;
  const rect = document
    .getElementById("exercises-btns")
    ?.getBoundingClientRect()!;
  return rect.y + window.scrollY;
};

export default exerciseBtnsPos;
