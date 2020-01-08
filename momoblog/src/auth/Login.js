import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginErrors: ""
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
        const {username, password} = this.state;
        axios.post('http://momoweb.hopto.me:3200/api/login/submit', {
            user: {
                username: username,
                password: password
            }
        }
        ).then(response => {
            if (response.data.isLoggedIn){
                console.dir("登入成功!");
                this.setState({loginErrors: response.data.errorText});
                //this.props.handleSuccessfulAuth(response.data);
            }
            else if (!response.data.isLoggedIn){
                this.setState({loginErrors:response.data.errorText});
            }
            console.log("登入結果!", response);
        }).catch(error => {
            console.dir("登入失敗!", error);
        })
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="article">
                <div className="article_title">
                    <form onSubmit={this.handleSubmit} >
                        <div className="row validate">
                            <p>帳號: </p>
                            <input type="text" 
                                name="username" 
                                placeholder="Username" 
                                value={this.state.username} 
                                onChange={this.handleChange}  
                                className="form-control" 
                                autoComplete="username" 
                                maxLength="16" 
                                required
                                />
                        </div>
                        <div className="row validate">
                            <p>密碼:</p>
                            <input type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                autoComplete="new-password" 
                                maxLength="16" 
                                required 
                            />
                        </div>
                        <div className="row justify-content-between validate">
                            <div className="col-5">
                                <button type="submit" className="btn btn-light">登入</button>
                            </div>
                            <div className="col-7">
                                <p className="error_code">{this.state.loginErrors}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
