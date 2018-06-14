import React from 'react';
import Front from './Front';
import Back from './Back';
import Middle from './Middle';

class Passport extends React.Component {
    render() {
        return( 
            <div>
                <Front/>
                <div className='gap'/>
                <Middle/>
                <div className='gap'/>
                <Back/>
            </div>
        )
    }
}

export default Passport;