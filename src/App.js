import React from 'react';
import axios from "axios";
import "./App.css";
import FollowerList from "./components/FollowerList";
import User from "./components/User";



class App extends React.Component {

  componentDidMount() {
    axios.get("https://api.github.com/users/VABIII")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.error(err);
        })
  }


  render() {
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
        <div className="user">
            <div className="user-img">
                <img src="https://avatars.githubusercontent.com/u/87542373?v=4" alt="avatar"/>
            </div>
            <div className="user-info">
               <h2>Vern</h2>
               <p>(VABIII)</p>
               <h4 id="repos">Total Repos:&nbsp;</h4>
               <h4>Total Followers:&nbsp;</h4>
            </div>
        </div>
        <div className="followers">
            <div className="followers-header">
              <h3>Followers:</h3>
            </div>
        </div>

        </div>

    );
  }
}

export default App;


































