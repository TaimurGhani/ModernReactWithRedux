import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={cityData.city.coord.lon} lat={cityData.city.coord.lat} /></td>
        <td><Chart height={120} width={180} data={temps} color="red" units="K" /></td>
        <td><Chart height={120} width={180} data={pressures} color="green" units="hPa" /></td>
        <td><Chart height={120} width={180} data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default connect(mapStateToProps)(WeatherList);
