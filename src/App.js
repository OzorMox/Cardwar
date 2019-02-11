import React from 'react'
import './App.css'

import Setup from './Setup'
import Player from './Player'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSetup = this.handleSetup.bind(this)
    this.buildCity = this.buildCity.bind(this)
    this.buildArmy = this.buildArmy.bind(this)

    this.state = {
      players: [],
      cities: []
    }
  }

  handleSetup(players, ai) {
    var playersList = []

    for (var i = 0; i < players; i++) {
      let newPlayer = {
        id: i,
        ai: false
      }
      playersList.push(newPlayer)
    }

    for (var j = 0; j < ai; j++) {
      let newAI = {
        id: j + 100,
        ai: true
      }
      playersList.push(newAI)
    }

    this.setState({
      players: playersList
    })
  }

  buildCity(player) {
    let city = {
      id: this.state.cities.length,
      owner: player,
      name: "London",
      armies: 0
    }

    this.setState(prev => ({
      cities: [...prev.cities, city]
    }))
  }

  buildArmy(city) {
    let cities = [...this.state.cities]
    cities[city].armies++
    this.setState({cities})
  }

  render() {
    var players = []
    for (var i = 0; i < this.state.players.length; i++) {
      players.push(<Player key={i} id={i} player={this.state.players[i]} cities={this.state.cities} buildCity={this.buildCity} buildArmy={this.buildArmy} />)
    }

    return (
      <div>
        <Setup handleSetup={this.handleSetup} />
        <br />
        <br />
        {players}
      </div>
    )
  }
}

export default App