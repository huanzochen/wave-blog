import React from 'react';
import SideBtnList from './SideBtnList';
import Article from './Article';
import axios from 'axios';

export default class Homepage extends React.Component {
    constructor(props) {
      super(props);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
      axios.get("http://momoweb.hopto.me:3200/api/logout/submit", { withCredentials: true})
       .then((response) => {
          this.props.handleLogout();
       })
       .catch(error => {
         console.log("logout error", error);
       })
    }

    render() {
      console.dir("loggedInStatus");
      console.dir(this.props.loggedInStatus);

      return (
        <div className="container-fluid">
          <div className="row">
            <div id="main" className="col-9">
              <h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1>
              <div className="inner">
                <Article />
              </div>
            </div>
            <div id="sidebar" className="col-3">
              <div className="inner">
                <nav id="menu">
                  <SideBtnList 
                    handleLogoutClick={this.handleLogoutClick}
                    loggedInStatus={this.props.loggedInStatus}
                   />
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }