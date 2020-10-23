import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "a18b42df6c81cfdefa45927bbea01c61";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      console.log(url);
      const { 
        data: { 
          main: { temp }, 
          weather, 
        }
       } = await axios.get(url);
      this.setState({ 
        isLoading: false, 
        temp: temp,
        condition: weather[0].main,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Location permission was denied');
    }
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.getLocation();
  }

  render() {
    // console.log(this.state.isLoading);
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  }
}
