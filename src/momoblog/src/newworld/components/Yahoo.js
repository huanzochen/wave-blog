import React from 'react'
import axios from 'axios'

export default class Yahoo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
        <div className="row justify-content-between validate">
          <h2> yahoo </h2>
        </div>
        <div className="row justify-content-between validate">
          <div className="col-2">
            <button className="btn btn-light"
              onClick={this.googleLogin}
            > Google Login </button>
          </div>
          <div className="col-2">
            <button className="btn btn-light"
              onClick={this.yahooLogin}
            > Yahoo Login </button>
          </div>
          <div className="col-7">
            <p className="error_code">{this.state.loginErrors}</p>
          </div>
        </div>
      </div>
    )
  }
}