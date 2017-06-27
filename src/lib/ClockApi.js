/**
 * Created by sjlee on 2017-06-27.
 */

import React from 'react';

const promAry = [];
const countryName= ['America/Edmonton', 'America/Chicago', 'Pacific/Pitcairn', 'Asia/Hong_Kong','America/Los_Angeles','America/Chicago', 'Europe/London', '	America/New_York', 'Asia/Singapore', 'America/Toronto' ];

export default class ClockApi {
    constructor() {
    }

    loadTimedata()
    {
        for(let i=0; i<countryName.length; i++)
        {
            promAry.push(this.getApi(i,countryName));
        }

        return Promise.all(promAry);
    }

    getApi(i,countryName)
    {
        const countryData = countryName[i];
        const url = "http://api.timezonedb.com/v2/get-time-zone?key=ZCLEGZIYCH9Z&format=json&by=zone&zone="+countryData;

        let prom = fetch(url).then( response => response.json())
            .then(data => this.insertTimeToAry(data));

        return prom;
    }

    insertTimeToAry(r){
        const time= r.formatted;

        const TimeZoneObj = {
            timeZone: time
        };

        return TimeZoneObj;
    }
}
