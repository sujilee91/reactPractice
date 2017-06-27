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

    componentDidMount(){
        const weatherApi = new WeatherApi();
        let weatherData = [];
        let weatherAry = [];
        let x = 0;
        weatherApi.loaddata().then((data) => {
            //weatherData.push(data);
                weatherData = data;
            //

            //
            weatherAry = weatherData[x];
            this.setState({
                data: weatherData[x],
                ary: weatherData,
                value: x
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

        onPrevClick = () =>{
            let ary = this.state.ary;
            let y = this.state.value;
            let x = y-1;

            if(x<=0){
                x=ary.length-1;
            }


            this.setState({
                data: ary[x],
                value: x
            })
        }

        onNextClick = () => {
            let ary = this.state.ary;
            let y = this.state.value;
            let x = y+1;

            if(x>ary.length-1){
                x=0;
            }

            this.setState({
                data: ary[x],
                value: x
            })
        }

        render() {

            // setInterval(()=>{
            //     weatherAry = weatherData[x];
            //     console.log(weatherAry);
            //     x++;
            //     if(x === weatherData.length)
            //     {
            //         x=0;
            //     }
            // }, 3000);

        // const weatherAry = this.state.data.map( ( element ) => {
        //     return (<CityWeather key={element.cityName} cityWeather = {element.data}/>);
        // });


        return (
            <div>
                <button className="previous" onClick={this.onPrevClick}>&#8592;</button>
                <button className="next" onClick={this.onNextClick}>&#8594; </button>
                {/*<div className="logo"><img src={require('../style/img/CriticalMass-Logo-Web.jpg')}/></div>*/}
                <CityWeather cityWeather = {this.state.data}/>
                <div className="footerImg"><img src={require('../style/img/footer_bg.png')}/></div>
            </div>
        );
    }


}