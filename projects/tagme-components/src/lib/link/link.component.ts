import { Component, Input } from '@angular/core';

@Component({
	selector: 'tg-link',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss']
})
export class LinkComponent {
	/**
	 * Injects a style in the property style
	 */
	@Input() customStyles: string;

	/**
	 * (Optional) Query params of the link
	 */
	@Input() queryParams?: {
		[k: string]: any;
	};

	/**
	 * Destination of the link
	 */
	@Input() routerLink: string | any[];

	/**
	 * (Optional) State for the destination
	 */
	@Input() state?: {
		[k: string]: any;
	};

	/**
	 * Text of the link
	 */
	@Input() text: string;

	/**
	 * Type of the link.
	 * It can be:
	 * 
	 * - default
	 * - default-underline
	 * - small
	 * - small-underline
	 * - button
	 * - small-button
	 */
	@Input() type: string = 'default';

	/**
	 * (Optional) Sets the icon for the link with type button
	 */
	@Input() icon?: string;

	/**
	 * (Optional) Sets the position of the icon.
	 * It can be:
	 * 
	 * - left
	 * - right
	 */
	@Input() iconPosition?: string = 'left';

	/**
	 * (Optional) Sets a color for text and icon with a hex
	 */
	@Input() color?: string;

	/**
	 * (Optional) Sets the size of the icon
	 */
	@Input() iconSize?: number = 18;
}