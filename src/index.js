import React from 'react';
import ReactDOM from 'react-dom';
import './Passport.css';
import french from './french.png';
import swiss from './swiss.png';
import britain from './britain.png';


const COUNTRIES = [
    'france',
    'britain',
    'switzerland',
]

const COLORS = {
    france: 'green',
    switzerland: 'red',
    britain: 'blue',
}
const FLAGS = {
    france: <img src={french} alt=""/>,
    switzerland: <img src={swiss} alt=""/>,
    britain: <img src={britain} alt=""/>
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

class Passport extends React.Component {    
    render() {
        const { country } = this.props
        const color = COLORS[country] || 'brown'
        const flag = FLAGS[country] || null
        return (
            <div>
                <div className={`cover ${color}`}>
                    <div className="passport-title">Passport </div>
                    <div className="flag">{flag}</div>
                    <div className="country">{capitalize(country)} </div>
                </div>
                <div>
                    <div className="arrow-left"></div>
                    <div className="empty-space"></div>
                    <div className="arrow-right"></div>
                </div>    
            </div>    
        );
    }
    
}


ReactDOM.render(<Passport country='switzerland' />,document.getElementById('app'))