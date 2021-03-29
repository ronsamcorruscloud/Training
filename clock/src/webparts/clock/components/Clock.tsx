import * as React from 'react';
import styles from './Clock.module.scss';
import { IClockProps } from './IClockProps';
import { escape } from '@microsoft/sp-lodash-subset';


interface IClockState {
  hours: Number,
  minutes: Number,
  seconds: Number
}

export default class Clock extends React.Component<IClockProps, IClockState> {
  constructor(props){
    super(props)
    this.state={
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  public componentDidMount(): void{
    setInterval(
      this.getCurrentTime,
      1000
    );
  }
  public getCurrentTime = ():void =>{
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    this.setState({
      hours: hour,
      minutes: minute,
      seconds: second
    })
  }
  public displayTime(): React.ReactElement<{}>{
    return(
      <div>
        <h1>{this.state.hours}</h1>
        <h1>{this.state.minutes}</h1>
        <h1>{this.state.seconds}</h1>
      </div>
    )
  }
  public render(): React.ReactElement<IClockProps> {
    return (
      <div className={ styles.clock }>
        <div className={ styles.container}>
          {this.displayTime()}
        </div>
      </div>
    );
  }
}
