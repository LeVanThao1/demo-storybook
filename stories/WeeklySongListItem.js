import React from 'react'
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import WeeklySongListItem from '../src/components/WeeklySongListItem'

storiesOf('WeeklySongListItem', module).add(
    'default',
    () => {
        <WeeklySongListItem 
            order = {1}
            title={"Anh se khong on"}
            singer={"Anh Tú"}
            view={20}
        />
    }
) 

