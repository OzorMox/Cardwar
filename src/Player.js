import React from 'react'

import City from './City'

class Player extends React.Component {
  activeTurn() {
    return (this.props.id === this.props.turn)
  }

  render() {
    const type = this.props.player.ai ? "AI" : "Player"

    var cities = []
    var attackFromCities = []
    var attackToCities = []

    for (var i = 0; i < this.props.cities.length; i++) {
      if (this.props.cities[i].owner === this.props.id) {
        cities.push(<City key={i}
                          id={i}
                          city={this.props.cities[i]}
                          buildArmy={this.props.buildArmy}
                          activeTurn={this.activeTurn()} />)
        attackFromCities.push(<option key={i} value={i}>{this.props.cities[i].name}</option>)
      }

      if (this.props.cities[i].owner !== this.props.id) {
        attackToCities.push(<option key={i} value={i}>{this.props.cities[i].name}</option>)
      }
    }

    const attackFrom = (
      <select>
        {attackFromCities}
      </select>
    )

    const attackTo = (
      <select>
        {attackToCities}
      </select>
    )

    return(
      <div>
        {type} {this.props.id} <button onClick={() => {this.props.buildCity(this.props.id)}} disabled={!this.activeTurn()}>Build City</button>
        <br />
        {cities}
        <br />
        Attack from {attackFrom} to {attackTo} <button disabled={!this.activeTurn()}>Go!</button>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default Player