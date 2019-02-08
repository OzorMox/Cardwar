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
    for (var i = 0; i < cities.length; i++) {
      cities.push(<City key={i} cities={this.state.cities[i]} />)
    }

    return(
      <div>
        {type} {this.props.id} <button onClick={this.buildCity}>Build City</button>
        <br />
        {cities}
        <br />
      </div>
    )
  }
}

export default Player