import React from 'react';
import moment from 'moment';



export default class Article extends React.Component {
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
        this.state.articles.map((articles,index) => {
          return (
              <div className="article" key={index}>
                <div className="article_title">
                  <h1>{articles.title}</h1>
                  <div className="row">
                    <div className="article_authorandtime col-3">
                      <p>{articles.act_name}</p> 
                    </div>
                    <div className="article_authorandtime col-7">
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