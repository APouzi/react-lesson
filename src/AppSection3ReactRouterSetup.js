import React, { Component } from 'react';

//Components, Props & PropTypes - 2:16 here we want to import the components we are going to be using.  
import Navbar from './components/layout/Navbar';
// //Getting Started With Component State - 1:59 just so we can bring it into our App.js, we are going to be doing an import (which vscode does automatically) and 2:15 just for now we are going to put <UserItem /> under the navbar. 2:20 Now this should show, go to your running server, (2:24 go to UserItems.js)
// import UserItem from './components/users/UserItem';

//Lists & Passing State With Props - 2:20  We no longer need to have this UserItem, above us, so we comment that out and put in our plural version
import Users from './components/users/Users';
//Events & Search Component -1:36 import search and scroll to bottom
import Search from './components/users/Search';
//Alert State & Component - 6:40 import the Alert, scroll down to the "return" in the render
import Alert from './components/layout/Alert'; 
import axios from 'axios';
import './App.css';


class App extends Component {
//HTTP Requests & Updating State - 3:55 we are going to put State, and then users, which is going to be an empty array to began with. We are also going to have loading. The reason I have loading is because there's going to be a moment in time before we actually get the data back. So while that's happening, while basically while it's fetching and before I want loading to be true, and then as soon as it's fetched, we'll change it back to false.That way in our UI, we can say if this data isn't loaded, then let's show us a spinner.
state = {
  users: [],
  loading: false,
  alert: null,
} 

// //HTTP Requests & Updating State - 00:43  I'm going to create what's called the lifecycle method. "Render" is a lifecycle method, it's the only one that's actually required. We do have others and one is componentDidMount() and this will run when the component mounts. If we ever want to do a request to, github for example, this is where we would want to do it. Brad is going to use Axios, but we can use fetchAPI if we wanted to. We will be using fetch at the end of the project, but for now Axios. so in terminal, install axios "npm i axios" and then import axios into App.js
//   componentDidMount(){
// //HTTP Requests & Updating State - 2:04 we're going to go into our componentDidMount() and I want to make a request to the GitHub API. So, we can say axios.get() because we want to make a get request and then we want the URL, which is going to be for now "https://api.github.com/users" which just gets I think it's like thirty user. Ultimately we're going to search for users and get specific ones, but for now we're just going to get these first thirty. axios deals with "promises" from js, -so we can use the ".then()" method and inside, we will just console "res.data". 3:08 we are going to comment this out, since we are going to be using the "async" and "await" syntax, so comment out line below and "componentDidMount()" method
//     // axios.get('https://api.github.com/users').then(res => console.log(res.data))
//   }

//HTTP Requests & Updating State - 3:14 Same code above, but refactored to async, lets create a variable called "res" for response and you can console.log(res.data) to get the same thing. Now what we want to do, is to put our users that come back, into our app state of our App component, which we don't have yet. So go right below class App extends Component
 async componentDidMount(){
//HTTP Requests & Updating State - 4:35 We are going to change "loading to true". Now, when you're changing state, you can't directly change it. Like, I can't say "this.state.loading = true", that's not the way we do it with react. We have to, at least with class based components, use "this.setState();"  and then in the parameters, we can pass in an object with the part of the state we want to change, which is loading and we want to change it to True. 5:12 after we get the response "res", we want to reset the state. If we get the response, from the await, we then set our users to "res.data" that we got from res, after which, we want to set loading, back to false. 5:45 Brad shows the react dev tools. 
    this.setState({loading: true});
//Events & Search Component - 2:57 Now for us to use our key and secret key in our environment, at the end of the link we input "?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&{process.env.REACT_APP_GITHUB_CLIENT_SECRET}" and inside the variable it's "process.env"
    const res = await axios.get('https://api.github.com/users');
    // console.log(res.data);
    this.setState({users: res.data, loading: false})
 } 


//Passing Props Up & Search - 2:33 create the searchUsers arrow method. Once this fires off, since we passed in "this.state.text", or the text inputted from the search, it will be passed into here. 3:06 reiteration by brad how this is all working! 3:39 Now we want to make a call to that endpoint that I showed you, and then we can add the query, which is similar to what we did up in the componentDidMount() method and 3:51 we need to use async await, since it's an arrow function, we will add async before the text, rather before the function. Then we are going to copy the res variable and this.setState as above, except in the url we are going to have a "search/users?q=${text}". NOTE 5:06 he comments out the componentDidMount function, then tries it out. you should note that Github api had an update, and we no longer query. So here on out, we are not going to be getting searches. Supposedly, this is solution: https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969828#questions/13400350. 6:40 explain again how it all works, don't forget to set loading to true. (7:33 go to Search.js)
searchUsers = async (text) => {
  this.setState({loading: true})
  console.log(text)
  const res = await axios.get('https://api.github.com/search/users?q=${text}');
    this.setState({users: res.data.items, loading: false})

}



//Clear Users From State - 1:46 here we will input a clearUsers arrow function, this one is going to be simple since we are clearing out the state. For now, I set it to the users from Github. Later I will set it back to the clearing of users, that I commented out. FIX!! 2:19 he explains how everything is called.  2:57 We only want this to show, if there is actual users. There is a few ways to do this,  but for now lets create a prop and pass it off in Search, so scroll down.
clearUsers = async () => {
  this.setState({users: [], loading: false});
  // const res = await axios.get('https://api.github.com/users');
  // this.setState({users: [], loading: false});
}


//Alert State & Component - 2:00 Now we are going to create the setAlert method. He talks about how this isn't the best way of going about things, but this is for showing how things are done. For the method, we are going to have two things being sent in, it's the msg and the type, like we made in Search.js. 2:48 in the state object we are going to have another predefined state called "alert". We will set this alert to "null" by default and when we do have an alert, it's going to be set as an object with a message and type. 3:20 Now we are setting the actual method up, we are going to have a setState which is going to set the alert to the msg and type being passed in. This isn't going to display anything, it's just putting the alert into the proper state. note: you can also do "{msg, type}" instead and it will work. (4:29 Create a file called "Alert.js" in the components/layout folder, go to Alert.js) 
setAlert = (msg, type) => {
  this.setState({ alert: { msg, type}});
//Alert State & Component - 7:53 Since the alert doesn't go away, we want to give it a certain amount of time 7:59 go to setAlert and put in a "setTimeOut" method to have it time out.  which takes in a function, we'll put in the arrow function and then whatever we want to happen, which I just want to set the state of alert. So setState() and in there, I want to set the alert value back to null, which is its original value. I want this to happen in five seconds after we show the alert. So I'm going to put a comma here and put in 5000 milliseconds and you can change that if you want. So now what happens if we go and we click that we add, please enter something, but after five seconds, it should go away.

  setTimeout(() => this.setState({alert: null}), 5000);
}


  render(){
//Clear Users From State - 6:46 Here we decided to destructure users and loading. So instead of "this.state.loading" and "this.state.user", we just have "users" and "loading". Lastly we can turn "this.state.users.length" to "users.length". (END OF VIDEO)
const {users, loading} = this.state;

  return (
// 1:32 Here we will place the "Router", 1:47 What we have now, on the page, we are going to make that the "home route", the "problem" is that we have a couple of components in the router like Search, Alert, Users. We could create another page "home" and just embed these, but just to show how, we can have multiple components in a single route, using Switches.



// Components, Props & PropTypes -  2:52 we also want to add a couple of class names to navbar and "bg-primary". This is working because of the custom CSS file we brought in, we could use Bootstrap or whatever we wanted to.(3:29 go to Navbar.js) 
    <div className = 'App'>
{/* Components, Props & PropTypes -  2:29 to insert it , we can just put in our custom tag, like a component name (Navbar), we also want to change the tags from div to nav*/}
{/*4L24 we want to include the property or "prop" into Navbar and we are going to create one by just inputting "title = 'Github Finder' "  and in order to use this prop, what we would do is (4:36 go to Navbar.Js)*/}

{/* Components, Props & PropTypes - 5:40 What we can do is just delete the "title = 'Github Finder' icon = 'fab fa-github '" and then (5:58 go back to Navbar.js) */}
      {/* <Navbar title = 'Github Finder' icon = 'fab fa-github ' /> */}
      <Navbar  />
{/*Lists & Passing State With Props - 2:29 here we would of had our UserItem, and instead we have our Users. ( 2:39 go to Users.js)   */}
      {/* <UserItem /> */}
    <div className="container">
{/*Lists & Passing State With Props - 7:42 Simply put a container right here and move the move users up into that container. (END OF VIDEO) */}

{/*Alert State & Component - 7:05 Right here want to input the Alert, in the Alert component we want the prop with the state, all passed in.  */}
    <Alert alert = {this.state.alert} />

{/* 2:23 Here we are going to put a route here, wrapped in a Switch. The Route is going to have a path, and before the keyword "exact" because we want the exact path */}


{/*Events & Search Component - 1:49 here we will bring in Search, right above users and if we look at the site, it's there. 1:59 It doesn't do anything at all because we have no event or anything like that. Now, when we have a form in react, usually we're going to want to attach state to the input. (2:06 go to Search.js)   */}
    <Search 
    searchUsers = {this.searchUsers} 
    clearUsers = {this.clearUsers} 
    showClear = {users.length > 0 ? true : false}
    setAlert = {this.setAlert}/>
{/*Passing Props Up & Search - 2:10 we are going to be passing the prop searchUsers, like we named it's going to point to a method in this file, so go above the method and create that method.*/}
{/*Clear Users From State - 1:36 just like we did with the search users, we need to embed our props into the component. with a "clearUsers = {this.clearUsers}" then scroll up to create new method.*/}
{/*Clear Users From State - 3:21 pass in the "showClear" prop, we will be passing in a terenary operator for the logic. Which will pass in true for the prop if there is more than 0 users showing, and false if not. (3:55 go to Search.js to add this proptype and method) */}
{/*Alert State & Component - 1:36 We want to setAlert to the method of "setAlert", which we are going to be creating under the clear users method..*/}

{/*HTTP Requests & Updating State - 6:46 So now that we have those users in state, what we want to do is pass those down into our users component through props. Pass in loading = {this.state.loading} and user = {this.state.user}, 7:25 NOTE: if you are not getting data back from the api, you may have exhuasted your requests, which you get like 50, unless you get an API key. (8:03 go to Users.js) */}
      <Users loading = {loading} users = {users}/>
    </div>

    </div>
  );
  }
}


export default App;
