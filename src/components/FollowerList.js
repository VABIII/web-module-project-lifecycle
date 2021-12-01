import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render() {
        return (
            <div>
                <div className="followers">
                    <div className="followers-header">
                        <h3>Followers:</h3>
                    </div>
                </div>
                <Follower follower={this.props}/>
            </div>
        );
    }
}


export default FollowerList;










































