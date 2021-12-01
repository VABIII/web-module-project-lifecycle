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
                  // console.log(this.state)
              })

              .catch(err => {
                  console.error(err);
              })
      }

    getFollowers = name => {
        axios.get(`https://api.github.com/users/${name}/followers`)
            .then(res => {
                // console.log(res.data);
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

    onChange = evt => {
        this.setState({
            ...this.state,
            input: evt.target.value
        })
        // console.log(this.state.input)
    }

    onSubmit = evt => {
        evt.preventDefault();
        console.log(this.state.input);
        this.getPerson(this.state.input);
        this.getFollowers(this.state.input)

    }

  render() {
        console.log(this.state.input)
    return(
        <div className="search-container">
          <div className="header">
            <div className="title">
                <h1>GITHUB INFO</h1>
            </div>
            <div className="search-form">
                <form onSubmit={this.onSubmit}>
                     <input
                        type="text"
                        name="search"
                        value={this.state.input}
                        onChange={this.onChange}
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


































