import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import styles from '../style';

export default class Media extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style=this.props.style;
        if (!this.props.enabled) {
            style.push(styles.mediaDisabled)
        }
        return(
            <Pressable style={style} disabled={!this.props.enabled} onPress={()=>alert('12')}>
                <Image style={styles.mediaIcon} source={require('../assets/earn/'+this.props.title+'.png')}/>
                <Text style={styles.mediaTitle}>{this.props.title}</Text>
            </Pressable>
        );
    }
}