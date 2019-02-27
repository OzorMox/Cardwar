import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
        Players <TextField id="players" type="text" className="setup" onChange={this.handlePlayerChange}></TextField>
        <br />
        AI <TextField id="ai" type="text" className="setup" onChange={this.handleAIChange}></TextField>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={() => this.props.setup(this.state.players, this.state.ai)}>Start</Button>
      </div>
    )
  }
}

export default Setup