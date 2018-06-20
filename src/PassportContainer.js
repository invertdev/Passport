import React from 'react'
import Passport from './Passport'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextPage as nextPageAction, prevPage as prevPageAction } from './reducers/page'

const PassportContainer = ({ page, nextPage, prevPage, country, name, DoB, id }) => (
  <Passport 
    {...{
      ...this.props,
      nextPage,
      prevPage,
      page,
      country,
      name,
      DoB,
      id,

    }} 
  />    
)

const mapDispatchToProps = dispatch => bindActionCreators({
  nextPage: nextPageAction,
  prevPage: prevPageAction,
}, dispatch)
export default connect(
  state => state,
  mapDispatchToProps,
)(PassportContainer)

