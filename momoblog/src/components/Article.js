import React from 'react';
import moment from 'moment';
import EditarticleListener from './EditarticleListener';


export default class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: []
      };
    }

    async componentDidMount() {
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
                        <div className="article_authorandtime col-6">
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