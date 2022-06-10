import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../style';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.accountButtons}>
                <Pressable style={styles.accountButton} onPress={() => 'do nothing'} >
                    <Image style={styles.accountPressableIcon} source={require('../../assets/account/tether.png')}/>
                    <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Funds': 'Κεφάλαια'}</Text>
                </Pressable>
                <Pressable style={styles.accountButton} onPress={() => 'do nothing'} >
                    <Image style={styles.accountPressableIcon} source={require('../../assets/account/credit-card.png')}/>
                    <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Recharge': 'Επαναφόρτιση'}</Text>
                </Pressable>
                <Pressable style={styles.accountButton} onPress={() => 'do nothing'} >
                    <Image style={styles.accountPressableIcon} source={require('../../assets/account/receipt.png')}/>
                    <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'My bill': 'Απόδειξη'}</Text>
                </Pressable>
                <Pressable style={styles.accountButton} onPress={() => 'do nothing'} >
                    <Image style={styles.accountPressableIcon} source={require('../../assets/account/clock.png')}/>
                    <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Withdrawal record': 'Ιστορικό αναλήψεων'}</Text>
                </Pressable>
                <Pressable style={styles.accountButton} onPress={() => 'do nothing'} >
                    <Image style={styles.accountPressableIcon} source={require('../../assets/account/wallet.png')}/>
                    <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Withdrawal': 'Ανάληψη'}</Text>
                </Pressable>
            </View>
        );
    }
}