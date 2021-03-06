//App Class to Function Component - 00:14 lets get rid of component, and bring in "useState". Change the App to functional component. 
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Users from "./components/users/Users";
import User from "./components/users/User";
//Home & NotFound Components - 00:36 First, we are going to be creating a new file in "pages" called "home.js" which is going to take care of the "Users" and "Search" fragments. Copy and paste Search&User import into the new folder (00:48 go to Home.js)
// import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
//Home & NotFound Components - 2:02 Now lets import in the home component
import Home from "./components/pages/Home";
import About from "./components/pages/About";
//Home & NotFound Components - 3:51 Lets bring in the not found component
import NotFound from "./components/pages/NotFound";

//Implementing Context - 10:59 Here we are going to be bring in our "GithubState"
import GithubState from "./context/github/GithubState";
//Alert Context Workflow - 4:08 Here we will copy and paste this down and change it to AlertState then scroll down 4:19
import AlertState from "./context/alert/AlertState";
 

import "./App.css";
import { GET_USER } from "./context/types";

const App = () => {
//App Class to Function Component - 00:35 lets do a "useState" to replace the multiple states that are found here in the "state = {}" object. The state object will be commented out for comparison.
//Moving User State To Context - 8:44 Since we are no longer calling setUsers, we can remove it from here.
// const [users, setUsers] = useState([]);
// const [user, setUser] = useState({});
// const [repos, setRepos] = useState([]);
// const [loading, setLoading] = useState(false);
// const [alert, setAlert] = useState(null);


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


//Create Reducer & Actions - 1:40 Grab search users and move it to GithubState.js
// //App Class to Function Component - 2:06 For search users, instead of "this.setState({ loading: true });" we now use the useState hook we created, setLoading.
//   const  searchUsers = async (text) => {
//     setLoading(true);
//     console.log(text);
//     const res = await axios.get(`https://api.github.com/search/users?q=${text}`, {
//       headers: {
//           Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
//         },
//       }
//     );
// //App Class to Function Component - 2:29 instead of "this.setState({ users: res.data.items, loading: false });", we now do "setUsers(res.data.items);"
//     setUsers(res.data.items);
//     setLoading(false);
//   };

//App Class to Function Component - 3:05 Here we are going to be doing a "setLoading(true)".  After that, we do a "this.setState({ user: res.data, loading: false });" to "setUser(res.data);" and "setLoading(false);".

//Moving User State To Context - 8:56 Now we need to move this "getUser" function from App.js to GithubState.js (9:03 copy getUser function, go to GithubState.js)
  // const getUser = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users/${username}`, {
  //   headers: {
  //     Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
  //   },
  //   }
  //   );
  //   // // 9:26 we want to dispatch here, so remove the setUser and setLoading. Which is the singular user, that comes from the endpoint above. (9:49 go the reducer)
  //   // setUser(res.data);
  //   // setLoading(false);
  //   dispatch({
  //     type: GET_USER,
  //     payload: res.data
  //   })
  // };


  //Moving Repos State To Context - 00:17 we are going to take this "getUserRepos" and copy and comment it out. Then after this, scroll down to the "User" component
  // //App Class to Function Component - 3:22 same thing with repos, we use setLoading and setRepos useState hooks.
  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`, {
  //   headers: {
  //     Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
  //   },
  //   }
  //   );
  //   setRepos(res.data);
  //   setLoading(false);
  // };


//Moving User State To Context -4:31 We want to clearUsers and copy and paste that into GithubState. (4:47 go to GithubState.js) 
// //App Class to Function Component - 3:55 for clearUsers we do the same thing but except it's "setUsers".
// const clearUsers = async () => {
//     setUsers([]);
//     setLoading(false);
//   };



//Alert Context Workflow - 4:39 Get rid of the showAlert method. 4:37 He starts getting rid of alot of stuff.setAlert={showAlert}, alert={alert}.  so basically we got rid of all those props. We were passing back and forth and up and down. (4:57 go to AlertState.js)

// //App Class to Function Component - 4:21 instead of "this.setState({ alert: { msg, type } });" we just do a setAlert({ msg, type }). 
// //App Class to Function Component - 6:45 change name from setAlert to showAlert and change the method from "setAlert={setAlert}" to "setAlert={showAlert}". Next we will be implementing Context (END OF VIDEO)
// const showAlert = (msg, type) => {
//     setAlert({ msg, type });
//     //For the alert, just replace  "this.setState({ alert: null })" with a "setAlert(null)"
//     setTimeout(() => setAlert(null), 5000);
//   };




//App Class to Function Component - 5:00 get rid of the render, and the destructuring used in the render.Remove all the "this.". 5:53 Make sure you declare const in all the methods. 
    return (
//Implementing Context - 11:25 The methods above are going to go into the GithubState, but we are going to do the GithubState wrap here. Now the GithubState file is implemented. 12:05 So throughout the next few videos, what we want to do is move everything, all this stuff, including the state here we want to move to our app level state, which is this file here, and then any changes that are made to the state are going to go through the reducer, which we haven't added anything to yet. (END OF VIDEO)
<GithubState>
{/*Alert Context Workflow - 4:19 Right here we are going to be putting AlertState provider and wrap the entirety of this*/}
  <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert  />
            <Switch>
              <Route
                exact
                path="/"
                component = {Home}
//Home & NotFound Components - 2:21 Lets get rid of the render of the frament with the User and Search. Instead lets just put in "component = {Home}", Now we can remove Fragment from React import. 3:14 Now we are going to create a file called "NotFound.js" in pages folder (3:19 go to NotFound.js)

//                 render={(props) => (
////Create Reducer & Actions - 7:57 down here, where we have our search component, we were passing in "searchUsers={searchUsers}", we no longer have to do that. Since we can access it through context. (8:12 go to Search.js in componets/users)
//                   <Fragment>
//                     <Search/>
//{/*Moving User State To Context - 00:44 we want to get rid of both of these users and loading because now these are part of the "app level state" part of context. So we can just reach in to the context and grab that stuff rather than having to pass it in. 00:58 let's go to Users.js*/}
//                     <Users />
//                   </Fragment>
//                 )}
              />

              <Route exact path="/about" component={About} />

              <Route
                exact path='/user/:login' component = {User}
//Moving Repos State To Context - 00:37 we no longer need  render={(props), we can just use a component = {User}, instead of the return. So it should look like line 141, the other Route. (00:57 go to GithubState.js)

//                 render={(props) => (
////Moving User State To Context - 10:27 "getUser={getUser}" has to be deleted since we have finally removed this from the class based components, to context and hooks.user={user},loading={loading} should also be removed. Scroll up and get rid the state of user "const [user, setUser] = useState({});" and state of loading, "const [loading, setLoading] = useState(false);".  get rid of that. (11:07 go to users/User.js)
//                    <User
//                     {...props}
//                   />
//                 )}
              />
{/*Home & NotFound Components - 4:00 All we have to do to bring in notfound, is a route at the very end (END OF VIDEO) Answer on how this works: https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969896#questions/12308342 */}
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
