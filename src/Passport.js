import React from 'react'
import Front from './Front'
import Back from './Back'
import Middle from './Middle'

const Passport = ({ name, country }) => (
  <div>
    <Front name={name} country={country} />
    <div className='gap'/>
    <Middle name={name} country={country} />
    <div className='gap'/>
    <Back/>
  </div>
)

export default Passport
