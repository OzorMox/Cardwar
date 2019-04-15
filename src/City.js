import React from 'react'
import Button from '@material-ui/core/Button'

class City extends React.Component {
  render() {
    const buildArmy = <Button variant="contained" color="primary" onClick={() => {this.props.buildArmy(this.props.id)}} disabled={!this.props.activeTurn}>Build Army</Button>

    return(
      <div className="city">
        <h3>{this.props.city.name}</h3>
        Armies: {this.props.city.armies} {!this.props.player.ai ? buildArmy : null}
        <br />
      </div>
    )
  }
}

export default City