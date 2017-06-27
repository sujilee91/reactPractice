/**
 * Created by sjlee on 2017-06-19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/app.scss';

export default class CityWeather extends React.Component {

       render() {

           CityWeather.propTypes = {
               cityWeather: PropTypes.object,
           };
        const weatherData = this.props.cityWeather;

        const today = new Date();
        const year = today.getFullYear();
        const date = today.getDate();
        const month = today.getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        const dayPrint = monthNames[month] + ' ' +date +' , '+ year;
        let hour = today.getHours();
        let min = ('0'+today.getMinutes()).slice(-2);
        let amPm = "a.m.";
        if(today.getHours() > 12)
        {
            hour = hour -12
            amPm = "p.m."
        }


           const dayTime = hour + ":" + today.getMinutes() + " " + amPm;
        console.log(dayTime);

        return (
            <div>
                <div className="cityName">{weatherData.cityName}</div>

                <ul>
                    <li className="left"> <div className="dateStyle">{dayPrint}</div><div className="clock">{dayTime}</div><div className="weather">{weatherData.weather}</div> </li>
                    <li className="right">
                        <div className="item-2">
                            <table>
                                <tbody>
                                <tr><td>Temperature</td><td className="printStyle">{weatherData.tempC}<span>&#8451; / </span>{weatherData.tempF}<span>&#8457;</span></td> </tr>
                                <tr><td>Humidity</td><td className="printStyle">{weatherData.humidity}<span>&#37;</span></td> </tr>
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
