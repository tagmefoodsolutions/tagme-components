import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountryBadgeComponent } from './country-badge.component';
import { CountryBadgeService } from './country-badge.service';

@NgModule({
	declarations: [CountryBadgeComponent],
	exports: [CountryBadgeComponent],
	imports: [CommonModule],
	providers: [CountryBadgeService]
})
export class CountryBadgeModule {}
