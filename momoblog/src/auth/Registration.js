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
            console.log("registration res", response);
        }).catch(error => {
            console.dir("registration Err", error);
        })
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div class="row validate">
                    <p>帳號 </p>
                    <input type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.handleChange}  
                        class="form-control" 
                        required
                        />
                    </div>
                    <div class="row validate">
                    <p>電子郵件</p>
                    <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        required
                    />
                    </div>
                    <div class="row validate">
                    <p>密碼</p>
                    <input type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        required 
                    />
                    </div>
                    <div class="row validate">
                    <p>確認密碼</p>
                    <input type="password" 
                        name="password_confirmation" 
                        placeholder="Password confirmation" 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        class="form-control" 
                        required 
                    />
                    </div>
                    <div class="row validate">
                    <button type="submit" class="btn btn-light">註冊</button>
                    </div>
                </form>
            </div>
        );
    }
}
