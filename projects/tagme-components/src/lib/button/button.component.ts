import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tg-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	// Injects a style in the property style
	@Input() customStyles: string;
	// Disables the button
	@Input() disabled: boolean = false;
	// Decreases the height of the button
	@Input() small: boolean = false;
	// Sets the text of the button
	@Input() text: string;
	// Chooses the type. It can be:
	// main
	// success
	// outline-main
	// outline-success
	// white
	// black
	@Input() type: string = 'main';

	// Emitter of the click
	@Output() clickEmitter: EventEmitter<null> = new EventEmitter();

	// Emits the action of click
	public emitClick(): void {
		if (!this.disabled) {
			this.clickEmitter.emit(null);
		}
	}
}