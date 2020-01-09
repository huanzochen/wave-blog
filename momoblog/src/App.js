import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Homepage from './components/Homepage';
import RegisterAll from './components/RegisterAll';
import LoginAll from './components/LoginAll';
import Articlepad from './components/Articlepad';



const RouteFallback = (props) => { 
    console.log('route fallback with location: ', props.location); 
    return <Redirect to={{
      pathname: '/',
      from: props.location
    }} /> 
}

export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      };
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
    
    checkLoginStatus() {
      axios.get("http://momoweb.hopto.me:3200/api/logged_in", { withCredentials:true})
      .then(response => {
          if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
            this.setState({
                loggedInStatus: "LOGGED_IN",
                user: response.data.username
              });
          }
          else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
            this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
                user: {}
              });
          }
          console.log("logged in?", response);
      })
      .catch(error => {
          console.log("check login error", error);
      });
      
    }

    componentDidMount() {
        this.checkLoginStatus();
    }
    

    handleLogin(data) {
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data.user
      });
    }

    handleLogout() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
    }

    render() {
      return (
        <BrowserRouter>
          <Switch>
              {routes.map((route,i) => {
                const{ path, exact, routes } = route;
                return (
                  <Route 
                  key={i}
                  path={path} 
                  exact={exact} 
                  render={(routeProps) => (
                    <route.component routes={routes} {...routeProps}
                        handleLogin={this.handleLogin}
                        handleLogout={this.handleLogout}
                        loggedInStatus={this.state.loggedInStatus}
                        user={this.state.user}
                    />
                  )} />
                )
              })}
          </Switch>
        </BrowserRouter>
      );
    }
}

//之後可以分開來寫
const routes = [
{
    path: '/',
    component: Homepage,
    exact: true,
    breadcrumbName: 'Homepage'
},
{
    path: '/register',
    component: RegisterAll,
    exact: true,
    breadcrumbName: 'Register'
},
{
    path: '/login',
    component: LoginAll,
    exact: true,
    breadcrumbName: 'Login'
},
{
    path: '/Articlepad',
    component: Articlepad,
    exact: false,
    breadcrumbName: 'Articlepad'
},
{
    path: '/',
    component: RouteFallback,
    exact: false,
    breadcrumbName: 'Index'
},
];

 