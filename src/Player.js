import React from 'react'

import City from './City'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: 0,
      to: 0
    }

    this.attackFromChange = this.attackFromChange.bind(this)
    this.attackToChange = this.attackToChange.bind(this)
  }

  activeTurn() {
    return (this.props.id === this.props.turn)
  }

  attackFromChange(event) {
    this.setState({from: event.target.value})
  }

  attackToChange(event) {
    this.setState({to: event.target.value})
  }

  componentDidUpdate() {
    //When a render triggers, update the initial values of attack from/to if they have changed
    for (var i = 0; i < this.props.cities.length; i++) {
      if (this.props.cities[i].owner === this.props.id) {
        if (i !== this.state.from) {
          this.setState({from: i})
        }
        break
      }
    }

    for (var j = 0; j < this.props.cities.length; j++) {
      if (this.props.cities[j].owner !== this.props.id) {
        if (j !== this.state.to) {
          this.setState({to: j})
        }
        break
      }
    }
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
      <select onChange={this.attackFromChange}>
        {attackFromCities}
      </select>
    )

    const attackTo = (
      <select onChange={this.attackToChange}>
        {attackToCities}
      </select>
    )

    return(
      <div>
        {type} {this.props.id} <button onClick={() => {this.props.buildCity(this.props.id)}} disabled={!this.activeTurn()}>Build City</button>
        <br />
        {cities}
        <br />
        Attack from {attackFrom} to {attackTo} <button onClick={() => {this.props.attack(this.state.from, this.state.to)}} disabled={!this.activeTurn()}>Go!</button>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default Player