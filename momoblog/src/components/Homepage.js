import React from 'react';
import SideBtnList from './SideBtnList';
import Article from './Article';
import AddarticleListener from './AddarticleListener'

export default class Homepage extends React.Component {
    render() {
      console.dir("loggedInStatus");
      console.dir(this.props.loggedInStatus);

      return (
        <div className="container-fluid">
          <div className="row">
            <div id="main" className="col-9">
              <h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1>
              <div className="inner">
                <AddarticleListener
                  handleLogoutClick={this.props.handleLogoutClick}
                  loggedInStatus={this.props.loggedInStatus}
                 />
                <Article
                  loggedInStatus={this.props.loggedInStatus}
                  username={this.props.username}
                 />
              </div>
            </div>
            <div id="sidebar" className="col-3">
              <div className="inner">
                <nav id="menu">
                  <SideBtnList 
                    handleLogoutClick={this.props.handleLogoutClick}
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