import React from 'react'
import { func, number, string } from 'prop-types'
import Front from './Front'
import Back from './Back'
import Middle from './Middle'

const propTypes = {
  name: string.isRequired,
  country: string.isRequired,
  nextPage: func.isRequired,
  prevPage: func.isRequired,
  page: number.isRequired,
  DoB: string.isRequired,
}

const Passport = ({ page, name, country, nextPage, prevPage, DoB, id }) => (
  <div>
    <div>
      <div className="arrow-left" onClick={prevPage}></div>
      <div className="empty-space"></div>
      <div className="arrow-right" onClick={nextPage}></div>
    </div>
    
    <div>
      {page === 0 && <Front name={name} country={country} />}
      {page === 1 && <Middle name={name} country={country} DoB={DoB} id={id}/>}
      {page === 2 && <Back name={name} country={country} />}
    </div>
  </div>
)

Passport.propTypes = propTypes
export default Passport
