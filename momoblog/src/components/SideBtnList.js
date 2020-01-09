import React from 'react';
import {Link} from 'react-router-dom';


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

class NoneLoginBtnList extends React.Component {
    render() {
        return (
        <ul>
            <Link to="register"><li className="list-group-item sidebar_title list-group-item-action" >註冊</li></Link>
            <Link to="login"><li className="list-group-item sidebar_title list-group-item-action">登入</li></Link>
            <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">文章列表</a></li>
        </ul>
        );
    }
}

export default class SideBtnList extends React.Component {
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