import React from 'react';
import SideBtnList from './SideBtnList';
import axios from 'axios';

export default class Articlepad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("內容有變動");
    }

    handleSubmit(event) {
        axios.post('http://momoweb.hopto.me:3200/api/newarticle/submit', {
            newArticle: {
                title: this.state.title,
                content: this.state.content,
                user: this.props.user
            }
        }
        ).then(response => {
            if (response.data.isRegistered){
                console.dir("新增文章失敗!");
                this.setState({registrationErrors: response.data.errorText});
            }
            else if (!response.data.isRegistered){
                this.setState({registrationErrors: response.data.errorText});
            }
            console.log("註冊結果!", response);
        }).catch(error => {
            console.dir("註冊失敗!", error);
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <div id="main" className="col-9">
                  <h1 className="title display-3"><span className="badge badge-secondary">茉茉部落格</span></h1>
                  <div className="inner">
                    <div className="article">
                        <div className="article_title">

                            <form onSubmit={this.handleSubmit} >
                                <div className="row add_article">
                                    <p>標題: </p>
                                    
                                    <textarea className="form-control"
                                     id="exampleFormControlTextarea1"
                                     name="title"
                                     rows="1"
                                     value={this.state.title}
                                     onChange={this.handleChange}   
                                     required></textarea>
                                </div>
                                <div className="row add_article">
                                    <p>內容:</p>
                                    <div className="input-group">
                                    <textarea className="form-control" 
                                     id="exampleFormControlTextarea2" 
                                     name="content" 
                                     rows="5" 
                                     value={this.state.content} 
                                     onChange={this.handleChange}  
                                     required></textarea>
                                    </div>
                                </div>
                                <div className="row add_article">
                                    <button type="submit" className="btn btn-light">送出</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    
                  </div>
                </div>
                <div id="sidebar" className="col-3">
                  <div className="inner">
                    <nav id="menu">
                      <SideBtnList 
                        handleLogoutClick={this.handleLogoutClick}
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