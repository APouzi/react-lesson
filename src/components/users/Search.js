//Search Class to Function With useState Hook - 3:24 now we need to bring in "useState" hook since we cant use the "state = {}" ordeal. to do that we need "{useState}", remember not default.
import React, { useState, useContext } from "react";
// import PropTypes from 'prop-types'
import GithubContext from "../../context/github/githubContext";
import AlertContext from '../../context/alert/alertContext';


//Search Class to Function With useState Hook -  00:22 we have a class based component with one piece of state, which I think is a good is a good way to introduce the useState hook. 1:02 First thing we do is change this to a functional based component. We could do "function" but we use arrows here for now. 1:22 We also don't need state anymore either. 

//Search Class to Function With useState Hook - 2:27 since props are coming in through the parameter of the Search, we don't have to do any of the "this.props...." since we can just pass it into Search parameters. While we are passing it through there, we can actually destrustructer the props. "searchUsers, showClear, clearUsers" which are all being passed in as "props". Time to start removing what we don't need because of this change
//Moving User State To Context - 6:07 showClear and clearUsers don't need to be passed in anymore, remove them. Scroll down to onClick = {clearUsers}
const Search = () => {
//Create Reducer & Actions - 8:58 this is where we are going to define the githubContext and set that to "useContext", and pass in the context we want to use, which is "GithubContext". Import in useContext with react.
   const githubContext = useContext(GithubContext)
//Alert Context Workflow - 10:49 we are going to copy and paste, except change alert.
   const alertContext = useContext(AlertContext)

//Search Class to Function With useState Hook -  3:36 we will define our state here and we only have one, which is text. so that way it works, is we destructure it. So how we do that is simply by inputting what state we want, "text", and then the next parameter is the method we create to change the state, usually "setText", since text is what we are changing. After all that, we set all that to "useState()" and inside that, whatever the default state value is going to be. 
  const [text, setText] = useState('');

//Search Class to Function With useState Hook - 2:07 We are still going to have an "onSubmit" here and an "onChange" here, but in order for us to have a function within a function, we need to put const in front. 

//Search Class to Function With useState Hook - 5:46 Here we can make "this.state.text" to "text". Since setAlert is another property that is being passed in, we can put that into our destructure, that is in the parameter of Search() component. We can also remove all the "this.props" from seAlert and searchUsers. Then to set text to "nothing" at the last line of onSubmit() we do a "setText({text: ''})". (END OF VIDEO)
const onSubmit = (e) => {
    e.preventDefault();
console.log(text)

//Alert Context Workflow - 11:08 this setAlert(), all we have to do is add "alertContext." to it. (END OF VIDEO)
    if(text === ''){
       alertContext.setAlert('Please enter something', 'light')
    }else{
//Create Reducer & Actions - 9:35 if we go down to where we call searchUsers, it's part of the "githubContext" variable we called. (9:50 go to GithubState.js)
      githubContext.searchUsers(text); 
      setText('');
    }
    
    
}


//Search Class to Function With useState Hook -  4:16 onChange, we no longer do "this.setState" when we want to change the state, instead we call the method we had set for the state, which was "setText". 4:29 we no longer have to do "{[e.target.name]: e.target.value}", which is passing in an object. We just pass in what we want to set the text to, which is going to be the event target of the value in the search.
const onChange =(e) => setText(e.target.value);


//Search Class to Function With useState Hook -  2:12 There is no more render, since it's not a class anymore and instead we just need a return. Props also are not going to come from "this.props" remember with functions, props come in through the parameter of the function. Instead of using props.
  
//Search Class to Function With useState Hook - 3:00 we can delete "const {showClear, clearUsers} = this.props;" because of the change. we also want to get rid of "render()" since this isn't a class based component and we can just have the return.


//Search Class to Function With useState Hook - 4:47 we no longer use "this.state.text", we can simply use "text". we can also remove "this." from onChange, since it's no longer a class, this also applies to "onSubmit".
    return (
      <div>
        <form action="form" onSubmit = {onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange = {onChange}
          />
          <input
            type="submit"
            value="Seach"
            className="btn btn-dark btn-block"
          />
        </form>

{/*Moving User State To Context - 6:33 We no longer have have showClear. All we need to make sure of, is that the users have something in them. The users array must be greater than zero, so "githubContext.users.length > 0 ". On top of that, we need to get the onClick right, now it's just {clearUsers} we need to make it "{githubContext.clearUsers}". We also need to remove the two methods from propTypes. (7:40 go to Users.js*/}
{githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick = {githubContext.clearUsers} >Clear</button>)}
      </div>
    );
    }

// //Search Class to Function With useState Hook - 1:35 get rid of the static propTypes from the top and paste them here and then, instead of "static propTypes", it's now going to be "Search.propTypes"
// Search.propTypes = {
//   setAlert: PropTypes.func.isRequired,
// }
//Create Reducer & Actions - 8:28 We no longer have searchUsers as a prop. So the way that we do this is with the use context hook. 8:29 So I'm actually going to get rid of search users from the props (get rid of SearchUsers from {searchUsers, showClear, clearUsers, setAlert} up at the top, on line 9). We can also get rid of it from the propTypes. 8:39 what we want to do now is import in our Context (import GithubContext from "../../context/github/githubContext";). 

export default Search;

// 10:28 we removed some stuff here and there, including proptype stuff. Imported AlertContext