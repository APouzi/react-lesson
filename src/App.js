//App Class to Function Component - 00:14 lets get rid of component, and bring in "useState". Change the App to functional component. 
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
//Implementing Context - 10:59 Here we are going to be bring in our "GithubState"
import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
//App Class to Function Component - 00:35 lets do a "useState" to replace the multiple states that are found here in the "state = {}" object. The state object will be commented out for comparison.
const [users, setUsers] = useState([]);
const [user, setUser] = useState({});
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(false);
const [alert, setAlert] = useState(null);


  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
    
  // };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");
  //   this.setState({ users: res.data, loading: false });
  // }

//App Class to Function Component - 2:06 For search users, instead of "this.setState({ loading: true });" we now use the useState hook we created, setLoading.
  const  searchUsers = async (text) => {
    setLoading(true);
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`, {
      headers: {
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
//App Class to Function Component - 2:29 instead of "this.setState({ users: res.data.items, loading: false });", we now do "setUsers(res.data.items);"
    setUsers(res.data.items);
    setLoading(false);
  };

//App Class to Function Component - 3:05 Here we are going to be doing a "setLoading(true)".  After that, we do a "this.setState({ user: res.data, loading: false });" to "setUser(res.data);" and "setLoading(false);".
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
    }
    );
    setUser(res.data);
    setLoading(false);
  };

  //App Class to Function Component - 3:22 same thing with repos, we use setLoading and setRepos useState hooks.
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`, {
    headers: {
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
    }
    );
    setRepos(res.data);
    setLoading(false);
  };


//App Class to Function Component - 3:55 for clearUsers we do the same thing but except it's "setUsers".
const clearUsers = async () => {
    setUsers([]);
    setLoading(false);
  };

//App Class to Function Component - 4:21 instead of "this.setState({ alert: { msg, type } });" we just do a setAlert({ msg, type }). 
//App Class to Function Component - 6:45 change name from setAlert to showAlert and change the method from "setAlert={setAlert}" to "setAlert={showAlert}". Next we will be implementing Context (END OF VIDEO)
const showAlert = (msg, type) => {
    setAlert({ msg, type });
    //For the alert, just replace  "this.setState({ alert: null })" with a "setAlert(null)"
    setTimeout(() => setAlert(null), 5000);
  };




//App Class to Function Component - 5:00 get rid of the render, and the destructuring used in the render.Remove all the "this.". 5:53 Make sure you declare const in all the methods. 
    return (
//Implementing Context - 11:25 The methods above are going to go into the GithubState, but we are going to do the GithubState wrap here. Now the GithubState file is implemented. 12:05 So throughout the next few videos, what we want to do is move everything, all this stuff, including the state here we want to move to our app level state, which is this file here, and then any changes that are made to the state are going to go through the reducer, which we haven't added anything to yet. (END OF VIDEO)
<GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />

              <Route exact path="/about" component={About} />

              <Route
                exact path='/user/:login'
                render={(props) => (
                   <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos = {repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
}

export default App;
