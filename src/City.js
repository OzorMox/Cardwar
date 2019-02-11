import React from 'react'

class City extends React.Component {
  constructor(props) {
    super(props)

    this.buildArmy = this.buildArmy.bind(this)

    this.state = {
      armies: 0
    }
  }

  buildArmy(event) {
    this.setState({armies: this.state.armies + 1})
  }

  render() {
    return(
      <div>
        <br />
        {this.props.city.name}
        <br />
        Armies: {this.state.armies} <button onClick={this.buildArmy}>Build Army</button>
        <br />
      </div>
    )
  }
}

export default City