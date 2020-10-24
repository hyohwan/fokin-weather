import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  // Haze
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#B2FEFA', '#0ED2F7'],
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757F9A', '#D7DDE8'],
  },
  unknown: {
    iconName: 'help-circle-outline',
    gradient: ['#DE6262', '#FFB88C'],
  },
};

export default function Weather({ temp, condition }) {
  console.log(temp, condition);
  return (
    <LinearGradient colors={(weatherOptions[condition] || weatherOptions['unknown']).gradient} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={(weatherOptions[condition] || weatherOptions['unknown']).iconName} size={96} color='white' />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>123</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds']).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  temp: {
    fontSize: 24,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
