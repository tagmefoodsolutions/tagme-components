import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [CounterComponent],
	exports: [CounterComponent],
	imports: [
		CommonModule,
		IconModule,
	],
})
export class CounterModule {}