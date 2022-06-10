import React from 'react';
import { View, Text, Image } from 'react-native';
import Navigator from './navigator.component';
import Media from './media.component';
import styles from '../style';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false,
            feed: []
        }
        this.setMedia = this.setMedia.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
        
    }
    setMedia() {
        this.props.setPage('earn');
    }
    getFeedData() {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            mode: 'cors',
        }

        fetch('http://localhost:8010/proxy/feed', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.feed) {
                    this.setState({feed: data.feed});
                }
            })
            .catch(e => {
                alert(e);
            });
        setTimeout( () => this.getFeedData(), 30000);
    }
    componentDidMount() {
        this.getFeedData();
		this.props.refreshUserData();
    }
    render() {
        var feed=[];
        for (let i=0; i<this.state.feed.length; i++) {
            feed.push(
                <View style={styles.feed}>
                    <Image style={styles.feedPic} source={'https://fer-uig.glitch.me/?uuid=712'+i}/>
                    <Text style={styles.feedText}>User {this.state.feed[i][0]} just upgraded to level {this.state.feed[i][1]}!</Text>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <View style={styles.homeMedia}>
                    <Text style={styles.homeMediaText}>Task list</Text>
                    <Media setMedia={this.setMedia} enabled={true} style={[styles.media, styles.mediaF]} title={'Facebook'}></Media>
                    <Media setMedia={this.setMedia} enabled={true} style={[styles.media, styles.mediaI]} title={'Instagram'}></Media>
                    <Media setMedia={this.setMedia} enabled={true} style={[styles.media, styles.mediaY]} title={'Youtube'}></Media>
                    <Text style={styles.homeMediaText}>User feed</Text>
                    {feed}
                </View>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='home'/>
            </View>
        );
    }
}