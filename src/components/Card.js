import React from 'react'
import PropTypes from 'prop-types'
import '../styles.css';
import Square from './Square';
import Label from './Label';

class Card extends React.Component {
  render () {
    var card = {
      height: "200px",
      width: "150px",
      padding: 0,
      backgroundColor: "white",
      filter: "drop-shadow(0px 0px 5px #666)"
    }
    return(
      <div style={card}>
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
      </div>
    )
  }
}

export default Card;
