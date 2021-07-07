//Stateless Functional Components - 3:47 lastly, we want to get rid of the component on top of here since we don't use these. (3:52 go to UserItem.js)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Stateless Functional Components - 2:24 there's some additional things we're going to have to do here because we are using default props and prop types, which right now are inside the class.  We're going to first change this to a function so we no longer need extends component. First we comment out the class based version and put in functional version, with passing in props
// class Navbar extends Component {
const Navbar = ({icon, title}) => {
//Stateless Functional Components - 4:37 here we can remove "(props)" and change it to "({icon, title}) " and then change "className = {this.icon}" to " className = {icon}". Now we have functional components for useritem and navbar. (5:08 go to UserItem.js) 


//Stateless Functional Components - 3:24 we also don't need render, we just need the return, we also need to get rid of "this."
    // render() {
        return (
            <nav className = "navbar bg-primary">
               <h1><i className ={icon}/>{title}</h1> 
            </nav>
        )
    // }
}

//Stateless Functional Components - 2:55  cut out the default and proptypes, and put it below the function, and instead of static "static defaultProps", we are going to put in the name of the component, which is Navbar.defaultProps
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


export default Navbar
