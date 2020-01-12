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
                    <div className="new_button"><button class="btn btn-outline-secondary">新增文章</button></div>
                    </Link>
                </div>
            );
        }
    }
}