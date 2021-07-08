//Events & Search Component - 00:22 type in "rce" and write up the html. 1:28 save that and bring that to App.js (1:32 go to App.js)
import React, { Component } from "react";

export class Search extends Component {
//Events & Search Component - 2:17 So we are going to create state object, have a field for text and it's going to be empty by default. 2:25 then we go to the input and put a "value = {this.state}"
  state = {
    text: "",
  };
//Events & Search Component - 5:50 If we don't want to use Arrow functions, watch this video on what you would have to do. in short use them arrow functions.
onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text)
}



//Events & Search Component - 3:06 now we need to create the method up here called "onChange", which takes in an "event" parameter that we call "e". Then inside we want this.setState and inside the parameter, we want "text" to be set to whatever we type in, we can access that with the event " e.target.value". 3:51 if we go to react dev tool, we can see that the state is now whatever we type. 4:04 so this is not a piece of state that we want to be app level. It's it's just relative to the component itself. So even when we implement context or if we were to use redux, when you have forms, your form inputs are going to be component level state. 4:21  there's a little trick here. I mean, we could leave it like this just because we only have one input field or one text field, but let's say we had like "name, email address, phone number". If we had a bunch of different fields, we don't want to have a separate onChange() for each one. So instead, what we could use is "this.setState({[e.target.name]: e.target.value});" from "text: e.target.value". 5:15 because we don't have other JS we can remove the curly braces from the onChange
onChange =(e) => {
    this.setState({[e.target.name]: e.target.value});
}


  render() {
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
      </div>
    );
  }
}

export default Search;
