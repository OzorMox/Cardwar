import React from 'react'

class City extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      armies: 0
    }
  }

  render() {
    return(
      <div>
        {this.props.cities.name}
        <br />
        Armies: {this.state.armies}
      </div>
    )
  }
}

export default City