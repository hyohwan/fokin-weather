import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  // Haze
  Clear: {
    gradient: ['#0ED2F7', '#B2FEFA'],
    iconName: 'weather-sunny',
    iconColor: 'white',
    title: `It's a sunny day!!`,
    subtitle: 'go picnic',
    textColor: '#fffbd5',
  },
  Clouds: {
    gradient: ['#757F9A', '#D7DDE8'],
    iconName: 'weather-cloudy',
    title: 'Cloudy...',
    subtitle: 'calm',
    textColor: 'white',
  },
  unknown: {
    gradient: ['#DE6262', '#FFB88C'],
    iconName: 'help-circle-outline',
    title: `I don't know`,
    subtitle: 'let me know weather today..',
    textColor: 'white',
  },
};

export default function Weather({ temp, condition }) {
  console.log(temp, condition);
  let weather = weatherOptions[condition] || weatherOptions['unknown'];
  return (
    <LinearGradient colors={weather.gradient} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weather.iconName} size={96} color={weather.iconColor} />
        <Text style={{ ...styles.temp, ...{ color: weather.iconColor } }}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={{ ...styles.title, ...{ color: weather.textColor } }}>Title</Text>
        <Text style={{ ...styles.subtitle, ...{ color: weather.textColor } }}>subtitle</Text>
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
  textContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
