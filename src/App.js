import React from 'react'
import './App.css'

import Setup from './Setup'
import Player from './Player'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.setup = this.setup.bind(this)
    this.buildCity = this.buildCity.bind(this)
    this.buildArmy = this.buildArmy.bind(this)

    this.state = {
      players: [],
      cities: [],
      turn: 0
    }
  }

  setup(players, ai) {
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
      players: [],
      cities: []
    })

    this.setState({
      players: playersList
    })
  }

  buildCity(player) {
    let id = this.state.cities.length

    let city = {
      id: id,
      owner: player,
      name: "London " + id,
      armies: 0
    }

    this.setState(prev => ({
      cities: [...prev.cities, city]
    }))

    this.advanceTurn()
  }

  buildArmy(city) {
    let cities = [...this.state.cities]
    cities[city].armies++
    this.setState({cities})

    this.advanceTurn()
  }

  advanceTurn() {
    let turn = this.state.turn
    turn++
    if (turn >= this.state.players.length) {
      turn = 0
    }
    this.setState({turn})
  }

  render() {
    var players = []
    for (var i = 0; i < this.state.players.length; i++) {
      players.push(<Player key={i}
                           id={i}
                           player={this.state.players[i]}
                           cities={this.state.cities}
                           turn={this.state.turn}
                           buildCity={this.buildCity}
                           buildArmy={this.buildArmy} />)
    }

    return (
      <div>
        <Setup setup={this.setup} />
        <br />
        <hr />
        {players}
      </div>
    )
  }
}

export default App