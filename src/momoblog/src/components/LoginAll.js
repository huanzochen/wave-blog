import React from 'react';
import axios from 'axios';
import Login from '../auth/Login';
import SideBtnList from './SideBtnList';
import webhookURL from '../util/config/webhookURL';


export default class LoginAll extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        googleOAuth:{
          authuser:'',
          code:'',
          prompt:'',
          scope:''
        }
      };


      this.googleOAuthCheck = this.googleOAuthCheck.bind(this)
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
      this.googleOAuthExchange = this.googleOAuthExchange.bind(this);
    }

    componentDidMount() {
      if (this.props.location.search !== "" && this.props.location.pathname === '/oauth/google/callback') {
        this.googleOAuthCheck();
      }
      else if (this.props.location.search !== "" && this.props.location.pathname === '/oauth/google/callback/exchange'){
      }
    }

    googleOAuthCheck() {
      const googleOAuth = {}
      console.log('googleOAuthCheck')
      if(this.props.location.search !== ""){
        this.props.location.search.split('?')[1].split('&').map((param) => {
          googleOAuth[param.split('=')[0]] = param.split('=')[1]
        })
        this.setState({googleOAuth}, this.googleOAuthExchange)
      }
    }

    googleOAuthExchange() {
      console.log('googleOAuthExchange')
      axios.post( 'https://oauth2.googleapis.com/token', {
        client_id: webhookURL.CLIENT_ID,
        client_secret: webhookURL.CLIENT_SECRET,
        code: this.state.googleOAuth.code,
        grant_type:'authorization_code',
        redirect_uri:`${webhookURL.WEB_URL}/oauth/google/callback/exchange`
      })
      .then(response => {
        console.log('response')
        console.log(response)
      })
      .catch(error => {
          console.dir("登入失敗!");
          console.log(error)
      })
    }

    handleSuccessfulAuth(data) {
      this.props.handleLogin(data);
      this.props.history.push("/");
    }

    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div id="main" className="col-9">
              <h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1>
              <div className="inner">
                  <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
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
      );
    }
}