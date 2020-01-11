import React from 'react';
import {Link} from 'react-router-dom';




export default class AddarticleListener extends React.Component {
    render() {
        if(this.props.loggedInStatus){
            return (
                <div>
                    <Link to={{
                        pathname: "Articlepad",
                        state: {
                            loggedInStatus: "",
                            id: "",
                            username: "",
                            title: "",
                            content: "",
                            isEdit:false
                        }
                    }}>
                        <i className="far fa-plus-square fa-3x"></i>
                    </Link>
                </div>
            );
        }
    }
}