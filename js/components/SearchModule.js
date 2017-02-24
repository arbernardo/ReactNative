/**
 * Created by ace on 2/24/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Content, Item, Picker, Header, Left, Icon} from 'native-base';

import {
    ActionsContainer,
    Button,
    FieldsContainer,
    Fieldset,
    Form,
    FormGroup,
    Input,
    Label,
    Switch
} from 'react-native-clean-form';

export default class SearchModule extends Component {

    state = {selected: 'key0'}

    render() {

        return (FormView());
    }
}

const data = [
    {
        "label": "Status",

    },
];

styles = StyleSheet.create({
    headingContainer: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: "#000"
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22
    },
    labelContainerStyle: {
        // marginTop: 8
    }
});

const FormView = props => (
    <Form>
        <FieldsContainer>
            <Fieldset label="Contact details">
                <FormGroup>
                    <Label>First name</Label>
                    <Input placeholder="Esben" onChangeText={this.onFirstNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input placeholder="esbenspetersen@gmail.com" onChangeText={this.onEmailChange} />
                </FormGroup>
            </Fieldset>
            <Fieldset label="Password" last>
                <FormGroup>
                    <Label>Password</Label>
                    <Input placeholder="Enter a password" onChangeText={this.onPasswordChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Repeat password</Label>
                    <Input placeholder="Repeat your password" onChangeText={this.onRepeatPasswordChange} />
                </FormGroup>
                <FormGroup border={false}>
                    <Label>Save my password</Label>
                    <Switch onValueChange={this.toggleSaveMyPassword} />
                </FormGroup>
            </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
            <Button icon="md-checkmark" iconPlacement="right" onPress={this.save}>Save</Button>
        </ActionsContainer>
    </Form>
);