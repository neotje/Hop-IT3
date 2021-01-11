function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}
function elemScrollProgress(elem: HTMLElement, offset: number = 0): number {
  var scroll = document.scrollingElement.scrollTop;
  var top = elem.getBoundingClientRect().top + offset;
  var height = elem.offsetHeight;
  var bottom = top + height;
  return clamp((scroll - top) / (bottom), 0, 1);
}

export const util = {
  clamp,
  elemScrollProgress
};
