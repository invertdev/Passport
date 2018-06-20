import React from 'react';
import './Passport.css';
import four from './mugshot4.jpg'
import two from './mugshot2.jpg'
import three from './mugshot3.jpg'
import one from './mugshot1.jpg'

const COLORS = {
  france: 'green',
  switzerland: 'red',
  britain: 'blue',
};
const MUGSHOT = {
  france: two,
  switzerland: three,
  britain: four
}





const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1);

class Middle extends React.Component {
  render() {
    const {country} = this.props;
    const {name} = this.props;
    const color = COLORS[country] || 'brown';
    const mugshot = MUGSHOT[country] || one;
    const {DoB} = this.props;
    const {id} = this.props;
    return (
      <div>
        <div className={`middle ${color}`}>
          <div className="white-paper">
            <div className="container1">
                
                <img src={mugshot} alt=''className="img"/>
            </div>
            <div className="container2">
              <div className='name'>{name}</div>
              <div>  
                <p>Date of Birth: {DoB}</p>
                <p>ID number: {id}</p>
              </div>
              <div className='bottom'>{capitalize(country)}</div>

            </div>
          </div> 
        </div>
      </div>  
    );
  }
}

export default Middle;


