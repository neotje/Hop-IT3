function clamp(n, min, max): number {
  return Math.min(Math.max(n, min), max);
}
function elemScrollProgress(elem): number {
  var scroll = document.scrollingElement.scrollTop;
  var top = elem.getBoundingClientRect().top;
  var height = elem.offsetHeight;
  var bottom = top + height;
  return clamp((scroll - top) / (top + height), 0, 1);
}

export const util = {
  clamp,
  elemScrollProgress
};
