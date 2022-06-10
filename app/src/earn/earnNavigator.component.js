import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../style';

export default class EarnNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            style: [styles.earnNavPressablePressed, styles.earnNavPressable, styles.earnNavPressable, styles.earnNavPressable, styles.earnNavPressable, styles.earnNavPressable]
        }
    }

    changeStyle(page) {
        var newStyle = [];
        for (let i=0; i<this.state.style.length; i++) {
            newStyle.push(styles.earnNavPressable);
        } 
        newStyle[page] = styles.earnNavPressablePressed;
        this.setState({style: newStyle});
    }

    render() {
        var pressables = [];
        for (let i=0; i<this.props.level.length; i++) {
            pressables.push(
                <Pressable style={this.state.style[i]} onPress={() => {this.props.setPage(i+1); this.changeStyle(i);}} >
                    <Text style={styles.earnNavPressableText}>{this.props.lang=='en'? 'Level': 'Επίπεδο'} {i+1}</Text>
				</Pressable>
            )
        }
        return(
            <View style={styles.earnNavigator}>
                {pressables}
            </View>
        );
    }
}