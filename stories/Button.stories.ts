import { ButtonComponent } from 'tagme-components'

export default {
  title: 'Buttons',
  component: ButtonComponent,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: [
          'main', 
          'success',
          'outline-main',
          'outline-success',
          'white',
          'black'
        ]
      }
    }
  }
}

const Template = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args
})

export const Default = Template.bind({})
Default.args = {
    text: 'Default',
    disabled: false,
    small: false,
    type: 'main'
}
