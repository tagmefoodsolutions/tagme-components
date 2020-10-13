import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular'

import { CounterComponent } from 'tagme-components'
import { IconComponent } from 'tagme-components'

export default {
	title: 'Counters',
	component: CounterComponent,
	decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [CommonModule],
    }),
	],
	argTypes: {
		color: { control: 'color' },
  },
}

const Template = (args: CounterComponent) => ({
	component: CounterComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	color: '#FF7F40',
	big: false,
	disabled: false,
	max: 99,
	min: 0,
	value: 0
}