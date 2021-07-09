//Stateless Functional Components - 3:47 lastly, we want to get rid of the component on top of here since we don't use these. (3:52 go to UserItem.js)
import React from 'react';
import PropTypes from 'prop-types';
//React Router Setup - 7:08 bring in Link for us to be able to use links, 7:10 the reason we use curly braces, is because this is not the "default" export. When you use "default" export like at the very bottom, then you wouldn't use the curly braces, React-DOM uses alot of none default exports, so we have to use curly braces.
import {Link} from 'react-router-dom';


//Stateless Functional Components - 2:24 there's some additional things we're going to have to do here because we are using default props and prop types, which right now are inside the class.  We're going to first change this to a function so we no longer need extends component. First we comment out the class based version and put in functional version, with passing in props
// class Navbar extends Component {
const Navbar = ({icon, title}) => {
//Stateless Functional Components - 4:37 here we can remove "(props)" and change it to "({icon, title}) " and then change "className = {this.icon}" to " className = {icon}". Now we have functional components for useritem and navbar. (5:08 go to UserItem.js) 


//Stateless Functional Components - 3:24 we also don't need render, we just need the return, we also need to get rid of "this."
    // render() {
        return (
            <nav className = "navbar bg-primary">
               <h1><i className ={icon}/>{title}</h1> 
               {/* The way we do this, is we don't actually use "a" tags for the links, because this is client side routing. 6:15 Brad shows why we don't want to do a tags, essentially, they will work but the problem will be that when we do searches, and we want to go back, they don't keep their state. 7:08 go to the top and import link*/}
               <ul>
{/*React Router Setup - 7:30 Here we input a Ul, the li's, then Links. Inside the links we have the paths we want, and we use "to" for the path. Now our state functions stay the same, when we go to "about" and back to homepage (END OF VIDEO) */}
                   <li>
                       <Link to = '/' >Home</Link>
                   </li>
                   <li>
                       <Link to = '/about' >About</Link>
                   </li>
               </ul>
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
