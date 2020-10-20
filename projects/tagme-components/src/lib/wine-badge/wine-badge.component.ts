import { Component, Input } from '@angular/core';

@Component({
	selector: 'tg-wine-badge',
	templateUrl: './wine-badge.component.html',
	styleUrls: ['./wine-badge.component.scss'],
})
export class WineBadgeComponent {
	/**
	 * Type of wine.
	 * It can be:
	 * 
	 * - white
	 * - sweet-red
	 * - porto
	 * - fortified-red
	 * - white-porto
	 * - sweet-white
	 * - fortified-white
	 * - jerez
	 * - madeira
	 * - rose
	 * - red
	 * - sparkling
	 * - champagne
	 * - distilled-grape
	 */
	@Input() type: string;
}
