import { Component, Input } from '@angular/core';

@Component({
	selector: 'tg-badge',
	templateUrl: './badge.component.html',
	styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
	/**
	 * Background color
	 */
	@Input() backgroundColor: string;

	/**
	 * Text of the badge
	 */
	@Input() text: string;
}
