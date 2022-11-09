import React, { Component } from "react"
import { render } from "react-dom"
import Map from "./Map"

import "./styles.css"

class App extends Component {
  constructor() {
    super()
    this.state = { center: [0, 0] }
  }
  changeCenter = center => () => {
    this.setState({ center })
  }
  render() {
    return (
      <div className="MapContainer" style={{ textAlign: "center" }}>
        <div style={{ padding: "1rem 0" }}>
          <button
            className="btn"
            onClick={this.changeCenter([-122.4194, 37.7749])}
          >
            {"San Francisco"}
          </button>
          <button
            className="btn"
            onClick={this.changeCenter([151.2093, -33.8688])}
          >
            {"Sydney"}
          </button>
        </div>
        <Map center={this.state.center} />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
