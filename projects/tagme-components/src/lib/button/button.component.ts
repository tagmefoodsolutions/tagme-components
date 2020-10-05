import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tg-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() customStyles: string;
	@Input() disabled: boolean = false;
	@Input() small: boolean = false;
	@Input() text: string;
	@Input() type: string = 'main';

	@Output() clickEmitter: EventEmitter<null> = new EventEmitter();

	public emitClick(): void {
		if (!this.disabled) {
			this.clickEmitter.emit(null);
		}
	}
}