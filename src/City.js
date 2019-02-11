import React from 'react'

class City extends React.Component {
  render() {
    return(
      <div>
        <br />
        {this.props.city.name}
        <br />
        Armies: {this.props.city.armies} <button onClick={() => {this.props.buildArmy(this.props.id)}} disabled={!this.props.activeTurn}>Build Army</button>
        <br />
      </div>
    )
  }
}

export default City