import { IconComponent } from 'tagme-components'

export default {
	title: 'Icons',
	component: IconComponent,
	argTypes: {
		name: {
			control: {
				type: 'inline-radio',
				options: [
					'plus_24',
					'minus_24',
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