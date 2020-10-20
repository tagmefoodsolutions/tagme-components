import { BadgeComponent } from 'tagme-components'

export default {
	title: 'Badges',
	component: BadgeComponent,
	argTypes: {
		backgroundColor: {
			control: 'color'
		}
	}
}

const Template = (args: BadgeComponent) => ({
	component: BadgeComponent,
	props: args,
})

export const Default = Template.bind({})
Default.args = {
	text: '1',
	backgroundColor: ''
}
