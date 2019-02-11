import React from 'react'

import City from './City'

class Player extends React.Component {
  render() {
    //const type = this.props.player.ai ? "AI" : "Player"
    const type = "Bob"

    var cities = []
    var attackFromCities = []

    for (var i = 0; i < this.props.cities.length; i++) {
      if (this.props.cities[i].owner === this.props.id) {
        cities.push(<City key={i} id={i} city={this.props.cities[i]} buildArmy={this.props.buildArmy} />)
        attackFromCities.push(<option key={i} value={i}>{this.props.cities[i].name}</option>)
      }
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
        {type} {this.props.id} <button onClick={() => {this.props.buildCity(this.props.id)}}>Build City</button>
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