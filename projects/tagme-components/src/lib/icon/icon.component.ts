import { Component, Input } from '@angular/core';
import { IconService } from './icon.service';

@Component({
	selector: 'tg-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss']
})
export class IconComponent {

	/**
	 * Injects the service of icons
	 * @param iconService Service of icons
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
	 * Gets the icon from the service
	 */
	get icon() {
		return this.iconService.getIcon(this.name, this.color);
	}
}
