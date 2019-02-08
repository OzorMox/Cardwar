import React from 'react'

class Setup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: 0,
      ai: 0
    }

    this.handlePlayerChange = this.handlePlayerChange.bind(this)
    this.handleAIChange = this.handleAIChange.bind(this)
  }

  handlePlayerChange(event) {
    this.setState({players: event.target.value})
  }

  handleAIChange(event) {
    this.setState({ai: event.target.value})
  }

  render() {
    return(
      <div>
        Players <input id="players" type="text" className="setup" onChange={this.handlePlayerChange}></input>
        <br />
        AI <input id="ai" type="text" className="setup" onChange={this.handleAIChange}></input>
        <br />
        <br />
        <button onClick={() => this.props.handleSetup(this.state.players, this.state.ai)}>Start</button>
      </div>
    )
  }
}

export default Setup