import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class IconService {

	/**
	 * Injects the dom's sanitizer
	 * @param sanitizer Sanitizer of content used here for html trusted
	 */
	constructor(private sanitizer: DomSanitizer) {}
	
	/**
	 * Map of icons in SVG
	 */
	private icons = new Map([
		['plus_24', (color) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="7" width="2" height="10" fill="${color}"/><rect x="7" y="11" width="10" height="2" fill="${color}"/></svg>`],
		['minus_24', (color) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="11" width="10" height="2" fill="${color}"/></svg>`],
		['trash_24', (color) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="11" width="10" height="10"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 11H17V21H7V11Z" fill="${color}"/></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.01699 19.7935H14.983L15.8048 12.2065H8.19521L9.01699 19.7935ZM15.1936 21H8.80637C8.30578 21 7.89602 20.5894 7.87493 20.0764L7.00364 12.0324C7.00122 12.0101 7 11.9876 7 11.9652C7 11.433 7.41823 11 7.93232 11H16.0677C16.5818 11 17 11.433 17 11.9652C17 11.9876 16.9988 12.0101 16.9964 12.0324L16.1251 20.0764C16.104 20.5894 15.6943 21 15.1936 21Z" fill="${color}"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M8.39995 8.8024L15.4487 7.83517L14.9456 7.13088L8.67162 7.99181L8.39995 8.8024ZM16.1581 8.86492L8.02775 9.98056C7.93167 9.99375 7.78712 10.0071 7.64411 9.9957C7.55658 9.98875 7.47997 9.97342 7.40998 9.94885C7.18612 9.87021 7.03283 9.69486 7 9.47983L7.02154 9.23109L7.61975 7.44605C7.66455 7.24379 7.84293 6.97846 8.44835 6.89538L14.8317 6.01946C14.9277 6.00627 15.0723 5.99294 15.2153 6.00429C15.3028 6.01123 15.3794 6.02657 15.4494 6.05113C15.5998 6.10395 15.7183 6.20035 15.7898 6.32313L16.8987 7.87572L16.9938 8.10845C17.0164 8.25592 17.0227 8.74626 16.1581 8.86492Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7095 6.7861L10.562 5.78627L12.3468 5.53273L12.4943 6.53256L14 6.31866L13.8089 5.02334C13.7128 4.37152 13.0941 3.91804 12.4299 4.01243L10.0429 4.35152C9.37864 4.44587 8.9165 5.0529 9.01266 5.70468L9.20379 7L10.7095 6.7861Z" fill="${color}"/></svg>`]
	]);

	/**
	 * 
	 * @param iconName Key of the icon in the map
	 * @param color Optional color to fill the icon
	 */
	public getIcon(iconName: string, color: string = '#30323B') {
		return this.icons.has(iconName) 
			? this.sanitizer.bypassSecurityTrustHtml(this.icons.get(iconName)(color))
			: null;
	}
}