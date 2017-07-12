/**
 * Created by sjlee on 2017-06-19.
 */
import React from 'react';
import CityWeather from './CityWeather';
import Carousel from './Carousel';
import WeatherApi from '../lib/WeatherApi';
import style from '../style/app.scss';


export default class WeatherApp extends React.Component {

    constructor(){
        super();
        this.state = {
          data: [],
        };
        //this.onNextClick = this.onNextClick.bind(this);
        //this.onPrevClick = this.onPrevClick.bind(this);
    }

    componentDidMount() {
        const weatherApi = new WeatherApi();
        let weatherData = [];


        weatherApi.loaddata().then((data) => {

            weatherData = data;

            this.setState({
                data: weatherData,
            });

            // setInterval(()=>{
            //     weatherAry = weatherData[x];
            //     this.setState({
            //         data: weatherAry,
            //         value: x
            //     });
            //     x++;
            //     if(x === weatherData.length)
            //     {
            //         x=0;
            //     }
            // }, 3000);

        })

    }

        render(){

            // setInterval(()=>{
            //     weatherAry = weatherData[x];
            //     console.log(weatherAry);
            //     x++;
            //     if(x === weatherData.length)
            //     {
            //         x=0;
            //     }
            // }, 3000);
        // let i =0;
        // const weatherAry = this.state.data.map( ( element,i ) => {
        //
        //         if(i<this.state.data.length){
        //             return (<CityWeather key={element.cityName} cityWeather = {this.state.data[i]}/>);
        //             i++;
        //         }
        //
        // });


        return (
            <div>
                {/*<button className="previous" onClick={this.onPrevClick}>&#8592;</button>*/}
                {/*<button className="next" onClick={this.onNextClick}>&#8594; </button>*/}
                {/*<div className="logo"><img src={require('../style/img/CriticalMass-Logo-Web.jpg')}/></div>*/}
                <Carousel>
                    {this.state.data.map((item,index) => {
                        return (<CityWeather key={item.cityName} cityWeather = {this.state.data[index]}/>)
                    }
                        )}
                </Carousel>

                {/*<CityWeather cityTime={this.state.time}/>*/}
                <div className="footerImg"><img src={require('../style/img/footer_bg.png')}/></div>
            </div>
        );
    }


}