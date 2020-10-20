import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { CountryBadgeService } from './country-badge.service';

@Component({
	selector: 'tg-country-badge',
	templateUrl: './country-badge.component.html',
	styleUrls: ['./country-badge.component.scss']
})
export class CountryBadgeComponent {

	/**
	 * Injects the dependencies
	 * 
	 * @param countryBadgeService Service for badges of countries
	 */
	constructor(private countryBadgeService: CountryBadgeService) {}

	/**
	 * Sets the name of the country
	 */
	@Input() country: string;

	/**
	 * Gets the badge from the service
	 * 
	 * @returns {SafeHtml} SVG of the badge
	 */
	get badge(): SafeHtml {
		return this.countryBadgeService.getBadge(this.country);
	}
}
