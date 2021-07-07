//Components, Props & PropTypes - 1:03 I'm going to start off with with a Class-Based component and then I'll talk about state and a little bit and in functional components and the difference and all that. Instead of typing out what App.js has, we can use the ES7 React/Redux extention, the one we are going to use is "rce" which is going to be a class based componet that exports at the bottom. The name of the clas is going to be the file name. (2:16 go to App.js)
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {
//Components, Props & PropTypes - 6:00 what we can do is add an object with the title and icon. 6:45 Whatever you write in App.js to pass in <Navbar />, that is going to overwrite defaultProps
static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

//Components, Props & PropTypes - 7:07 prop types, to use them, we need to import them. there is a shortcut we can use to bring in the import "impt" which will create: import PropTypes from 'prop-types', and we declare these like this:
//Components, Props & PropTypes - 8:34 he tries to pass in something that isn't a string and it will give him an error because of this, it's a type check. We will be using these often
static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

    render() {
        return (
//Components, Props & PropTypes - 3:30 go to fontawesome.com/start copy the link to paste into index.html, in the head tag, above the title. Then bring it in to use it here. Now, we don't want to use Navbar as the title and we can just change the title here but, what we can do is use something called "props". "props" are properties you can pass into a component from outside, (4:24 go to App.js) 4:42 now we need to use the prop we passed in, the way we would do that is with "this.props.whateverName" and 5:12 now we want to use a prop for the icon too, so we remove the "'fab fa-github '" and (5:20 go to App.js ), then come back and pass in the new icon prop into the "className =" . (5:40 go to src/App.js) ,
            <nav className = "navbar bg-primary">
               <h1><i className ={this.props.icon}/>{this.props.title}</h1> 
            </nav>
        )
    }
}

export default Navbar
