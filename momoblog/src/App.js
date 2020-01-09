import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Homepage from './components/Homepage';
import RegisterAll from './components/RegisterAll';
import LoginAll from './components/LoginAll';



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
      //this.handleLogout = this.handleLogout.bind(this); 暫時用不到
    }
    /*
    checkLoginStatus() {
      axios.get("http://momoweb.hopto.me:3200/api/login/submit", { withCredentials:true})
      .then(response => {
          console.log("logged in?", response);
      })
      .catch(error => {
          console.log("check login error", error);
      });
      
    }
    */

    handleLogin(data) {
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data.user
      });
      console.log(this.state.loggedInStatus);
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
                    <route.component routes={routes} {...routeProps} />
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
    path: '/',
    component: RouteFallback,
    exact: false,
    breadcrumbName: 'Index'
}
];

 