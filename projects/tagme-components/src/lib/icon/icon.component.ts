import { Component, Input } from '@angular/core';
import { IconService } from './icon.service';

@Component({
	selector: 'tg-icon',
	templateUrl: './icon.component.html',
})
export class IconComponent {

	constructor(private iconService: IconService) {}

	/**
	 * Sets the type of icon with it's name
	 */
	@Input() name: string;

	/**
	 * Sets the color of the icon
	 */
	@Input() color: string = '#30323B';

	get icon() {
		console.log('called')
		return this.iconService.getIcon(this.name, this.color);
	}
}
