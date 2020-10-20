import { Component, Input } from '@angular/core';

@Component({
	selector: 'tg-beer-badge',
	templateUrl: './beer-badge.component.html',
	styleUrls: ['./beer-badge.component.scss']
})
export class BeerBadgeComponent {
	/**
	 * Type of beer.
	 * It can be:
	 * 
	 * - pilsen
	 * - lager
	 * - weiss
	 * - pale-ale
	 * - bock
	 * - fruit-lambic
	 * - black-stout
	 */
	@Input() type: string;
}
