import React from "react";
import "./Follower.css"

class Follower extends React.Component {


    render() {
        // console.log(this.props)
        return (

                <div className="follower">
                    <div className="follower-img">
                        <img src={this.props.follower.avatar_url} alt=""/>
                    </div>
                    {this.props.follower.login}
                </div>

        );
    }
}




export default Follower;












































