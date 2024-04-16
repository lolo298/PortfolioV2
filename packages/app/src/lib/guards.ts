export function isImg(el: Element): el is HTMLImageElement {
	return el.tagName === 'IMG';
}
