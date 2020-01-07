import React from 'react';
import ReactDOM from 'react-dom';

  class NoneLoginBtnList extends React.Component {
    render() {
      return (
        <ul>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">註冊</a></li>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">登入</a></li>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">文章列表</a></li>
        </ul>
      );
    }
  }

  class LoginBtnList extends React.Component {
    render() {
      return (
        <ul>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">登出</a></li>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">文章列表</a></li>
        </ul>
      );
    }
  }


  class Member extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLogin : false
      }
    }
    render() {
      const isLogin = this.state.isLogin;
      if (isLogin) {
        return (
          <LoginBtnList />
        );
      }
      else {
        return (
          <NoneLoginBtnList />
        );
      }
    }
  } 



  class UI extends React.Component {
    render() {
      return (
        <div class="container-fluid">
          <div class="row">
            <div id="main" className="col-9"><h1 class="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1></div>
            <div id="sidebar" className="col-3">
              <div class="inner">
                <nav id="menu">
                  <Member />
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }



  ReactDOM.render(
    <UI />,
    document.getElementById('root')
  );


  

