import * as React from 'react';
import styles from './Weather.module.scss';
import { IWeatherProps } from './IWeatherProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { getWeather } from '../requests';

interface IWeatherState{
  zipcode: string,
  weather: any,
  showResult: Boolean
}

export default class Weather extends React.Component<IWeatherProps, IWeatherState> {
  constructor(props: IWeatherProps){
    super(props);
    this.state = {
      zipcode: '',
      weather : {},
      showResult: false
    }
  }
  public showWeatherDetails = (): void =>{
    getWeather(this.state.zipcode)
    .then(response=>[
      // this.setState({city: response.data.name, description: response.data.weather[0].description, showResult:true})
      this.setState({weather: response.data, showResult:true})
    ])
  }
  public inputChangeHandler = (ev: React.FormEvent<HTMLInputElement>, newValue?: string): void => {
    const newState = {};
    newState[ev.target['name']] = ev.currentTarget.value;
    this.setState(newState);
  }
  public render(): React.ReactElement<IWeatherProps> {
    return (
      <div className={ styles.weather }>
        <div className={ styles.container }>
          {!this.state.showResult?
          <>
            <h2>Weather Application</h2>
            <input type="text" placeholder="Enter ZIP code..." value={this.state.zipcode} onChange={this.inputChangeHandler} name="zipcode"/>
            <button onClick={() => this.showWeatherDetails()}>Get Current Weather</button>
          </>
          :
          <>
            <img src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} alt=""/>
            <h3>{this.state.weather.weather[0].description}</h3>
            <h3>Hey you're from {this.state.weather.name}</h3>
          </>
          }
        </div>
      </div>
    );
  }
}
