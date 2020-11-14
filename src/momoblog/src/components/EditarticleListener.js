import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import webhookURL from '../util/config/webhookURL';


export default class EditarticleListener extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DeletedArticleErrors: "",
        }
        this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
    }
    
    handleDeleteArticle() {
        const {id, username, title, content} = this.props;
        axios.post( webhookURL.url + '/api/deletearticle/submit', {
            user: {
                id:id,
                username:username,
                title:title,
                content:content
            }
        },
        {
            withCredentials: true
        },
        )
        .then(response => {
            if (response.data.isDeleteArticle){
                console.dir("刪除成功!");
                console.dir(response.data.isDeleteArticle);
                this.setState({DeletedArticleErrors: response.data.errorText}); 
                this.props.history.push("/yayayaya");
            }
            else if (!response.data.isDeleteArticle){
                this.setState({DeletedArticleErrors: response.data.errorText});
            }
        })
        .catch(error => {
            console.dir("登入失敗!", error);
        })
    }

    render() {
        if(this.props.loggedInStatus){
            return (
                <div className="article_authorandtime col-5">
                    <div className="horizonal">
                        <Link to={{
                            pathname: "Articlepad",
                            state: {
                                loggedInStatus:this.props.loggedInStatus,
                                id:this.props.id,
                                username:this.props.username,
                                title:this.props.title,
                                content:this.props.content,
                                isEdit:true
                            }
                        }}>
                            <button className="btn btn-outline-secondary item0">編輯文章</button>
                        </Link>
                        <button onClick={this.handleDeleteArticle} className="btn btn-outline-secondary item1">刪除文章</button>
                    </div>
                </div>
            );
        }
    }
}