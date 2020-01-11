import React from 'react';
import Login from '../auth/Login';
import SideBtnList from './SideBtnList';


export default class LoginAll extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
      
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