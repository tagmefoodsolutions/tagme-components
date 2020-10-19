import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'
import { RouterModule } from '@angular/router';

import { LinkComponent } from 'tagme-components'

export default {
	title: 'Links',
	component: LinkComponent,
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
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
			}
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
  routerLink: 'https://www.tagme.com.br'
}
