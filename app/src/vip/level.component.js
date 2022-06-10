import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../../style';

export default class Level extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upgraded: false
        }
        this.buy = this.buy.bind(this);
    }
    buy() {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            mode: 'cors',
            body: JSON.stringify({username: this.props.username, level: this.props.level})
        }
        fetch('http://localhost:8010/proxy/upgrade', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    this.setState({upgraded: !this.state.upgraded});
                    alert('Upgraded successfully!');
                } else {
                    alert('Something went wrong...');
                }
            })
            .catch(e => {
                alert(e);
			});
    }
    render() {
        var join;
        if (this.props.level != this.props.userData.level) {
            join = (
                <View style={styles.vipRight}>
                    <Text style={styles.vipRight}>{this.props.buy}</Text>
                    <Pressable style={styles.vipPressable} onPress={() => this.buy()}>
                        <Text>{this.props.lang==='en'? 'Join': 'Συμμετοχή'}</Text>
                    </Pressable>
                </View>
            )
        } else {
            join = null;
        }
        return(
            <View style={styles.vip}>
                <View style={styles.vipIconAndText}>
                    <Image style={styles.vipIcon} source={require('../../assets/vip/'+this.props.level+'.png')}/>
                    <View style={styles.vipTextContainer}>
                        <Text>{this.props.lang==='en'?'Level':'Επίπεδο'} {this.props.level}</Text>
                        <Text style={styles.vipTextSmall}>{this.props.lang==='en'?'Price':'Αξία'}: {this.props.value}</Text>
                        <Text style={styles.vipTextSmall}>{this.props.lang==='en'?'Daily task':'Ημερήσιες εργασίες'}: {this.props.daily}</Text>
                    </View>
                </View>
                {join}
            </View>
        );
    }
}