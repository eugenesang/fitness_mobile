import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <FitnessContext>
      <StatusBar style="auto" backgroundColor='#000' />
        <StackNavigator/>
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
