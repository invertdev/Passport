import React from 'react';
import './Passport.css';

const COLORS = {
    france: 'green',
    switzerland: 'red',
    britain: 'blue',
}

class Back extends React.Component {
    render() {
        const { country } = this.props
        const color = COLORS[country] || 'brown'
        return (
            <div className={`back ${color}`}>
            
            
            </div>
        )
    }
}

export default Back;
