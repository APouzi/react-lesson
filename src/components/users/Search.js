//Search Class to Function With useState Hook - 3:24 now we need to bring in "useState" hook since we cant use the "state = {}" ordeal. to do that we need "{useState}", remember not default.
import React, { useState } from "react";
import PropTypes from 'prop-types'


//Search Class to Function With useState Hook -  00:22 we have a class based component with one piece of state, which I think is a good is a good way to introduce the useState hook. 1:02 First thing we do is change this to a functional based component. We could do "function" but we use arrows here for now. 1:22 We also don't need state anymore either. 

//Search Class to Function With useState Hook - 2:27 since props are coming in through the parameter of the Search, we don't have to do any of the "this.props...." since we can just pass it into Search parameters. While we are passing it through there, we can actually destrustructer the props. "searchUsers, showClear, clearUsers" which are all being passed in as "props". Time to start removing what we don't need because of this change
const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
//Search Class to Function With useState Hook -  3:36 we will define our state here and we only have one, which is text. so that way it works, is we destructure it. So how we do that is simply by inputting what state we want, "text", and then the next parameter is the method we create to change the state, usually "setText", since text is what we are changing. After all that, we set all that to "useState()" and inside that, whatever the default state value is going to be. 
  const [text, setText] = useState('');

//Search Class to Function With useState Hook - 2:07 We are still going to have an "onSubmit" here and an "onChange" here, but in order for us to have a function within a function, we need to put const in front. 

//Search Class to Function With useState Hook - 5:46 Here we can make "this.state.text" to "text". Since setAlert is another property that is being passed in, we can put that into our destructure, that is in the parameter of Search() component. We can also remove all the "this.props" from seAlert and searchUsers. Then to set text to "nothing" at the last line of onSubmit() we do a "setText({text: ''})". (END OF VIDEO)
const onSubmit = (e) => {
    e.preventDefault();
console.log(text)

    if(text === ''){
        setAlert('Please enter something', 'light')
    }else{
      searchUsers(text); 
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

{showClear && (<button className="btn btn-light btn-block" onClick = {clearUsers} >Clear</button>)}
      </div>
    );
    }

//Search Class to Function With useState Hook - 1:35 get rid of the static propTypes from the top and paste them here and then, instead of "static propTypes", it's now going to be "Search.propTypes"
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}


export default Search;
