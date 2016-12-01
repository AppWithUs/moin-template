/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
  Navigator,
} from 'react-native';

import SetNameView from './js/views/SetNameView';
import ChatView from './js/views/ChatView';

const routes = [
  {id: 'SetNameView'},
  {id: 'ChatView'},
];

export default class Moin extends Component {

  renderScene = (route, navigator) => {
    if (route.id === 'SetNameView') {
      return <SetNameView navigator={navigator} {...route.viewProps} />
    } else if (route.id === 'ChatView') {
      return <ChatView navigator={navigator} {...route.viewProps} />
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={routes[0]}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 25 : 0,
    backgroundColor: '#f7f7f7',
  },
});

AppRegistry.registerComponent('Moin', () => Moin);
