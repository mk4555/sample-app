import React from 'react'
import PropTypes from 'prop-types'
import '../styles.css';

class Square extends React.Component {
  render () {
    var square = {
      height: "150px",
      backgroundColor: this.props.color
    }
    return(
      <div style={square}>

      </div>
    )
  }
}

export default Square;
