import { BeerBadgeComponent } from 'tagme-components'

export default {
	title: 'Beer Badges',
	component: BeerBadgeComponent,
	argTypes: {
		type: {
			control: {
				type: 'inline-radio',
				options: [
					'pilsen',
					'lager',
					'weiss',
					'pale-ale',
					'bock',
					'fruit-lambic',
					'black-stout'
				]
			}
		}
	}
}

const Template = (args: BeerBadgeComponent) => ({
	component: BeerBadgeComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	type: 'pilsen'
}
