import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconComponent } from './icon.component';
import { IconService } from './icon.service';

@NgModule({
	declarations: [IconComponent],
	exports: [IconComponent],
	imports: [CommonModule],
	providers: [IconService]
})
export class IconModule {}