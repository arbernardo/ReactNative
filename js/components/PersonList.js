/**
 * Created by Ace on 3/1/2017.
 */
import React, {Component} from 'react';
import {View} from 'react-native';

import { List, ListItem } from 'react-native-elements'

const list = [
        {
            id: 1,
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            id: 2,
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
    ]

export default class PersonList extends Component {

    render() {

        return (
            <List containerStyle={{marginBottom: 20, flex:1}}>
                {
                    list.map((l, i) => (
                        <ListItem
                            roundAvatar
                            avatar={{uri:l.avatar_url}}
                            key={i}
                            title={l.name}
                            hideChevron={true}
                            underlayColor={"#c0c0c0"}
                            onPress={() => this.props.viewData(l)}
                        />
                    ))
                }
            </List>
        );
    }
}