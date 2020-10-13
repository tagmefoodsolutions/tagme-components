import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tg-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
	// Increases the height of the component
	@Input() big: boolean = false;
	// Changes the color of icons
	@Input() color: string = '#FF7F40';
	// Turn off the component
	@Input() disabled: boolean = false;
	// Sets the max value of the counter
	@Input() max: number = 99;
	// Sets the min value of the counter
	@Input() min: number = 0;
	// Sets the default value of the counter
	@Input() value: number = 0;

	// Emitter of the value
	@Output() valueEmitter: EventEmitter<number> = new EventEmitter<number>();

	// Adds 1 to the value if it's not disabled and it's less than the max
	public add(): void {
		if (!this.disabled && this.value < this.max) {
			this.value++;
		}
	}

	// Subtracts 1 to the value if it's not disabled and it's grater than the min
	public subtract(): void {
		if (!this.disabled && this.value > this.min) {
			this.value--;
		}
	}

	// Emits the value
	public emitValue(): void {
		this.valueEmitter.emit(this.value);
	}
}