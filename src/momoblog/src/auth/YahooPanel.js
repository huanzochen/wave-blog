import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginErrors: ''
    }
  }
    
  render() {
    return (
      <div className="article">
        <div className="article_title">
          <div className="row justify-content-between validate">
            <div className="col-2">
              <button className="btn btn-light"
              > nothing Login </button>
            </div>
            <div className="col-2">
              <button className="btn btn-light"
              > nothing Login </button>
            </div>
            <div className="col-7">
              <p className="error_code">{this.state.loginErrors}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
