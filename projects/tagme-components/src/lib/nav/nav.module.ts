import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavComponent } from './nav.component';

@NgModule({
	declarations: [NavComponent],
	exports: [NavComponent],
	imports: [CommonModule]
})
export class NavModule {}
