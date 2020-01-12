import React from 'react';
import moment from 'moment';
import EditarticleListener from './EditarticleListener';


export default class ArticleDetail extends React.Component {
    render () {
        return (
                <div className="article">
                    <div className="article_title">
                    <h1>{this.props.title}</h1>
                    <div className="row">
                        <div className="article_authorandtime col-3">
                        <p>作者 {this.props.article_username}</p> 
                        </div>
                        <div className="article_authorandtime col-4">
                        <p>{moment(this.props.create_time).format('YYYY年MM月DD日')} </p>
                        </div>
                        {
                            this.props.loggedInStatus && (this.props.username === this.props.article_username) &&
                            <EditarticleListener
                                loggedInStatus={this.props.loggedInStatus}
                                id={this.props.id}
                                username={this.props.username}
                                title={this.props.title}
                                content={this.props.content}
                                history={this.props.history}
                            />
                        }
                    </div>
                    </div>
                    <div className="article_content">
                    <p>{this.props.content}</p>
                    </div>
                </div>
        )
    }

}