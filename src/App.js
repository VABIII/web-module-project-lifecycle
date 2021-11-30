import React from 'react';
import axios from "axios";
import "./App.css";


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
        <div>
          <div>
            <h1>Github Card</h1>
          </div>
            <div>
          <div className="search-container">
            <form>
              <label htmlFor="search">Search:&nbsp;</label>
              <input
                  type="text"
                  name="search"
              />
            </form>
          </div>
          <br/>
          <div className="user">
            <img src="#" alt="avatar"/>
            <h2>Vern</h2>
            <p>VABIII</p>
            <h4>Total Repos:&nbsp;</h4>
            <h4>Total Followers:&nbsp;</h4>
          </div>
          <div className="followers">
            <h3>Followers:</h3>
          </div>
        </div>
        </div>

    );
  }
}

export default App;


































