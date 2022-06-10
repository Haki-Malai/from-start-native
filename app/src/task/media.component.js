import React from 'react';
import { Text, Image, Pressable, Linking, View, TextInput } from 'react-native';
import styles from '../../style';

export default class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaded: false,
            expanded: false
        }
        this.setExpanded = this.setExpanded.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }
    setExpanded() {
        this.setState({expanded: !this.state.expanded});
    }
    loadInBrowser(url) {
        Linking.openURL(url).catch(err => alert("Couldn't load page", err));
    }
    uploadFile() {
        var thefile = document.getElementById('thefile');
        var filename = thefile.value.replace(/.*[\/\\]/, '');
        if (filename) {
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                mode: 'cors',
                body: JSON.stringify({
                    filename: filename,
                    id: this.props.data.id,
                    function: 'update'
                })
            }

            fetch('http://localhost:8010/proxy/tasks', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Image uploaded successfully!');
                        this.setState({uploaded: true}); // Useless, but makes the component reload
                    } else {
                        alert('Something went wrong, please try again!');
                    }
                })
                .catch(e => {
                    console.log(e);
            });
        }
    }
    render() {
        var toRender, mediaStyles = [styles.media], toDo;
        if (this.props.data.social ==='Facebook') {
            mediaStyles.push(styles.mediaF);
        } else if (this.props.data.social ==='Instagram') {
            mediaStyles.push(styles.mediaI);
        } else if (this.props.data.social ==='Youtube') {
            mediaStyles.push(styles.mediaY);
        }
        if (this.props.data.requirements === 1) {
            toDo = 'like';
        }

        // Might be usefull someday who knows :P
        //switch(this.props.data.status){
            //case 0:

            //case 1:

            //case 2:

            //case 3:
        //}

        if (this.state.expanded === true){
            mediaStyles.push(styles.expandedMedia)
            // If status isn't on pending there is no need for the upload area
            if (this.props.data.status != 0){
                toRender = <Pressable style={mediaStyles} onPress={() => this.setExpanded() }>
                                <View style={styles.upload} >
                                    <Pressable style={styles.uploadLink} >
                                        <Text style={styles.uploadLinkText}>Task: {toDo}</Text>
                                        <Text style={styles.uploadLinkText} onPress={() => this.loadInBrowser(this.props.data.link )}>Link: {this.props.data.link }</Text>
                                    </Pressable>
                                </View>
                            </Pressable>
            } else {
                toRender = <Pressable style={mediaStyles} onPress={() => this.setExpanded() }>
                                <View style={styles.upload} >
                                    <Pressable style={styles.uploadLink} >
                                        <Text style={styles.uploadLinkText}>Task: {toDo}</Text>
                                        <Text style={styles.uploadLinkText} onPress={() => this.loadInBrowser(this.props.data.link )}>Link: {this.props.data.link }</Text>
                                        <Text style={styles.uploadLinkText}>Upload proof</Text>
                                        <input 
                                            id="thefile"
                                            style={{ fontSize: '1.2em', marginTop: '.6em'}} 
                                            type="file" 
                                            accept='image/*'>
                                        </input>
                                        <Pressable style={styles.uploadButton} onPress={() => this.uploadFile() }>
                                            <Text style={styles.uploadLinkText}>Upload</Text>
                                        </Pressable>
                                    </Pressable>
                                </View>
                            </Pressable>
            }
        } else {
            toRender =  <Pressable style={mediaStyles} onPress={() => this.setExpanded() }>
                            <Image style={styles.mediaIcon} source={require('../../assets/earn/'+this.props.data.social +'.png' )}/>
                            <Text style={styles.mediaTitle}>{this.props.data.social }-Like </Text>
                        </Pressable>
        }
        return(
            toRender
        );
    }
}