import React from "react";
import Follower from "./Follower";
import "./FollowerList.css"

class FollowerList extends React.Component {

    render() {
        console.log(this.props.followers)
        return (
            <div className="follow">
                <div className="followers">
                    <h3>Followers:</h3>
                </div>
                <div className="f">
                {
                    this.props.followers.map(follower => {
                       return <Follower key={follower.id} follower={follower}/>
                    })
                }
                </div>
            </div>
        );
    }
}


export default FollowerList;










































