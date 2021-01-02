function clamp(n, min, max): number {
  return Math.min(Math.max(n, min), max);
}
function elemScrollProgress(elem): number {
  var scroll = document.scrollingElement.scrollTop;
  var top = elem.offsetTop;
  var height = elem.offsetHeight;
  var bottom = top + height;
  return clamp((scroll - top + window.innerHeight) / height, 0, 1);
}

export const util = {
  clamp,
  elemScrollProgress
};
