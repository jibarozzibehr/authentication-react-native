/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Navigation from './src/navigation';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  //Auth.signOut();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: '#F9FBFC'
  }
});

export default App;
