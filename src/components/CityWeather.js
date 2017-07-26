/**
 * Created by sjlee on 2017-06-19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/app.scss';
import moment from 'moment-timezone';
import timeZone from '../lib/timeZone.json';


export default class CityWeather extends React.Component {

        constructor(props){
            super(props);

            let x = this.props.cityWeather.dataIndex;
            this.state = {
                time: "",
                date:"",
                backgroundStyle: {
                    backgroundImage: `url('${this.props.cityWeather.BackImg}')`
                }
            };
        }
        //
        // getDateTime(r){
        //     let date = new Date();
        //     let a =moment.tz(date,timeZone[r].zone) ;
        //
        //     return a;
        // }
        //
        // printDateTime(weatherData){
        //     let r = weatherData.dataIndex;
        //     let test = this.getDateTime(r)._d;
        //
        //     let stringify = test.toString();
        //     let timeString = stringify.substring(16,25);
        //     let dateString = stringify.substring(0,15);
        //
        // }
        //


        componentWillUnmount(){
            clearInterval(this.timer);
        }

        componentWillMount(){
            let x = this.props.cityWeather.dataIndex;
            let date = new Date();
            let a =moment.tz(date,timeZone[x].zone);
            let timeString = a.format().substring(11,19);
            this.setState({
                time: timeString,
                backgroundStyle: {
                    img: `url('${this.props.cityWeather.BackImg}')`
                }
            })
        }

        componentDidMount(){
            let x = this.props.cityWeather.dataIndex;

            let dateString = this.props.cityWeather.timeData.format().substring(0,10);

            this.setState({
                date: dateString,
                backgroundStyle: {
                    img: `url('${this.props.cityWeather.BackImg}')`
                }
            });

            this.timer = setInterval(()=>{
                let date = new Date();
                let a =moment.tz(date,timeZone[x].zone);

                let timeString = a.format().substring(11,19);
                this.setState({
                    time:  timeString
                });

            }, 1000);
        }




       render() {

           // CityWeather.propTypes = {
           //     cityWeather: PropTypes.array
           // };
           // const timer = new timeZone();
           // console.log(timer);
           const weatherData = this.props.cityWeather;

           // let r = weatherData.dataIndex;
           // let test = "";
           // let timeString = "";
           //  let stringify = "";
           // setInterval(()=>{
           //     test = this.getDateTime(r)._d;
           //     stringify = test.toString();
           //
           //     timeString = stringify.substring(16,25);
           // },1000);
           //
           // let dateString = stringify.substring(0,15);
           //
           return (
            <div style={this.state.backgroundStyle}>
                <div className="cityName">{weatherData.cityName}</div>
                <ul>
                    <li className="left"> <div className="dateStyle">{this.state.date}</div><div className="clock">{this.state.time}</div><div className="weather">{weatherData.weather}</div></li>
                    <li className="right">
                        <div className="item-2">
                            <table>
                                <tbody>
                                <tr><td>Temperature</td><td className="printStyle">{weatherData.tempC}<span> &#8451;</span></td></tr>
                                <tr><td>Humidity</td><td className="printStyle">{weatherData.humidity}<span>&#37;</span></td></tr>
                                <tr><td>Description</td><td className="printStyle">{weatherData.description}</td></tr>
                                </tbody>
                            </table>
                            </div>
                        </li>
                    </ul>
            </div>

        );
    }
}


//const today = new Date();
// const year = today.getFullYear();
// const date = today.getDate();
// const month = today.getMonth();
// const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
//
// const dayPrint = monthNames[month] + ' ' +date +' , '+ year;
// let hour = today.getHours();
// let min = ('0'+today.getMinutes()).slice(-2);
// let amPm = "a.m.";
// if(today.getHours() > 12)
// {
//     hour = hour -12
//     amPm = "p.m."
// }
//
//    const dayTime = hour + ":" + today.getMinutes() + " " + amPm;
// console.log(dayTime);