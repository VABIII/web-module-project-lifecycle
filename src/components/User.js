import React from "react";


class User extends React.Component {




    render() {
        // console.log(this.props)
        return(
            <div>
                <div className="user">
                    <div className="user-img">
                        <img src={this.props.user.avatar_url} alt="avatar"/>
                    </div>
                    <div className="user-info">
                        <h2>{this.props.user.name}</h2>
                        <p>({this.props.user.login})</p>
                        <h4 id="repos">Total Repos:&nbsp;{this.props.user.public_repos}</h4>
                        <h4>Total Followers:&nbsp;{this.props.user.followers}</h4>
                    </div>
                </div>
            </div>
        )
    }


}


export default User;











































