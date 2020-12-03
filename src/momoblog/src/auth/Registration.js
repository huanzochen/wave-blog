import React, {Component} from 'react'
import axios from 'axios'

export default class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('內容有變動')
  }

  handleSubmit(event) {
    const {username, email, password, password_confirmation} = this.state
    axios.post(process.env.REACT_APP_API_URL + '/api/registration/submit', {
      user: {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    }
    ).then(response => {
      if (response.data.isRegistered) {
        console.dir('註冊成功!')
        this.setState({registrationErrors: response.data.errorText})
        this.props.handleSuccessfulRegister()
      }
      else if (!response.data.isRegistered) {
        this.setState({registrationErrors: response.data.errorText})
      }
      console.log('註冊結果!', response)
    }).catch(error => {
      console.dir('註冊失敗!', error)
    })
    event.preventDefault()
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
              <div className="col-5">
                <button type="submit" className="btn btn-light">註冊</button>
              </div>
              <div className="col-7">
                <p className="error_code">{this.state.registrationErrors}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
