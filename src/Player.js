import React from 'react'

import City from './City'

class Player extends React.Component {
  constructor(props) {
    super(props)

    this.buildCity = this.buildCity.bind(this)

    this.state = {
      cities: []
    }
  }

  buildCity(event) {
    let newCity = {
      id: 0,
      name: "London",
      armies: 0
    }

    this.setState(prev => ({
      cities: [...prev.cities, newCity]
    }))
  }

  render() {
    const type = this.props.ai ? "AI" : "Player"

    var cities = []
    var attackFromCities = []

    for (var i = 0; i < this.state.cities.length; i++) {
      cities.push(<City key={i} cities={this.state.cities[i]} />)
      attackFromCities.push(<option value={i}>{this.state.cities[i].name}</option>)
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
        {type} {this.props.id} <button onClick={this.buildCity}>Build City</button>
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