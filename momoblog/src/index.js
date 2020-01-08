import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { BrowserRouter, Switch, Route} from 'react-router-dom';




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
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" onclick="alert('click');" href="">註冊</a></li>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">登入</a></li>
          <li className="list-group-item"><a className="sidebar_title list-group-item-action" href="https://www.google.com">文章列表</a></li>
        </ul>
      );
    }
  }

  class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: []
      };
    }

    async componentWillMount() {
      let b = await fetch('http://momoweb.hopto.me:3200/api/articlelist');
      let articles = await b.json();
      this.setState({articles});
    }

    render () {
      return (
        this.state.articles.map(articles => {
          return (
              <div className="article">
                <div className="article_title">
                  <h1>{articles.title}</h1>
                  <div class="row">
                    <div class="article_authorandtime col-3">
                      <p>{articles.act_name}</p> 
                    </div>
                    <div class="article_authorandtime col-7">
                      <p>{moment(articles.create_time).format('YYYY年MM月DD日')} </p>
                    </div>
                  </div>
                </div>
                <div className="article_content">
                  <p>{articles.content}</p>
                </div>
              </div>
          )
        })
      )
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



  class Index extends React.Component {
    render() {
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
                  <Member />
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }

  class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
              {/* The corresponding component will show here if the current URL matches the path */}
              <Route path="/" exact component={Index} />
              
          </Switch>
        </BrowserRouter>
      );
    }
  }


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


  

