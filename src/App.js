import React from 'react'
import './App.css'

import Setup from './Setup'
import Player from './Player'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSetup = this.handleSetup.bind(this)
    this.buildCity = this.buildCity.bind(this)

    this.state = {
      players: []
    }
  }

  handleSetup(players, ai) {
    var playersList = []

    for (var i = 0; i < players; i++) {
      let newPlayer = {
        id: i,
        ai: false,
        cities: []
      }
      playersList.push(newPlayer)
    }

    for (var j = 0; j < ai; j++) {
      let newAI = {
        id: j + 100,
        ai: true,
        cities: []
      }
      playersList.push(newAI)
    }

    this.setState({
      players: playersList
    })
  }

  buildCity(player) {
    let newCity = {
      id: 0,
      name: "London",
      armies: 0
    }

    console.log(player)

    let state = {
      players : {
        ...this.state.players,
        [player] : {
          ...this.state.players[player],
          cities: newCity
        }
      }
    }

    //this.setState(state)
  }

  render() {
    var players = []
    for (var i = 0; i < this.state.players.length; i++) {
      players.push(<Player key={i} id={i} players={this.state.players} buildCity={this.buildCity} />)
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