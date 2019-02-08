import React from 'react'

import City from './City'

class Player extends React.Component {
  render() {
    const type = this.props.players[this.props.id].ai ? "AI" : "Player"

    var cities = []
    var attackFromCities = []

    for (var i = 0; i < this.props.players[i].cities.length; i++) {
      cities.push(<City key={i} cities={this.props.players[i].cities[i]} />)
      attackFromCities.push(<option value={i}>{this.props.players[i].cities[i].name}</option>)
    }

    const attackFrom = (
      <select>
        {attackFromCities}
      </select>
    )

    const attackTo = (
      <select>

      </select>
    )

    return(
      <div>
        {type} {this.props.id} <button onClick={this.props.buildCity(this.props.id)}>Build City</button>
        <br />
        {cities}
        <br />
        Attack from {attackFrom} to {attackTo} <button>Go!</button>
        <br />
        <br />
      </div>
    )
  }
}

export default Player