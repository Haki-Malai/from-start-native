import React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import Navigator from './navigator.component';
import Password from './account/password.component';
import Support from './account/support.component';
import Guide from './account/guide.component'
import Buttons from './account/buttons.component';
import Lang from './lang.component';
import styles from '../style';
import Options from './account/options.component';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            remainingTasks: this.props.level[this.props.userData.level-1][1]-this.props.userData.tasks.length,
            todayTasks: this.props.userData.tasks.length
        }
    }
    componentDidMount() {
		this.props.refreshUserData();
    }
    render() {
        var toExpand;
        if (this.state.option === 'support') {
            toExpand = <Support lang={this.props.lang}></Support>
        }else if (this.state.option === 'guide') {
            toExpand = <Guide lang={this.props.lang}></Guide>
        } else if (this.state.option === 'password') {
            toExpand = <Password lang={this.props.lang} username={this.props.userData.username}></Password>
        }
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.accountScroll} horizontal={false} scrollEnabled={false}>
                    <View style={styles.account}>
                        <View style={styles.accountDetailsWrapper}>
                            <Image style={styles.accountPic} source={'https://fer-uig.glitch.me/?uuid=7121'}/>
                            <Text style={styles.accountUsername}>{this.props.userData.username}</Text>
                            <Text style={styles.accountDetails}>
                                {this.props.lang==='en'? 'Email:': 'Ηλεκτρονική διεύθυνση:'} {this.props.userData.email}<br></br>
                                {this.props.lang==='en'? 'Level:': 'Επίπεδο:'} {this.props.userData.level}
                                    <Pressable style={styles.accountPressable} onPress={() => {this.props.setPage('level')}}><Text>Upgrade to level</Text></Pressable>
                                    <br></br>
                                {this.props.lang==='en'? 'Credit score:': 'Σκορ πίστης:'} {this.props.userData.level*600}<br></br>
                                {this.props.lang==='en'? 'Invitation Code:': 'Κωδικός πρόσκλησης:'} {this.props.userData.invitationCode}
                                <Pressable style={styles.accountPressable} onPress={() => navigator.clipboard.writeText(this.props.userData.invitationCode)} ><Text>Copy</Text></Pressable>
                            </Text>
                        </View>
                        <Lang setLang={this.props.setLang}></Lang>
                        <View style={styles.accountTables}>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Balance': 'Υπόλοιπο'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Task Profit': 'Κέρδη εργασιών'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.invitationCommision.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Invitation Commision': 'Κέρδη προσκλήσεων'}</Text>
                                </Text>
                            </View>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{(this.props.userData.taskProfit + this.props.userData.invitationCommision).toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Total Profit': 'Ολικά κέρδη'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.state.todayTasks}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Today Complete': 'Σημερινές εργασίες'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.state.remainingTasks}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Today remaining': 'Σημερινές απομένουν'}</Text>
                                </Text>
                            </View>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Today\'s profit': 'Σημερινά κέρδη'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Weekly profit': 'Εβδομαδιαία κέρδη'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Monthly profit': 'Μηνιαία κέρδη'}</Text>
                                </Text>
                            </View>
                        </View>
                        <Buttons lang={this.props.lang}></Buttons>
                        <Options username={this.props.userData.username} lang={this.props.lang} logout={() => this.props.logout()}></Options>
                    </View>
                </ScrollView>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='account'/>
            </View>
        );
    }
}