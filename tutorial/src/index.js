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


  ReactDOM.render(
    <Clock />, 
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