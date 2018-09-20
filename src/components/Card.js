import React from 'react'
import PropTypes from 'prop-types'
import '../styles.css';
import Square from './Square';
class Card extends React.Component {
  render () {
    return(
      <div className="card">
        <Square />
      </div>
    )
  }
}

export default Card;
