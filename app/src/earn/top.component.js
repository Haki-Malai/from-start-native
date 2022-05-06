import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../style';

export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    render() {
        return(
            <View >
                <View style={styles.earnTop}>
                    <Text style={styles.earnTitle}>{this.props.lang==='en'? 'Earn': 'Κέρδισε'}</Text>
                    <Image style={styles.accountPic} source={require('../../assets/125.jpg')}/>
                    <Text style={styles.earnTextBig}>{this.props.lang==='en'? 'Membership: Level': 'Ιδιότητα μέλους: Επίπεδο'} {this.props.userData.vip}</Text>
                    <Image style={styles.earnTextIcon} source={require('../../assets/vip/1.png')}/>
                    <Text style={styles.earnText}>{this.props.lang==='en'? 'Achievable task: ': 'Εφικτές εργασίες: '} {this.props.vip[this.props.userData.vip-1][1]}</Text>
                </View>
            </View>
        );
    }
}