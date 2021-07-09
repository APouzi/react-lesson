//Events & Search Component - 00:22 type in "rce" and write up the html. 1:28 save that and bring that to App.js (1:32 go to App.js)
import React, { Component } from "react";
//Passing Props Up & Search - 7:40 now we need to add searchUsers as a proptype.  So we need to import proptypes here
import PropTypes from 'prop-types'


export class Search extends Component {
//Events & Search Component - 2:17 So we are going to create state object, have a field for text and it's going to be empty by default. 2:25 then we go to the input and put a "value = {this.state}"
  state = {
    text: "",
  };

//Passing Props Up & Search - 7:47 input the proptypes here, and have it so that searchUsers is a function required only. 
//Clear Users From State - 3:55  add the showClear proptype which is a bool required, scroll down to button tag
static propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}


//Events & Search Component - 5:50 If we don't want to use Arrow functions, watch this video on what you would have to do. in short use them arrow functions.
onSubmit = (e) => {
    e.preventDefault();
//Passing Props Up & Search - 00:39 We have to pass this up to the main App components through props. So the way that we can do that is by creating a method called searchUsers and passing in "this.state.text", then we want to clear the form after, with a searchUsers() method we will create. 1:22 searchUsers doesn't actually exist right now, so we have to pass that into <Search /> as a prop, since we are calling "this.props.searchUsers", we want to pass in "his.state.text". 1:37 so instead of sending a prop down, we're actually sending a prop up and this is the problem with not using something like context or redux is you can start to get, you know, three or four levels deep and you're just it's called prop drilling. You're sending things up and down through props and it gets kind of messy and you're going to see that but then later on, I'm going to show you how we can fix it. (1:57 go to App.js)
console.log(this.state.text)


//Alert State & Component - 00:20 underneath preventDefualt, we need to input logic for the alert. We will be asking about in if statement, if the state of the text is empty on submit, if so, then we want to set an alert. so we input "this.props.setAlert()" in which we will create that method and it's going to take in two parameters, the text and it's going to take a type, which is going to be "light" or light gray. For the "else" we want the other stuff we had, which was going to do the search. 1:13 Just like the rest of the proptypes, we need to set the proptypes, which is function required. (1:29 go to App.js)
    if(this.state.text === ''){
        this.props.setAlert('Please enter something', 'light')
    }else{
      this.props.searchUsers(this.state.text); 
      this.setState({text: ''})
    }
    
    
}



//Events & Search Component - 3:06 now we need to create the method up here called "onChange", which takes in an "event" parameter that we call "e". Then inside we want this.setState and inside the parameter, we want "text" to be set to whatever we type in, we can access that with the event " e.target.value". 3:51 if we go to react dev tool, we can see that the state is now whatever we type. 4:04 so this is not a piece of state that we want to be app level. It's it's just relative to the component itself. So even when we implement context or if we were to use redux, when you have forms, your form inputs are going to be component level state. 4:21  there's a little trick here. I mean, we could leave it like this just because we only have one input field or one text field, but let's say we had like "name, email address, phone number". If we had a bunch of different fields, we don't want to have a separate onChange() for each one. So instead, what we could use is "this.setState({[e.target.name]: e.target.value});" from "text: e.target.value". 5:15 because we don't have other JS we can remove the curly braces from the onChange
onChange =(e) => {
    this.setState({[e.target.name]: e.target.value});
}


  render() {
//Clear Users From State - 5:20  Here we will destructure our stuff. Now we can turn "this.props.clearUsers" to "clearUsers" and "this.props.showClear" to "showClear". (6:35 go to App.js to destructure there.)
const {showClear, clearUsers} = this.props;


    return (
      <div>
{/*Events & Search Component - 5:26  we're going to want in onSubmit, because right now we can just enter text into the into the field. so have that in the form field and have that equal to the "this.onSubmit" */}
        <form action="form" onSubmit = {this.onSubmit}>
{/*Events & Search Component - 2:15 So, for instance, we have an input here for the search text. */}
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
//Events & Search Component - 2:32 Now, if I save this and I go back, I actually can't type in here, OK? And the reason for that is because it's a controlled component. Basically, we have to have an onChange event for when we for when we type something in here. It needs to fire off and it needs to update the state because remember, this input is now attached to this state. So what we need to do is, add in onChange, and I'm going to set that to fire off a method called "this.onChange".
            onChange = {this.onChange}
          />
          <input
            type="submit"
            value="Seach"
            className="btn btn-dark btn-block"
          />
        </form>

{/*Clear Users From State - 4:19 We are going to wrap the button in logic to make sure it's showing or not. So if showClear is true and put the "&&" in with the button, this is how we do if statements with these. Comment out the earlier code below. 5:20 lets pull out showClear and other methods from the props, scroll up */}
{showClear && (<button className="btn btn-light btn-block" onClick = {clearUsers} >Clear</button>)}

{/*Clear Users From State - 00:35 put in a button with a class of "btn btn-light btn-block", insde this tag we will have a Clear and then a "onClick = " method call, that will call a method that we will create later. Now all I want this to do is call a prop method, a function that's attached to prop "this.props.clearUsers". 1:11 Since this is a prop, we add this to our proptypes. 1:20 Now, remember, when we're calling this props, clear users, we're sending this up, right? So we have to catch it in our App.js (1:27 go to App.js)
<button className="btn btn-light btn-block" onClick = {this.props.clearUsers} >Clear</button> */}
      </div>
    );
  }
}

export default Search;
