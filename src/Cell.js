import React, {Component} from 'react'

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  changeColor = () => {
    let newColor = '#333'
    this.setState ({
      color: newColor,
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
        {this.state.color}
      </div>
    )
  }
}

export default Cell