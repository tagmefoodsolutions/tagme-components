import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { CountryBadgeService } from './country-badge.service';

@Component({
  selector: 'tg-country-badge',
  templateUrl: './country-badge.component.html',
  styleUrls: ['./country-badge.component.scss'],
})
export class CountryBadgeComponent {
  /**
   * Sets the size of the badge
   */
  @Input() size: number = 14;

  /**
   * Injects the dependencies
   *
   * @param countryBadgeService Service for badges of countries
   */
  constructor(private countryBadgeService: CountryBadgeService) {}

  /**
   * Sets the name of the country
   * It can be:
   *
   * - south-africa
   * - germany
   * - argentina
   * - australia
   * - austria
   * - belgium
   * - bolivia
   * - brazil
   * - bulgaria
   * - canada
   * - chile
   * - china
   * - colombia
   * - south-koreia
   * - croatia
   * - denmark
   * - emirates
   * - scotia
   * - slovenia
   * - spain
   * - spain
   * - finland
   * - france
   * - georgia
   * - greece
   * - netherlands
   * - hungary
   * - india
   * - indonesia
   * - england
   * - ireland
   * - israel
   * - italy
   * - jamaica
   * - japan
   * - lebanon
   * - malta
   * - marocco
   * - mexico
   * - north-macedonia
   * - norway
   * - new-zeland
   * - peru
   * - poland
   * - portugal
   * - czech-republic
   * - romania
   * - russia
   * - serbia
   * - serbia-and-montenegro
   * - sweden
   * - switzerland
   * - tunisia
   * - turkey
   * - ukraine
   * - uruguay
   * - usa
   * - venezuela
   */
  @Input() country: string;

  /**
   * Gets the badge from the service
   *
   * @returns {SafeHtml} SVG of the badge
   */
  get badge(): SafeHtml {
    return this.countryBadgeService.getBadge(this.country, this.size);
  }
}
