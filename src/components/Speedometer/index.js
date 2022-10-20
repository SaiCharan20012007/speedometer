// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    let accelerateBtn
    if (count < 200) {
      accelerateBtn = (
        <button type="button" className="btn1" onClick={this.onIncrement}>
          Accelerate
        </button>
      )
    } else {
      accelerateBtn = (
        <button type="button" className="btn1">
          Accelerate
        </button>
      )
    }
    let applyBreakBtn
    if (count > 0) {
      applyBreakBtn = (
        <button type="button" className="btn2" onClick={this.onDecrement}>
          Apply Brake
        </button>
      )
    } else {
      applyBreakBtn = (
        <button type="button" className="btn2">
          Apply Brake
        </button>
      )
    }
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="description">Min limit is 0mph, Max Limit is 200mph</p>

        <div className="btnContainer">
          {accelerateBtn}
          {applyBreakBtn}
        </div>
      </div>
    )
  }
}

export default Speedometer
