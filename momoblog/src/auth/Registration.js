import React, {Component} from 'react';
import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
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
        const {username, email, password, password_confirmation} = this.state;
        axios.post('http://momoweb.hopto.me:3200/registration/submit', {
            user: {
                username: username,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }
        ).then(response => {
            if (response.data === 'registration_ok'){
                this.setState({registrationErrors:"註冊成功!"});
            }
            else if (response.data === 'password_validate_err'){
                this.setState({registrationErrors:"兩次密碼不一致"});
            }
            else if (response.data === 'registration_failed'){
                this.setState({registrationErrors:"註冊失敗!"});
            }
            else if (response.data === 'registration_duplicated'){
                this.setState({registrationErrors:"帳號名稱重複!請更換帳號名稱"});
            }
            else if (response.data === 'unknownerr'){
                this.setState({registrationErrors:"發生了未知錯誤"});
            }
            console.log("註冊結果!", response);
        }).catch(error => {
            console.dir("註冊失敗!", error);
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
                            <p>電子郵件:</p>
                            <input type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={this.state.email} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                autoComplete="email" 
                                maxLength="200" 
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
                        <div className="row validate">
                            <p>確認密碼:</p>
                            <input type="password" 
                                name="password_confirmation" 
                                placeholder="Password confirmation" 
                                value={this.state.password_confirmation} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                autoComplete="new-password" 
                                maxLength="16" 
                                required 
                            />
                        </div>
                        <div className="row justify-content-between validate">
                            <div className="col-4">
                                <button type="submit" className="btn btn-light">註冊</button>
                            </div>
                            <div className="col-8">
                                <p className="error_code">{this.state.registrationErrors}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
