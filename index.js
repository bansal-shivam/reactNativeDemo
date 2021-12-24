/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/screens/navigationStarter';
import App from './src/routes/HomeStack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
