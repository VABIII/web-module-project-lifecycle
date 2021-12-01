import React from "react";


class User extends React.Component {




    render() {
        return(
            <div>
                <div className="user">
                    <div className="user-img">
                        <img src={`${this.props.user.avatar_url}`} alt="avatar"/>
                    </div>
                    <div className="user-info">
                        <h2>{this.props.user.name}</h2>
                        <p>({this.props.user.login})</p>
                        <h4 id="repos">Total Repos:&nbsp;{this.props.user.repos}</h4>
                        <h4>Total Followers:&nbsp;{this.props.user.followers}</h4>
                    </div>
                </div>
                <div className="followers">
                    <div className="followers-header">
                        <h3>Followers:</h3>
                    </div>
                </div>
            </div>
        )
    }


}


export default User;











































