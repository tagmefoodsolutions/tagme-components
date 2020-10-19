import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tg-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent {
	/**
	 * Type of navigation.
	 * It can be:
	 * 
	 * default
	 * borderless
	 */
	@Input() type: string = 'default';

	/**
	 * Items of navigation.
	 * Each item must to have:
	 * 
	 * active: if the item is active
	 * id: unique id for to be emitted
	 * text: text of item
	 */
	@Input() items: [
		{ 
			active: boolean,
			id: string,
			text: string
		}
	];

	/**
	 * Emitter of the item clicked
	 */
	@Output() itemEmitter: EventEmitter<string> = new EventEmitter<string>();


	/**
	 * Emits the item
	 */
	public emitItem(itemId: string): void {
		this.itemEmitter.emit(itemId);
	}
}
