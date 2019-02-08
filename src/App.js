import React from 'react'
import './App.css'

import Setup from './Setup'
import Player from './Player'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSetup = this.handleSetup.bind(this)

    this.state = {
      players: 0,
      ai: 0
    }
  }

  handleSetup(players, ai) {
    this.setState({
      players: players,
      ai: ai
    })
  }

  render() {
    var players = []
    for (var i = 0; i < this.state.players; i++) {
      players.push(<Player key={i} id={i} ai={false} />)
    }

    for (var j = 0; j < this.state.ai; j++) {
      players.push(<Player key={j + 100} id={j} ai={true} />)
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