/**
 * Created by sjlee on 2017-06-27.
 */
import React from 'react';
import CityWeather from './CityWeather'

export default class Carousel extends React.Component {

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
    };

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
    };

    render(){

        return(
        <div>
            <button className="previous" onClick={this.onPrevClick}>&#8592;</button>
            <button className="next" onClick={this.onNextClick}>&#8594; </button>
            {/*<div className="logo"><img src={require('../style/img/CriticalMass-Logo-Web.jpg')}/></div>*/}
            <CityWeather cityWeather = {this.state.data}/>
        </div>

        )}

}