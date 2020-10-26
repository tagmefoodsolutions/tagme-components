import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconService } from './icon.service';

@Component({
	selector: 'tg-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss']
})
export class IconComponent {

	/**
	 * Injects the service of icons
	 * @param iconService Service for icons
	 */
	constructor(private iconService: IconService) {}

	/**
	 * Sets the type of icon with it's name
	 */
	@Input() name: string;

	/**
	 * Sets the color of the icon
	 */
	@Input() color: string = '#30323B';

	/**
	 * Sets the size of the icon
	 */
	@Input() size: number = 24;

	/**
	 * Gets the icon from the service
	 * 
	 * @returns {SafeHtml} SVG of the icon
	 */
	get icon(): SafeHtml {
		return this.iconService.getIcon(this.name, this.color, this.size);
	}
}
