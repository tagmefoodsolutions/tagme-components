import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BeerBadgeComponent } from './beer-badge.component';

@NgModule({
	declarations: [BeerBadgeComponent],
	exports: [BeerBadgeComponent],
	imports: [CommonModule]
})
export class BeerBadgeModule {}
