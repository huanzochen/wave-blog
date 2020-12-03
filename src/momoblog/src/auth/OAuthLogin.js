import React from 'react'
import axios from 'axios'

export default class OAuthLogin extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        password: '',
        loginErrors: ''
      }
      this.googleLogin = this.googleLogin.bind(this)
      this.yahooLogin = this.yahooLogin.bind(this)
    }

    googleLogin(event) {
        console.log('hi', this)
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&
redirect_uri=${process.env.REACT_APP_APP_URL}/oauth/google/callback&
response_type=code&
access_type=offline&
scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&
prompt=consent
    `
    }
    
    yahooLogin(event) {
        console.log('yahooLogin', this)
        window.location.href = `https://api.login.yahoo.com/oauth2/request_auth?
client_id=${process.env.REACT_APP_YAHOO_CLIENT_ID}&
redirect_uri=${process.env.REACT_APP_APP_URL}/oauth/yahoo/callback&
response_type=code&
access_type=offline&
language=zh-tw&
prompt=consent
    `
      }

    render() {
        return (
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
        ) 
    }

}