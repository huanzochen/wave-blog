import React from 'react';
import SideBtnList from './SideBtnList';
import axios from 'axios';
import webhookURL from '../util/config/webhookURL';

export default class Articlepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.dir("typeof");
    console.dir((typeof this.props.location.state) === "undefined");
    if(!(typeof this.props.location.state === "undefined")) {
      console.dir("通過!");
      this.setState({
        id: this.props.location.state.id,
        title: this.props.location.state.title,
        content: this.props.location.state.content
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("內容有變動");
  }

  handleSubmit(event) {
    axios.post( webhookURL.url + '/api/newarticle/submit', {
      newArticle: {
        id: this.state.id,
        username: this.props.username,
        title: this.state.title,
        content: this.state.content,
      }
    }
    ).then(response => {
      if (response.data.isAddArticle){
        console.dir(response.data.errorText);
        this.props.history.push("/");
      }
      else if (!response.data.isRegistered){
        console.dir(response.data.errorText);
      }
      console.log("新增/編輯結果!", response);
    }).catch(error => {
      console.dir("新增/編輯失敗!", error);
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