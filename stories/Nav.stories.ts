import { NavComponent } from 'tagme-components'

export default {
	title:  'Navs',
	components: NavComponent,
	argTypes: {
		type: {
			control: {
				type: 'inline-radio',
				options: [
					'default',
					'borderless'
				]
			}
		}
	}
}

const Template = (args: NavComponent) => ({
	component: NavComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	type: 'default',
	items: [
		{
			text: 'Link',
			active: true,
			id: 'a'
		},
		{
			text: 'Link',
			active: false,
			id: 'b'
		},
		{
			text: 'Link',
			active: false,
			id: 'c'
		},
		{
			text: 'Link',
			active: false,
			id: 'd'
		}
	]
}
