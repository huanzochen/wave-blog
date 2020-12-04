import React from 'react'
import axios from 'axios'
import qs from 'querystring'

import Login from '../auth/Login'
import SideBtnList from './SideBtnList'
import YahooPanel from '../auth/YahooPanel'



export default class LoginAll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      googleOAuth:{
        authuser:'',
        code:'',
        prompt:'',
        scope:''
      },
      yahooOAuth:{
        code:''
      },
      yahooOAuthCredentials:{
        access_token:'',
        refresh_token:'',
        token_type:'',
        expires_in:'',
      }
    }
    this.googleOAuthCheck = this.googleOAuthCheck.bind(this)
    this.googleOAuthExchange = this.googleOAuthExchange.bind(this)
    this.yahooOAuthCheck = this.yahooOAuthCheck.bind(this)
    this.yahooOAuthExchange = this.yahooOAuthExchange.bind(this)
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
  }

  componentDidMount() {
    if (this.props.location.search !== '' && this.props.location.pathname === '/oauth/google/callback') {
      this.googleOAuthCheck()
    }
    else if (this.props.location.search !== '' && this.props.location.pathname === '/oauth/yahoo/callback') {
      this.yahooOAuthCheck()
    }
  }

  googleOAuthCheck() {
    const googleOAuth = {}
    this.props.location.search.split('?')[1].split('&').map((param) => {
      googleOAuth[param.split('=')[0]] = decodeURIComponent(param.split('=')[1])
    })
    this.setState({googleOAuth}, this.googleOAuthExchange)
  }

  yahooOAuthCheck() {
    const yahooOAuth = {}
    this.props.location.search.split('?')[1].split('&').map((param) => {
      yahooOAuth[param.split('=')[0]] = decodeURIComponent(param.split('=')[1])
    })
    this.setState({yahooOAuth}, this.yahooOAuthExchange)
  }

  googleOAuthExchange() {
    const requestBody = {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.REACT_APP_APP_URL}/oauth/google/callback`,
      code: this.state.googleOAuth.code,
      grant_type: 'authorization_code'
    }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.post('https://oauth2.googleapis.com/token', qs.stringify(requestBody), config)
      .then(response => {
        console.log('response')
        console.log(response)
      })
      .catch(error => {
        console.dir('googleOAuthExchange 出現錯誤!')
        console.log(error)
      })
  }

  yahooOAuthExchange() {
    const requestBody = {
      client_id: process.env.REACT_APP_YAHOO_CLIENT_ID,
      client_secret: process.env.REACT_APP_YAHOO_CLIENT_SECRET,
      redirect_uri: `${process.env.REACT_APP_APP_URL}/oauth/yahoo/callback`,
      code: this.state.yahooOAuth.code,
      grant_type: 'authorization_code'
    }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.post('https://api.login.yahoo.com/oauth2/get_token', qs.stringify(requestBody), config)
      .then(response => {
        let yahooOAuthCredentials = {}
        Promise.all(
          Object.keys(response.data).map((key) => {
            yahooOAuthCredentials = {
              ...yahooOAuthCredentials,
              [key]: response.data[key]
            }
          })
        )
        this.setState({yahooOAuthCredentials})
      })

    /*** try with fcetch but failed */
    // const formBody = Object.keys(requestBody).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(requestBody[key])).join('&');
    // console.log('formBody')
    // console.log(formBody)
    // fetch('https://api.login.yahoo.com/oauth2/get_token', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   body: formBody,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }).then(response => {
    //   // console.log('fetch have response')
    //   // console.log(response)
    //   // // let yahooOAuthCredentials = {}
    //   // // Promise.all(
    //   // //   Object.keys(response.data).map((key) => {
    //   // //     yahooOAuthCredentials = {
    //   // //       ...yahooOAuthCredentials,
    //   // //       [key]: response.data[key]
    //   // //     }
    //   // //   })
    //   // // )
    //   // // this.setState({yahooOAuthCredentials})
    //   return response
    // }).then(function(response){
    //   console.log('response')
    //   console.log(response);
    // }).catch(function(e){
    //   console.log(e);
    // });
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data)
    this.props.history.push('/')
  }

  render() {
    let LoginPanel
    if (this.state.yahooOAuth.code !== '') {
      LoginPanel = <YahooPanel 
                    handleSuccessfulAuth={this.handleSuccessfulAuth} 
                    yahooOAuthCredentials={this.state.yahooOAuthCredentials}
                    />
    }
    else {
      LoginPanel = <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="main" className="col-9">
            <h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1>
            <div className="inner">
              {LoginPanel}
            </div>
          </div>
          <div id="sidebar" className="col-3">
            <div className="inner">
              <nav id="menu">
                <SideBtnList />
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}