import React from 'react'
import './App.css'

import Setup from './Setup'
import Player from './Player'
import AI from './AI'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.setup = this.setup.bind(this)
    this.buildCity = this.buildCity.bind(this)
    this.buildArmy = this.buildArmy.bind(this)
    this.attack = this.attack.bind(this)

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
        ai: true,
        personality: Math.floor((Math.random() * 3) + 1)
      }
      playersList.push(newAI)
    }

    this.setState({
      players: playersList
    })
  }

  buildCity(player) {
    let city = {
      owner: player,
      name: "London " + Math.floor((Math.random() * 100) + 1),
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

  attack(from, to) {
    let cities = [...this.state.cities]

    if (from === -1 || to === -1) {
      console.log("From or to city not specified")
      return
    }

    if (cities[from].armies === 0) {
      console.log("No armies in city " + from + " to attack with")
      return
    }

    if (Math.round(Math.random()) === 0) {
      cities[from].armies--
    } else {
      if (cities[to].armies === 0) {
        //Destroy city if empty
        cities.splice(to, 1)
      } else {
        cities[to].armies--
      }
    }

    this.setState({cities})
  }

  advanceTurn() {
    let turn = this.state.turn + 1
    if (turn >= this.state.players.length) {
      turn = 0
    }

    this.setState({turn}, function() {
      if (this.state.players[turn].ai)
      {
        var ai = new AI()
        ai.playAITurn(this.state.players[turn], this.state.cities, this.buildCity, this.buildArmy, this.attack)
      }
    })
  }

  render() {
    var players = []
    for (var i = 0; i < this.state.players.length; i++) {
      players.push(<Player key={i}
                           id={this.state.players[i].id}
                           player={this.state.players[i]}
                           cities={this.state.cities}
                           turn={this.state.turn}
                           buildCity={this.buildCity}
                           buildArmy={this.buildArmy}
                           attack={this.attack} />)
    }

    return (
      <div className="main">
        <h1>Cardwar</h1>
        <Setup setup={this.setup} />
        <br />
        {players}
      </div>
    )
  }
}

export default App