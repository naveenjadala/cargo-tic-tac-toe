/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/screens/Home/Home';
import SafeAreaViewWrapper from './src/helper/SafeAreaViewWrapper';

/**
 * Function that renders the Home component within the App.
 *
 * @return {JSX.Element} The Home component
 */
const App = () => {
  return (
    <SafeAreaViewWrapper>
      <Home />
    </SafeAreaViewWrapper>
  );
};

export default App;
