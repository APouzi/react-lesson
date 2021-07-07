import React, { Component } from 'react';
//Components, Props & PropTypes - 2:16 here we want to import the components we are going to be using.  
import Navbar from './components/layout/Navbar';
//Getting Started With Component State - 1:59 just so we can bring it into our App.js, we are going to be doing an import (which vscode does automatically) and 2:15 just for now we are going to put <UserItem /> under the navbar. 2:20 Now this should show, go to your running server, (2:24 go to UserItems.js)
import UserItem from './components/users/UserItem';
import './App.css';


class App extends Component {

  render(){
  return (
//Components, Props & PropTypes -  2:52 we also want to add a couple of class names to navbar and "bg-primary". This is working because of the custom CSS file we brought in, we could use Bootstrap or whatever we wanted to.(3:29 go to Navbar.js)
    <div className = 'App'>
{/* Components, Props & PropTypes -  2:29 to insert it , we can just put in our custom tag, like a component name (Navbar), we also want to change the tags from div to nav*/}
{/*4L24 we want to include the property or "prop" into Navbar and we are going to create one by just inputting "title = 'Github Finder' "  and in order to use this prop, what we would do is (4:36 go to Navbar.Js)*/}

{/* Components, Props & PropTypes - 5:40 What we can do is just delete the "title = 'Github Finder' icon = 'fab fa-github '" and then (5:58 go back to Navbar.js) */}
      {/* <Navbar title = 'Github Finder' icon = 'fab fa-github ' /> */}
      <Navbar  />
      <UserItem />
    </div>
    );
  }
}


export default App;
