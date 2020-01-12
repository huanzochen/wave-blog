import React from 'react';
import SideBtnList from './SideBtnList';
import Article from './Article';
import AddarticleListener from './AddarticleListener';
import ArticleDetail from './ArticleDetail';
import {Link} from 'react-router-dom';

export default class Homepage extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        id: "",
        title: "",
        content: "",
        create_time: "",
        article_username: "",
        isArticleDetail: false
      }
    }

    componentDidMount() {
      window.scrollTo(0, 0); // 讓畫面回到最上方
      console.dir("this.props.location.from");
      console.dir(this.props.location.from);
      if(!(typeof this.props.location.from === "undefined")) {
        if(this.props.location.from.pathname === "/Homepage") {
          if(!(typeof this.props.location.from.state === "undefined")) {
            this.setState({
                id: this.props.location.from.state.id,
                title: this.props.location.from.state.title,
                content: this.props.location.from.state.content,
                article_username: this.props.location.from.state.article_username,
                isArticleDetail: this.props.location.from.state.isArticleDetail
            })
          }
        }
      }
    }

    render() {
      console.dir("loggedInStatus");
      console.dir(this.props.loggedInStatus);

      return (
        <div className="container-fluid">
          <div className="row">
            <div id="main" className="col-9">
              <Link to="Homepage"><h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1></Link>
              <div className="inner">
                { !(this.state.isArticleDetail) && 
                  <div>
                    <AddarticleListener
                      handleLogoutClick={this.props.handleLogoutClick}
                      loggedInStatus={this.props.loggedInStatus}
                    /> 
                    <Article
                      loggedInStatus={this.props.loggedInStatus}
                      username={this.props.username}
                      history={this.props.history}
                    />
                  </div>
                }
                {
                  this.state.isArticleDetail && 
                  <ArticleDetail
                      loggedInStatus={this.props.loggedInStatus}
                      username={this.props.username}
                      id={this.state.id}
                      title={this.state.title}
                      content={this.state.content}
                      article_username={this.state.article_username}
                      isArticleDetail={this.state.isArticleDetail}
                      history={this.props.history}
                  />
                }
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