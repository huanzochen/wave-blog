import React from 'react';
import Registration from '../auth/Registration';
import SideBtnList from './SideBtnList';



export default class RegisterAll extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div id="main" className="col-9">
              <h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1>
              <div className="inner">
                  <Registration />
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