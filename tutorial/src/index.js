import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




  function formatDate(date) {
    return date.toLocaleDateString();
  }  

  class Avatar extends React.Component {
    render() {
      return (
        <img className="Avatar"
          src={this.props.user.avatarUrl}
          alt={this.props.user.name}
        />
      )
    }
  }

  class UserInfo extends React.Component {
    render () {
      return (
        <div className="UserInfo">
          <Avatar user={this.props.user} />
          <div className="UserInfo-name">
            {this.props.user.name}
          </div>
        </div>
      )
    }
  }

  class Comment extends React.Component {
    render() {
      return (
        <div className="Comment">
          <UserInfo user={this.props.user} />
          <div className="Comment-text">
            {this.props.text}
          </div>
          <div className="Comment-date">
            {formatDate(this.props.date)}
          </div>
        </div>
      );
    }
  }

  



  class Welcome extends React.Component {
    render() {
      return (
        <h1> Hello, {this.props.name}!</h1>
      )
    }
  }

  class App extends React.Component {
    render() {
      return (
        <div>
          <Welcome name="Tommy" />
          <Welcome name="Kevin" />
          <Welcome name="Linda" />
        </div>
      )
    }
  }

  const element = <Welcome name= "Tommy"/>
 
 // 封裝tick
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date : new Date()
      });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }


  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }


  }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }



  ReactDOM.render(
    //<Greeting isLoggedIn={false} />
    <Page />,
    document.getElementById('root')
  );


  

/*

  function formatName(user) {
    return user.firstName+ ' ' + user.lastName;
  }

  const user = {
    firstName: 'Tommy',
    lastName: 'huang'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
  
*/

/*
ReactDOM.render(
  <Comment />, 
  document.getElementById('root'));
*/