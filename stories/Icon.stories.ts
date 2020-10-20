import { IconComponent } from 'tagme-components'

export default {
	title: 'Icons',
	component: IconComponent,
	argTypes: {
		name: {
			control: {
				type: 'inline-radio',
				options: [
					'alcohol_48',
					'minus_24',
					'pin_24',
					'pin_48',
					'plus_24',
					'trash_24'
				]
			}
		},
		color: {
			control: 'color'
		}
	}
}

const Template = (args: IconComponent) => ({
	component: IconComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	name: 'plus_24',
	color: 'red'
}