import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'
import { ButtonComponent, SectionHeaderComponent } from 'tagme-components'

export default {
	title: 'Section Headers',
	component: SectionHeaderComponent,
	decorators: [
		moduleMetadata({
			declarations: [ButtonComponent],
			imports: [CommonModule]
		})
	],
  argTypes: {
		type: {
			control: {
				type: 'select',
				options: [
					'default',
					'subheader'
				]
			}
		}
	}
}

const Template = (args: SectionHeaderComponent) => ({
	component: SectionHeaderComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	title: 'Title title title',
	subtitle: 'Subtitle subtitle subtitle subtitle',
	buttonText: 'Ver toda a carta de vinhos',
	hasButton: false,
  type: 'default'
}
