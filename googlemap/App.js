import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 10.7689508,
          longitude: 106.6686852,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} >
        <Marker
          coordinate={{ latitude: 10.7689508, longitude: 106.6686852 }}
          title={"Marker Title"}
          description={"Marker Description Text"}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
