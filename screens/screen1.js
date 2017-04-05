import React, { Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textTitle: "something",
        };

    };
    render() {
        console.log(this.props.sceneNum);
        let color;
        switch(this.props.sceneNum)
        {
            case 0:
            {
                this.state.textTitle = "something" + 0;
                color = "green";
            }
                break;
            case 1:
            {
                this.state.textTitle = "something" + 1;
                color = "red";
            }
                break;

            default:
            {
                this.state.textTitle = "something";
                color = "yellow";
            }
        };

        return (
            <View style={{backgroundColor: color}}>
                <Text>Current Scene: { this.state.textTitle }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        );
    }
}