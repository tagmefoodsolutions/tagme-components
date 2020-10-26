import { IconComponent } from 'tagme-components'

export default {
	title: 'Icons',
	component: IconComponent,
	argTypes: {
		name: {
			control: {
				type: 'inline-radio',
				options: [
					'alcohol',
					'back',
					'grape',
					'minus',
					'pin',
					'plus',
					'trash'
				]
			}
		},
		color: {
			control: 'color'
		},
		size: {
			control: 'number'
		}
	}
}

const Template = (args: IconComponent) => ({
	component: IconComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	name: 'alcohol',
	color: 'red',
	size: 24,
}