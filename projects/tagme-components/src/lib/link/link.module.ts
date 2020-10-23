import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LinkComponent } from './link.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [LinkComponent],
	exports: [LinkComponent],
	imports: [
		CommonModule,
		RouterModule,
		IconModule
	]
})
export class LinkModule {}
