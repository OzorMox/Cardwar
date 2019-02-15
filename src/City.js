import React from 'react'

class City extends React.Component {
  render() {
    const buildArmy = <button onClick={() => {this.props.buildArmy(this.props.id)}} disabled={!this.props.activeTurn}>Build Army</button>

    return(
      <div>
        <br />
        {this.props.city.name}
        <br />
        Armies: {this.props.city.armies} {!this.props.player.ai ? buildArmy : null}
        <br />
      </div>
    )
  }
}

export default City