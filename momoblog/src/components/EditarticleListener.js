import React from 'react';
import {Link} from 'react-router-dom';




export default class EditarticleListener extends React.Component {
    render() {
        if(this.props.loggedInStatus){
            return (
                <div className="article_authorandtime col-3">
                    <Link to={{
                        pathname: "Articlepad",
                        state: {
                            loggedInStatus:this.props.loggedInStatus,
                            id:this.props.id,
                            username:this.props.username,
                            title:this.props.title,
                            content:this.props.content,
                            isEdit:true
                        }
                    }}>
                        <button className="btn btn-outline-secondary">編輯文章</button>
                    </Link>
                </div>
            );
        }
    }
}