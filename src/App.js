import React from 'react';
import axios from "axios";
import "./App.css";
import FollowerList from "./components/FollowerList";
import User from "./components/User";



class App extends React.Component {

    state = {
        user:
            {
                name: "VABIII"
            },
        followers: [],
        input: ""
    }



      getPerson = (name) => {
          axios.get(`https://api.github.com/users/${name}`)
              .then(res => {
                  console.log(res.data)
                  this.setState({
                      ...this.state,
                      user: res.data
                  })
                  console.log(this.state)
              })

              .catch(err => {
                  console.error(err);
              })
      }

    getFollowers = name => {
        axios.get(`https://api.github.com/users/${name}/followers`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    followers: res.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    componentDidMount() {
        this.getPerson(this.state.user.name);
        this.getFollowers(this.state.user.name)
        }



  render() {
        console.log(this.state)
    return(
        <div className="search-container">
          <div className="header">
            <div className="title">
                <h1>GITHUB INFO</h1>
            </div>
            <div className="search-form">
                <form>
                     <input
                        type="text"
                        name="search"
                     />
                    <button>Search</button>
                 </form>
            </div>
          </div>
            <br/>
            <User user={this.state.user}/>
            <FollowerList followers={this.state.followers}/>
        </div>
    );
  }
}

export default App;


































