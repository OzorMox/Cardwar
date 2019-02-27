import React from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import City from './City'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: -1,
      to: -1
    }

    this.attackFromChange = this.attackFromChange.bind(this)
    this.attackToChange = this.attackToChange.bind(this)
  }

  activeTurn() {
    return (this.props.id === this.props.turn)
  }

  attackFromChange(event) {
    this.setState({from: parseInt(event.target.value)})
  }

  attackToChange(event) {
    this.setState({to: parseInt(event.target.value)})
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
                          player={this.props.player}
                          city={this.props.cities[i]}
                          buildArmy={this.props.buildArmy}
                          activeTurn={this.activeTurn()} />)
        attackFromCities.push(<MenuItem key={i} value={i}>{this.props.cities[i].name}</MenuItem>)
      }

      if (this.props.cities[i].owner !== this.props.id) {
        attackToCities.push(<MenuItem key={i} value={i}>{this.props.cities[i].name}</MenuItem>)
      }
    }

    const attackFrom = (
      <Select value={this.state.from} onChange={this.attackFromChange}>
        <MenuItem value="-1">--</MenuItem>
        {attackFromCities}
      </Select>
    )

    const attackTo = (
      <Select value={this.state.to} onChange={this.attackToChange}>
        <MenuItem value="-1">--</MenuItem>
        {attackToCities}
      </Select>
    )

    const buildCity = <Button variant="contained" color="primary" onClick={() => {this.props.buildCity(this.props.id)}} disabled={!this.activeTurn()}>Build City</Button>

    const attack = <div>Attack from {attackFrom} to {attackTo} <Button variant="contained" color="primary" onClick={() => {this.props.attack(this.state.from, this.state.to)}} disabled={!this.activeTurn()}>Go!</Button></div>

    return(
      <div>
        {type} {this.props.id} {!this.props.player.ai ? buildCity : null}
        <br />
        {cities}
        <br />
        {!this.props.player.ai ? attack : null}
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default Player