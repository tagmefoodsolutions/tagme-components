import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WineBadgeComponent } from './wine-badge.component';

@NgModule({
	declarations: [WineBadgeComponent],
	exports: [WineBadgeComponent],
	imports: [CommonModule]
})
export class WineBadgeModule {}
