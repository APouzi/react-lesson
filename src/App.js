import React, { Component, Fragment } from "react";
//Single User Component & Data - 00:52 We want to import a couple of things from the router, one of them is "BrowserRouter" and we will give it an alias or name of "Router". We also want bring in Switch and Route. 1:24 Go down to main render
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
//Single User Component & Data - 3:50 import the singular user. Now we need to create a route, scroll down.
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
//React Router Setup - 5:12  import About here and scroll down to create another route
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    console.log(text);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`, {
      headers: {
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    
    this.setState({ users: res.data.items, loading: false });
  };

//Single User Component & Data - 1:07 We are going to be putting this function under the "searchUsers". which is going to get a single github user. This is going to be an asynchronus method. It's going to take in the username aka login. Then we are going to copy from searchUsers code and made alterations to "res" url and then for "users", we are going to put in a new "user" who is going to be a new state, and this one is going to be an object. 3:10 Let's create a new component called "User.js" in users, (3:15) go to User.js
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
    }
    );
    this.setState({ user: res.data, loading: false });
  };

  clearUsers = async () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, user, loading } = this.state;

    return (
//React Router Setup - 1:32 Here we will place the "Router", 1:47 What we have now, on the page, we are going to make that the "home route" aka "/", the "problem" is that we have a couple of components in the router like Search, Alert, Users. We could create another page "home" and just embed these, but just to show how, we can have multiple components in a single route, using Switches.
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
{/*React Router Setup - 2:23 Here we are going to put a route here, wrapped in a Switch. The Route is going to have a path, and before the keyword "exact" because we want the exact path. Then beside that we are going to put what is called a "render prop". , inside that, it takes a "props" with an arrow, In Which we will have a fragment inside the render. Inside the Fragment, we will put a search and user. Make sure you import Fragment at the top. 3:50 Let's create another Route, to an "about" component, which will be an "about" page, just to show how we can create a route without using the "render" props. 4:08 Make a new folder in components folder and call it "pages", inside pages, create a file called "About.js". (4:15 go to About.js)*/}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />

{/*React Router Setup - 5:20 What we will do is go under the first route and put in another route, inside that Route component tag, we are going to put in an exact path = '/about', and all we have to do since it's a component, just do a "{About}", if you go to the browser and put in this path, we get that path. Now we need to put some links for About and Home. (5:57 Go to Navbar.js) */}
              <Route exact path="/about" component={About} />

{/*Single User Component & Data - 3:59 Now, when it comes to creating the root, we can't just do component equals user like we did with "/about", because we have stuff we need to pass in. We need to pass in the get user prop, which is the function we created. Also, we need to pass in the current user's state. 4:31 So let's create this route. We will be completely refactoring all of this to show you how helpful it is to have the Context API and Hooks and all that. So are going to have an exact path, and '/user/:login', with :login because we need to know who is the user, since login is the user, just different name from github  */}
              <Route
                exact path='/user/:login'
                render={(props) => (
//Single User Component & Data - 5:16 Now we need to pass stuff into the user component, which is whatever props we want. So to do that, we need to use the "spread operator", which is {...props} and then we want the "getUser={this.getUser}", in addition to that we want to send in the user state, 5:40 which btw we need to add the to the destructure we have on top, so that way we can get the user state with "user = {user}", otherwise it would be "this.state.user", we also need to pass in loading. (6:37 go to UserItem.js)
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
