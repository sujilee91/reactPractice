/**
 * Created by sjlee on 2017-06-19.
 */
import React from 'react';
import style from '../style/app.scss';

export default class CityWeather extends React.Component {
    render() {

        const data = this.props.cityWeather;

        const today = new Date();
        const year = today.getFullYear();
        const date = today.getDate();
        const month = today.getMonth();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        const dayPrint = monthNames[month] + ' ' +date +' , '+ year;

        return (
            <div>
                <div className="cityName">{data.cityName}</div>
                <ul>
                    <li className="left"> <div className="dateStyle">{dayPrint}</div> <div className="weather">{data.weather}</div> </li>
                    <li className="right">
                        <div className="item-2">
                            <table>
                                <tbody>
                                <tr><td>Temperature</td><td className="printStyle">{data.tempC}<span>&#8451; / </span>{data.tempF}<span>&#8457;</span></td> </tr>
                                <tr><td>Humidity</td><td className="printStyle">{data.humidity}<span>&#37;</span></td> </tr>
                                <tr><td>Description</td><td className="printStyle">{data.description}</td></tr>
                                </tbody>
                            </table>
                            </div>
                        </li>
                    </ul>
            </div>

        );
    }
}