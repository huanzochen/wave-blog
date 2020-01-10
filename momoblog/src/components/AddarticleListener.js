import React from 'react';
import {Link} from 'react-router-dom';
import Article from './Article';




export default class AddarticleListener extends React.Component {
    render() {
        if(this.props.loggedInStatus){
            return (
                <div><Link to="Articlepad"><i className="far fa-plus-square fa-3x"></i></Link></div>
            );
        }
    }
}