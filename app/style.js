import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;
let PressableWidth = ScreenWidth
if (ScreenHeight < ScreenWidth) {
    PressableWidth = ScreenWidth/2
    ScreenWidth = ScreenWidth/2
}
const navHeight = ScreenHeight/20;
const navIconDimensions = ScreenWidth/20;
const mainOrange = '#fc5a03';
const fadedOrange = '#fda677';
const veryFadedOrange = '#ffe6d8';
const logoDimensions = ScreenHeight/5
const white = '#F0FFF0'

export default StyleSheet.create({
  menuContainer: {
    marginTop: '1em',
  },
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 'row',
    height: ScreenHeight,
    alignItems: 'center',
    backgroundColor: white,
    marginBottom: navIconDimensions
  },

  lang: {
    flexDirection: 'row',
  },

  langIcon: {
    margin: '1em',
    width: '2em',
    height: '2em'
  },

  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    textAlign: 'center'
  },

  link: {
    fontSize: '1em',
    marginVertical: '.4em',
    color: '#1B95E0'
  },

  welcomeLogo: {
    minWidth: logoDimensions,
    minHeight: logoDimensions,
    resizeMode: 'contain'
  },
  
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: '2em',
    marginVertical: '.5em',
    textAlign: 'center'
  },

  loginCheckbox: {
    flexDirection: 'row'
  },

  loginCheckboxLabel: {
    marginLeft: '1em',
  },

  signupLogo: {
    minWidth: '4em',
    minHeight: '4em',
    resizeMode: 'contain'
  },

  signupTitle: {
    fontWeight: 'bold',
    fontSize: '.5rem',
    marginVertical: '.3em',
    textAlign: 'center'
  },

  menuPressable: {
    fontWeight: 'bold',
    backgroundColor: mainOrange,
    minWidth: PressableWidth,
    height: '4em',
    borderRadius: '1em',
    marginVertical: '.5em',
    justifyContent: 'center'
  },

  textPressable: {
    lineHeight: '1.5em',
    fontSize: '1.3rem',
    fontStyle: 'bold',
    textAlign: 'center',
    marginVertical: '1em'
  },

  menuInput: {
    textAlign: 'center',
    minWidth: ScreenWidth,
    borderRadius: '1em',
    marginVertical: '.5em',
    fontSize: '1.5em',
    paddingVertical: '.7em',
  },

  menuLoading: {
    position: 'absolute',
    left: '48%'
  },
  navigator: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    justifyContent: 'center',
    width: ScreenWidth,
    minHeight: navHeight,
    backgroundColor: mainOrange
  },
  navPressable: {
    zIndex: 2,
    alignItems: 'center',
    maxWidth: navIconDimensions,
    height: navIconDimensions,
    marginHorizontal: navIconDimensions*1.4,
    marginVertical: navIconDimensions/2,
  },
  navPressableFaded: {
    zIndex: 2,
    alignItems: 'center',
    maxWidth: navIconDimensions,
    height: navIconDimensions,
    marginHorizontal: navIconDimensions*1.4,
    marginVertical: navIconDimensions/2,
    opacity: 0.5
  },
  navPressableIcon: {
    minWidth: navIconDimensions,
    minHeight: navIconDimensions
  },
  navPressableText: {
    fontSize: navIconDimensions/2.5,
    fontWeight: 'bold'
  },
  accountScroll: {
    alignItems: 'center',
    minHeight: ScreenHeight,
  },
  account: {
    backgroundColor: white,
    alignItems: 'center',
    paddingBottom: navIconDimensions*2,
  },
  accountDetailsWrapper: {
    backgroundColor: fadedOrange,
    borderBottomLeftRadius: '7em',
    borderBottomRightRadius: '7em',
    width: ScreenWidth,
    padding: '1em',
    alignItems: 'center',
    fontSize: '0.8em'
  },
  accountPic: {
    height: '5em',
    width: '5em',
    borderRadius: '100%',
    borderStyle: 'solid',
    borderColor: mainOrange,
    borderWidth: '.2em'
  },
  accountUsername: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '.4em',
    textAlign: 'center'
  },
  accountDetails: {
    fontSize: '.8em',
    fontWeight: 'bold',
    margin: '.2em',
    padding: '.2em',
    textAlign: 'center'
  },
  accountPressable: {
    backgroundColor: 'black',
    borderRadius: '1em',
    color: mainOrange,
    margin: '.4em',
    paddingVertical: '.1em',
    paddingHorizontal: '.4em'
  },
  accountTables: {
    shadowColor: "#000",
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    marginTop: '1em',
    padding: '1em',
    backgroundColor: veryFadedOrange,
    borderRadius: '1em'
  },
  accountTable: {
    flexDirection: 'row',
    margin: '1em',
    borderStyle: 'solid',
    borderColor: 'grey',
  },
  accountTableItem: {
    width: ScreenWidth/4,
    fontSize: '1.5em',
    textAlign: 'center',
  },
  accountTableItemLabel: {
    display: 'block',
    fontSize: '0.5em',
    color: 'grey',
  },
  accountButtons: {
    flexDirection: 'row',
    width: ScreenWidth
  },
  accountButton: {
    textAlign: 'center',
    width: ScreenWidth/5,
    alignItems: 'center',
    marginVertical: '.5em',
  },
  accountPressableIcon: {
    width: '3em',
    height: '3em',
  },
  accountPressableText: {
    fontSize: '.7em',
    textAlign: 'center'
  },
  accountOption: {
    padding: '.3em',
    width: ScreenWidth/1.1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderBottomWidth: '.1em',
    marginBottom: '.4em',
    alignItems: 'center'
  },
  accountOptionPressableText: {
    flexDirection: 'row',
    fontSize: '1em'
  },
  accountOptionPressableIcon: {
    width: '1em',
    height: '1em',
    marginRight: '1em'
  },
  accountLogout: {
    fontSize: '1.3em',
    color: mainOrange,
    marginVertical: '.5em',
    textAlign: 'center',
    padding: '0.4em',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: '.01em'
  },
  optionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    maxWidth: ScreenWidth/1.2,
    textAlign: 'center'
  },
  optionInput: {
    fontSize: '1.2em',
    textAlign: 'center',
    borderBottomWidth: '.1em',
    borderBottomColor: 'grey',
    marginVertical: '.4em'
  },
  optionPressable: {
    borderWidth: '.1em',
    borderRadius: '1em',
    padding: '.4em',
    borderColor: 'grey' 
  },
  optionPressableText: {
    fontSize: '1.2em',
    color: mainOrange,
  },
  support: {
    borderBottomWidth: '.1em',
    borderBottomColor: 'grey',
    margin: '.5em'
  },
  guideTitle: {
    fontSize: '1.3em',
    fontWeight: 'bold'
  },
  guideParagraph: {
    marginVertical: '.3em'
  },
  taskNavigator: {
    flexDirection: 'row',
    zIndex: 1,
    width: ScreenWidth,
    backgroundColor: fadedOrange,
    paddingTop: '.5em',
  },
  taskNavPressable: {
    marginTop: '1em',
    width: ScreenWidth/4,
    textAlign: 'center',
    padding: '.2em'
  },
  taskNavPressablePressed: {
    marginTop: '1em',
    width: ScreenWidth/4,
    textAlign: 'center',
    padding: '.2em',
    borderBottomColor: 'red',
    borderBottomWidth: '.2em',
  },
  taskNavPressableText: {
    fontSize: '1em'
  },
  vip: {
    width: ScreenWidth/1.1,
    padding: '.5em',
    paddingRight: '.7em',
    margin: '.5em',
    borderRadius: '1em',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: veryFadedOrange,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    justifyContent: 'space-between',
  },
  vipIconAndText: {
    flexDirection: 'row'
  },
  vipIcon: {
    width: '2.5em',
    height: '2.5em'
  },
  vipTextContainer: {
    flexDirection: 'column'
  },
  vipTextSmall: {
    fontSize: '.6em',
  },
  vipRight: {
    alignSelf: 'flex-end',
  },
  vipPressable: {
    backgroundColor: mainOrange,
    paddingVertical: '.2em',
    paddingHorizontal: '.4em',
    borderRadius: '.4em'
  },
  earnTitle: {
    backgroundColor: veryFadedOrange,
    height: navHeight,
    width: ScreenWidth,
    textAlign: 'center',
    paddingTop: '.2em',
    fontSize: '1.2em'
  },
  earnTop: {
    backgroundColor: mainOrange,
    width: ScreenWidth,
    alignItems: 'center'
  },
  earnTextBig: {
    fontSize: '1em'
  },
  earnTextIcon: {
    width: '1.7em',
    height: '1.7em',
    marginVertical: '.3em'
  },
  earnText: {
    fontSize: '.8em',
    marginBottom: '.3em'
  },
  earnNavigator: {
    flexDirection: 'row',
    zIndex: 1,
    width: ScreenWidth,
    backgroundColor: fadedOrange,
    paddingTop: '.5em',
  },
  earnNavPressable: {
    width: ScreenWidth/6,
    textAlign: 'center',
    padding: '.1em'
  },
  earnNavPressablePressed: {
    width: ScreenWidth/6,
    textAlign: 'center',
    padding: '.1em',
    borderBottomColor: 'red',
    borderBottomWidth: '.2em',
  },
  earnNavPressableText: {
    fontSize: '.7em'
  },
  media: {
    flexDirection: 'row',
    width: ScreenWidth/1.1,
    padding: '.4em',
    marginVertical: '.4em',
    borderRadius: '.4em',
  },
  mediaIcon: {
    height: '2em',
    width: '2em',
    tintColor: 'white'
  },
  mediaTitle: {
    marginTop: '.5em',
    marginLeft: '.5em',
    color: 'white',
    fondWeight: 'bold'
  },
  mediaF: {
    backgroundColor: '#3b5998',
  },
  mediaI: {
    backgroundColor: '#bc2a8d',
  },
  mediaY: {
    backgroundColor: '#c4302b',
  },
  mediaDisabled: {
    backgroundColor: 'grey'
  },
  mediaReceive: {
    marginTop: '.4em',
    left: '22%',
    textAlign: 'center'
  },
  mediaReceiveText: {
    backgroundColor: mainOrange,
    padding: '.1em',
    borderRadius: '.5em',
    color: 'white',
    fontSize: '.8em'
  },
  homeMedia: {
    textAlign: 'center',
  },
  homeMediaText: {
    borderBottomWidth: '.1em',
    borderColor: mainOrange
  },
  expandedMedia: {
    height: '12em',
  },
  upload: {
    paddingVertical: '.4em',
    flexDirection: 'column',
    flexGrow: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: '.6em'
  },
  uploadLink: {
  },
  uploadLinkText: {
    color: 'white',
    marginVertical: '.2em',
    fontSize: '1.2em'
  },
  uploadInput: {
    fontSize: '1.2em'
  },
  uploadButton: {
    backgroundColor: mainOrange,
    borderRadius: '1em',
    textAlign: 'center',
    marginVertical: '.5em',
    width: ScreenWidth/1.2
  },
  feed: {
    flexGrow: 'column',
    flexDirection: 'row',
    marginVertical: '.2em',
    padding: '.2em',
    maxWidth: ScreenWidth/1.3,
  },
  feedPic: {
    borderRadius: '10em',
    width: '3em',
    height: '3em'
  },
  feedText: {
    textAlign: 'center',
  },
  noData:{
    opacity: '.6',
    marginTop: '5em'
  }
});
