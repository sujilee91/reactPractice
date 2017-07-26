/**
 * Created by sjlee on 2017-06-20.
 */
import React from 'react';
import moment from 'moment-timezone';
import timeZone from '../lib/timeZone.json';

const promAry = [];
const officeId= [5913490, 4887398, 5391811, 1819729,5368361,4123271, 2643743, 5128581, 1880252, 6167865 ];

export default class WeatherApi {
    constructor() {
    }

    loaddata()
    {
        for(let i=0; i<officeId.length; i++)
        {
            promAry.push(this.getApi(i,officeId));
        }

        return Promise.all(promAry);
    }

    getApi(i,officeId)
    {
        let date = new Date();
        let a =moment.tz(date,timeZone[i].zone) ;

        const citiData = officeId[i];
        const url = "http://api.openweathermap.org/data/2.5/weather?id="+citiData+"&APPID=45606c0d045edba553406deecb875a24";

        let prom = fetch(url).then( response => response.json())
                            .then(data => this.insertDataToAry(data,a,i));

        return prom;
    }

    insertDataToAry(r,a,i){

        const background = timeZone[i].img;

        const { humidity: hum, temp: tempK} = r.main;
        const { description: desc, main: weather} = r.weather[0];
        const cityCap = r.name.toUpperCase();
        const tempC = (tempK-273.15).toFixed(2);
        const tempF =  ((9/5)*(tempK - 273) + 32).toFixed(2);
        // dataAry.push([cityCap, weather, tempC, tempF, hum, desc]);
        const weatherObj = {
            cityName: cityCap,
            dataIndex: i,
            timeData: a,
            BackImg: background,
            weather: weather,
            tempC: tempC,
            tempF: tempF,
            humidity: hum,
            description: desc,
        };
        return weatherObj;
    }

}

// function setData2() {
//     let x=0;
//     setInterval(function(){
//
//         if(x<dataAry.length){
//             const obj = dataAry[x];
//
//             document.getElementById('printHere').innerHTML= '<div class="cityName">'+obj[0]+'</div> ' +
//                 '<div class="weatherWrapper"> ' +
//                 '<ul> ' +
//                 '<li class="left item-1"> <div class="date">'+dayPrint+'</div> <div class="weather">'+obj[1]+'</div> </li> ' +
//                 '<li><span class="line"></span><span class="line2"></span></li> ' +
//                 '<li class="right"> ' +
//                 '<div class="item-2"> ' +
//                 '<table> ' +
//                 '<tr> <td>Temperature</td> <td class="print">'+obj[2]+' <span>&#8451;</span> / ' + obj[3] + '<span>&#8457;</span>'+'</td> </tr> ' +
//                 '<tr> <td>Humidity</td> <td class="print">'+obj[4]+' <span>&#37;</span>'+'</td> </tr> ' +
//                 '<tr> <td>Description</td> <td class="print">'+obj[5]+'</td> </tr> ' +
//                 '</table> ' +
//                 '</div> ' +
//                 '</li> ' +
//                 '</ul> ' +
//                 '</div>';
//
//             return obj;
//         }
//         else return;
//
//         x++;
//         if(x === dataAry.length)
//         {
//             x=0;
//         }
//     },5000)
// }