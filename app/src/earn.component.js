import React from 'react';
import { View, Text, Image } from 'react-native';
import Navigator from './navigator.component';
import Top from './earn/top.component';
import EarnNavigator from './earn/earnNavigator.component';
import Media from './media.component';
import Level from './level.component';
import Tasks from './earn/tasks.component';
import styles from '../style';

export default class Earn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.userData.level,
            media: 'none'
        }
        this.setPage = this.setPage.bind(this);
        this.setMedia = this.setMedia.bind(this);
    }
    setPage(p) {
        this.setState({page: p})
    }
    setMedia(media) {
        this.setState({media: media})
    }
    componentDidMount() {
		this.props.refreshUserData();
    }
    render() {
        var enabled= (this.props.userData.level < this.state.page);
        var main;
        if (this.state.media==='none') {
            main = (
                <View style={styles.container}>
                    <Top userData={this.props.userData} level={this.props.level} lang={this.props.lang}></Top>
                    <EarnNavigator setPage={this.setPage} level={this.props.level} userData={this.props.userData} lang={this.props.lang}></EarnNavigator>
                    <Level userData={this.props.userData} lang={this.props.lang} level={this.state.page} value={this.props.level[this.state.page-1][0]} daily={this.props.level[this.state.page-1][1]} buy={this.props.level[this.state.page-1][2]}></Level>
                    <Media enabled={enabled} setMedia={this.setMedia} style={[styles.media, styles.mediaF]} title={'Facebook'}></Media>
                    <Media enabled={enabled} setMedia={this.setMedia} style={[styles.media, styles.mediaI]} title={'Instagram'}></Media>
                    <Media enabled={enabled} setMedia={this.setMedia} style={[styles.media, styles.mediaY]} title={'Youtube'}></Media>
                    <Navigator lang={this.props.lang} setPage={this.props.setPage} page='earn'/>
                </View>
            )
        } else {
            main = (
                <View style={styles.container}>
                    <Text style={styles.earnTitle}>{this.props.lang==='en'? 'Task List': 'Λίστα εργασιών'}</Text>
                    <Tasks style={[styles.media]} title={this.state.media} lang={this.props.lang} plus={this.props.level[this.state.page-1][0]} userData={this.props.userData}></Tasks>
                    <Navigator setMedia={this.setMedia} lang={this.props.lang} setPage={this.props.setPage} page='earn'/>
                </View>
            )
        } 
        return(
            main
        );
    }
}