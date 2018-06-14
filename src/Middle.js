
import React from 'react';
import './Passport.css';

const COLORS = {
    france: 'green',
    switzerland: 'red',
    britain: 'blue',
}

class Middle extends React.Component {
    render() {
        const { country } = this.props
        const color = COLORS[country] || 'brown'
        return(
            <div className={`middle ${color}`}>
                <div></div>
            </div>
        );
    }
}
export default Middle;