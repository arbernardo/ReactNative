import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon }  from 'native-base';
import MainApp from './MainApp';
import {SearchBar} from 'react-native-elements';
import RecentDocuments from './components/RecentDocuments';

export default class MainApp2 extends Component {

    render() {


        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>WFG App</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <View style={{padding: 10}}>
                        <View style={{padding: 10}}>
                            <SearchBar
                                placeholder="Search Document"
                                round
                                containerStyle={styles.searchBar}
                                inputStyle={styles.searchInput}
                            />
                        </View>
                        <RecentDocuments/>
                    </View>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
   searchBar: {
       backgroundColor: "rgba(0,0,0,0)",
       backfaceVisibility: "hidden",
       borderTopWidth: 0,
       borderBottomWidth: 0
   },
    searchInput: {
       backgroundColor: "rgba(0,100,255, .1)",
    }
});

