
import React from 'react';
import { View, StyleSheet } from 'react-native';
import InterpolateScreen from './src/screens/InterpolateScreen';
import AnimatedValueXY from './src/screens/AnimatedValueXY';

export default function App() {
  return (
    <View style={styles.container}>
        <AnimatedValueXY />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
