import React from 'react';
import moment from 'moment';
import EditarticleListener from './EditarticleListener';
import {Link} from 'react-router-dom';


export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

    async componentDidMount() {
      let b = await fetch( process.env.REACT_APP_API_URL + '/api/articlelist');
      let articles = await b.json();
      this.setState({articles});
    }

  render () {
    return (
      this.state.articles.map((articles,index) => {
        return (
          <div className="article" key={index}>
            <div className="article_title">
              <Link className="noblue" to={{
                pathname: "/Homepage",
                state: {
                  id:articles.id,
                  title:articles.title,
                  content:articles.content,
                  create_time:articles.create_time,
                  article_username:articles.act_name,
                  isArticleDetail:true
                }
              }}>
                <h1>{articles.title}</h1>
              </Link>
              <div className="row">
                <div className="article_authorandtime col-3">
                  <p>作者 {articles.act_name}</p> 
                </div>
                <div className="article_authorandtime col-4">
                  <p>{moment(articles.create_time).format('YYYY年MM月DD日')} </p>
                </div>
                {
                  this.props.loggedInStatus && (this.props.username === articles.act_name) &&
                    <EditarticleListener
                      loggedInStatus={this.props.loggedInStatus}
                      id={articles.id}
                      username={this.props.username}
                      title={articles.title}
                      content={articles.content}
                      history={this.props.history}
                    />
                }
              </div>
            </div>
            <div className="article_content">
              <p>{articles.content}</p>
            </div>
          </div>
        );
      })
    )
  }

}