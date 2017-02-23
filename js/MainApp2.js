/**
 * Created by Ace on 2/20/2017.
 */
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Text } from 'react-native';
import {SideMenu, List, ListItem} from 'react-native-elements';


export default class MainApp2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        // this.toggleSideMenu = this.toggleSideMenu.bind(this);
    }

    toggleSideMenu(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        var list = [
            {avatar_url: 'haha', name: 'Ace', subtitle: 'trylang'},
            {avatar_url: 'hehe', name: 'Michelle', subtitle: 'tryagain'},
            {avatar_url: 'hihi', name: 'Alvin', subtitle: 'tryulit'},
        ];

        // const MenuComponent = (
        //   <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        //       <List containerStyle={{marginBottom:20}} >
        //           {
        //               list.map((data, index) => (
        //                   <ListItem
        //                     onPress={() => console.log('Pressed')}
        //                     key={index}
        //                     title={data.name}
        //                     subtitle={data.subtitle}
        //                   />
        //               ))
        //           }
        //       </List>
        //   </View>
        // );
        //
        const Menu = (
            <View style={{flex:1, backgroundColor: '#ededed', marginTop: 40}}>
                <Text>lol</Text>
            </View>
        );

        console.log(this.state.isOpen);
        return (

            <SideMenu
                menu={Menu}
                isOpen={false}
                menuPosition={"right"}
            >

                {/*<App toggleSideMenu={() => this.toggleSideMenu()} />*/}
            </SideMenu>
        );
    }
}
class App extends Component {

    render(){

        return (
            <View style={{flex:1}}>
                <TouchableWithoutFeedback>
                    <View>
                        <Text onPress={this.props.toggleSideMenu}>Click Me!</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}