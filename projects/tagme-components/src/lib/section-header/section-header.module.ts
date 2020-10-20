import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { SectionHeaderComponent } from './section-header.component';

@NgModule({
	declarations: [SectionHeaderComponent],
	exports: [SectionHeaderComponent],
	imports: [
		CommonModule,
		ButtonModule
	]
})
export class SectionHeaderModule {}
