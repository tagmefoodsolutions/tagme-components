import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'
import { RouterModule } from '@angular/router';

import { IconModule, LinkComponent } from 'tagme-components'

export default {
	title: 'Links',
	component: LinkComponent,
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				IconModule,
				RouterModule.forRoot([], { useHash: true }),
      ]
		})
	],
	argTypes: {
		type: {
			control: {
				type: 'inline-radio',
				options: [
					'default',
					'default-underline',
					'small',
					'small-underline',
					'button',
					'small-button'
				]
			},
		},
		icon: {
			control: {
				type: 'inline-radio',
				options: [
					'null',
					'back',
					'minus',
					'pin',
					'plus',
					'trash'
				]
			}
		},
		iconPosition: {
			control: {
				type: 'inline-radio',
				options: [
					'left',
					'right'
				]
			}
		},
		color: {
			control: 'color'
		},
		iconSize: {
			control: 'number'
		}
	}
}

const Template = (args: LinkComponent) => ({
	component: LinkComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	text: 'Link',
  type: 'default',
	routerLink: 'https://www.tagme.com.br',
	icon: 'null',
	iconPosition: 'left',
	color: '#FF7F40',
	iconSize: 18,
}
