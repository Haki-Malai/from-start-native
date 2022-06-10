import React from 'react';
import * as Font from 'expo-font';
import { View } from 'react-native';
import Welcome from './src/welcome.component';
import Login from './src/login.component';
import Signup  from './src/signup.component';
import Home from './src/home.component';
import Earn from './src/earn.component';
import Vip from './src/vip.component';
import Task from './src/task.component';
import Account from './src/account.component';
import styles from './style';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lang: 'el',
			fontsLoaded: false,
			page: 'welcome',
			accessToken: localStorage.getItem('token'),
			userData: {},
			remember: false,
			level: [[0.5, 3, 0], [0.8, 5, 100], [1.5, 8, 300], [1.7, 15, 600], [2, 22, 1000], [2.3, 60, 3000]]
		}
		this.setPage = this.setPage.bind(this);
		this.setToken = this.setToken.bind(this);
		this.getAuthorized = this.getAuthorized.bind(this);
		this.setUserData = this.setUserData.bind(this);
		this.setLang = this.setLang.bind(this);
		this.setRemember = this.setRemember.bind(this);
		this.logout = this.logout.bind(this);
		this.refreshUserData = this.refreshUserData.bind(this);
	}

	setRemember(bool) {
		this.setState({remember: bool})
	}

	setLang(lang) {
		this.setState({lang: lang})
	}

	setPage(page) {
		this.setState({page: page});
	} 

	setToken(token) {
		localStorage.setItem('token', token);
		this.setState({accessToken: token});
	} 

	setUserData(data) {
		this.setState({userData: data})
	}

	refreshUserData() {
		// Authorization from saved cookie
		var token = localStorage.getItem('token');
		if (token) {
			const requestOptions = {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'Accept': '*/*'
				},
				mode: 'cors',
				body: JSON.stringify({access_token: token})
			}

			fetch('http://localhost:8010/proxy/', requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.user_data) {
						this.setState({userData: JSON.parse(data.user_data)});
					} else {
						this.setState({page: 'welcome'});
					}
				})
				.catch(e => {
					alert(e);
				});
		}
	}

	logout() {
		const requestOptions = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'Accept': '*/*'
			},
			mode: 'cors',
			body: JSON.stringify({access_token: this.state.accessToken})
		}
		fetch('http://localhost:8010/proxy/logout', requestOptions)

		localStorage.setItem('token', null);
		localStorage.setItem('userdata', null);
		location.reload();
	}

	getAuthorized() {
		// Authorization from saved cookie
		if (this.state.accessToken) {

			const requestOptions = {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'Accept': '*/*'
				},
				mode: 'cors',
				body: JSON.stringify({access_token: this.state.accessToken})
			}

			fetch('http://localhost:8010/proxy/', requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.user_data) {
						this.setState({userData: JSON.parse(data.user_data)});
						this.setState({page: 'home'});
					} else {
						this.setState({page: 'welcome'});
					}
				})
				.catch(e => {
					alert(e);
				});
		}
	}

    async loadFonts() {
        await Font.loadAsync({
            Roboto: require('./assets/fonts/Roboto-Regular.ttf'),

            'Roboto-Bold': {
                uri: require('./assets/fonts/Roboto-Bold.ttf'),
                display: Font.FontDisplay.FALLBACK,
            },
        });
        this.setState({fontsLoaded: true })
    }

    componentDidMount() {
        this.loadFonts();
		this.getAuthorized();
    }

    render() {
		// Warn user if font didn't load
		if (!this.state.fontsLoaded) console.warn('Error, unable to load fonts');

		var toRender;
		if (this.state.page === 'welcome') {
			toRender = <Welcome 
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				setToken={this.setToken}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'login') {
			toRender = <Login 
				setRemember={this.setRemember}
				remember={this.state.remember}
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				setToken={this.setToken}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'signup') {
			toRender = <Signup 
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				setToken={this.setToken}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'home') {
			toRender = <Home 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'earn') {
			toRender = <Earn 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
				level={this.state.level}
			/>
		} else if (this.state.page === 'vip') {
			toRender = <Vip 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
				level={this.state.level}
			/>
		} else if (this.state.page === 'task') {
			toRender = <Task 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'account') {
			toRender = <Account 
				level={this.state.level}
				logout={this.logout}
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				username={this.state.username}
				setUserData={this.setUserData}
				refreshUserData={this.refreshUserData}
				getAuthorized={this.getAuthorized}
				userData={this.state.userData}
			/>
		}
		return (
			<View style={styles.container}>
				{toRender}
			</View>

		);
    }
}