import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Navigator from './navigator.component';
import Level from './level.component';
import Top from './vip/top.component';
import styles from '../style';

export default class Vip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLevel: 1,
        }
    }
    componentDidMount() {
		this.props.refreshUserData();
    }
    render() {
        var levels = [];
        for (let i=1; i<this.props.level.length; i++) {
            levels.push(<Level userData={this.props.userData} lang={this.props.lang} level={i+1} value={this.props.level[i][0]} daily={this.props.level[i][1]} buy={this.props.level[i][2]}></Level>)   
        }
        return(
            <View style={styles.container}>
                <Top userData={this.props.userData} level={this.props.level} lang={this.props.lang}></Top>
                {levels}
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='vip'/>
            </View>
        );
    }
}