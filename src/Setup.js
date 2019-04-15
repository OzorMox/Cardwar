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
        <TextField
          id="players"
          label="Players"
          type="text"
          className="setup"
          margin="normal"
          variant="outlined"
          onChange={this.handlePlayerChange}>
        </TextField>
        <TextField
          id="ai"
          label="AI"
          type="text"
          className="setup"
          margin="normal"
          variant="outlined"
          onChange={this.handleAIChange}>
        </TextField>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={() => this.props.setup(this.state.players, this.state.ai)}>Start</Button>
      </div>
    )
  }
}

export default Setup