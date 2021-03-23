import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tg-section-header',
	templateUrl: './section-header.component.html',
	styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  /**
	 * Type of navigation.
	 * It can be:
	 *
	 * default
	 * subheader
	 */
	@Input() type: string = 'default';

	/**
	 * Sets the title of the section
	 */
	@Input() title: string;

	/**
	 * (Optional) Sets the subtitle of the section
	 */
	@Input() subtitle?: string;

	/**
	 * Sets if the header has a button
	 */
	@Input() hasButton: boolean = false;

	/**
	 * (Optional) Sets the text of the button
	 */
	@Input() buttonText?: string;

	/**
	 * Emitter of the click in the button
	 */
	@Output() buttonClickEmitter: EventEmitter<null> = new EventEmitter<null>();

	/**
	 * Emits the action of click in the button
	 */
	public emitClickButton(): void {
		this.buttonClickEmitter.emit();
	}
}
