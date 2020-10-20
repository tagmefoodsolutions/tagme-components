import { CountryBadgeComponent } from 'tagme-components'

export default {
	title: 'Country Badges',
	component: CountryBadgeComponent,
	argTypes: {
		country: {
			control: {
				type: 'inline-radio',
				options: [
					'south-africa',
					'germany',
					'argentina',
					'australia',
					'austria',
					'belgium',
					'bolivia',
					'brazil',
					'bulgaria',
					'canada',
					'chile',
					'china',
					'colombia',
					'south-koreia',
					'croatia',
					'denmark',
					'emirates',
					'scotia',
					'slovenia',
					'spain',
					'finland',
					'france',
					'georgia',
					'greece',
					'netherlands',
					'hungary',
					'india',
					'indonesia',
					'england',
					'ireland',
					'israel',
					'italy',
					'jamaica',
					'japan',
					'lebanon',
					'malta',
					'marocco',
					'mexico',
					'norway',
					'new-zeland',
					'peru',
					'poland',
					'portugal',
					'czech-republic',
					'romania',
					'russia',
					'serbia-and-montenegro',
					'sweden',
					'switzerland',
					'tunisia',
					'turkey',
					'ukraine',
					'uruguay',
					'usa',
					'venezuela'
				]
			}
		}
	}
}

const Template = (args: CountryBadgeComponent) => ({
	component: CountryBadgeComponent,
	props: args
})

export const Default = Template.bind({})
Default.args = {
	country: 'south-africa'
}
