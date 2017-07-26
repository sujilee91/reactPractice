/**
 * Created by sjlee on 2017-06-27.
 */
import React from 'react';
import moment from 'moment-timezone';
import timeZone from '../lib/timeZone.json';


export default class Carousel extends React.Component {

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.children.length === 0 && nextProps.children.length !== 0){
            let x=0;

            this.setState({
                data: nextProps.children[x],
                ary: nextProps.children,
                value: x
            })
        }
    }

    onButtonClick = (x)=>{
        const childrenCount = React.Children.count(this.props.children);
        let y = this.state.value;
        let z = x+y;

        if(z<0){
            z = childrenCount -1;
        }

        if(z>= childrenCount){
            z = 0;
        }

        this.setState({
            data: this.props.children[z],
            value: z
        });
    };


    render(){
        return(
        <div>
            <a className="previous" onClick={()=>{this.onButtonClick(-1);}}>&#8592;</a>
            <a className="next" onClick={()=>{this.onButtonClick(1);}}>&#8594;</a>
            {/*/!*<div className="logo"><img src={require('../style/img/CriticalMass-Logo-Web.jpg')}/></div>*!/*/}
            {/*<CityWeather cityWeather = {this.state.data}/>*/}
                <div>
                    {this.state.data}
                </div>

            {/*<div className="pager">*/}
                {/*{this.props.children.map((item,index) => {*/}
                    {/*return <button onClick={this.setActiveItem.bind(this,index)}>{index}</button>*/}
                {/*}, this)}*/}
            {/*</div>*/}
        </div>

        )}

}