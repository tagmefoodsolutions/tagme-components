import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeComponent } from './badge.component';

@NgModule({
	declarations: [BadgeComponent],
	exports: [BadgeComponent],
	imports: [CommonModule]
})
export class BadgeModule {}