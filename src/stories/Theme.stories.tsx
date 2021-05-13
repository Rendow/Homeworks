
import React from 'react'
import {Story, Meta} from '@storybook/react'
import Theme from '../p2-homeworks/h12/HW12'
import {Provider} from 'react-redux'
import store from '../p2-homeworks/h10/bll/store'

export default {
    title: 'Stories/Theme',
    component: Theme
} as Meta

const Template: Story<any> = (args) => {
    return (
        <Provider store={store}>
            <Theme {...args} />
        </Provider>
    )
}

export const Example = Template.bind({})
Example.args = {}