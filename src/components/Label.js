import React from 'react'
import PropTypes from 'prop-types'
import '../styles.css';

class Label extends React.Component {
  render () {
    var label = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: "13px",
      margin: 0,
      color: "black"
    }
    return(
      <div style={label}>
        <p>{this.props.color}</p>
      </div>
    )
  }
}

export default Label;
