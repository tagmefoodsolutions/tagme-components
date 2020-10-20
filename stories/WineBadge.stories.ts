import { WineBadgeComponent } from 'tagme-components'

export default {
	title: 'Wine Badges',
	component: WineBadgeComponent,
	argTypes: {
		type: {
			control: {
				type: 'inline-radio',
				options: [
					'white',
					'sweet-red',
					'porto',
					'fortified-red',
					'white-porto',
					'sweet-white',
					'fortified-white',
					'jerez',
					'madeira',
					'rose',
					'red',
					'sparkling',
					'champagne',
					'distilled-grape'
				]
			}
		}
	}
}

const Template = (args: WineBadgeComponent) => ({
	component: WineBadgeComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	type: 'white'
}