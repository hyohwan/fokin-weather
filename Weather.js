import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp, condition }) {
  console.log('');
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['rgba(255,60,0,0.8)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
      />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>123</Text>
      </View>
    </View>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm', 
    'Drizzle', 
    'Rain', 
    'Snow', 
    'Atmosphere', 
    'Clear', 
    'Clouds'
  ]).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  temp: {
    fontSize: 24,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});