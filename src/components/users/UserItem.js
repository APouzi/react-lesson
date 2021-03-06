//Stateless Functional Components - 1:26 we no longer need this "component"
import React from "react";
//Stateless Functional Components - 5:12 Now we do have the user Prop being passed in the UserItem arrow function. So we should add that to prop types. So I'm going to import prototypes.
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// class UserItem extends Component {
//Stateless Functional Components - 00:39 first we are going to be refactoring this classbased function into a functional based component, first we comment out the class based version of the component and then just simply replace it with a function. We could just do a "function UserItem() {.." but instead, brad like to use the arrow functions "const UserItem = () =>"

//Stateless Functional Components - 4:13 So instead of destructing the props in the function, we can destructer it in the parameter, by taking out the user from props and then taking out the specific data from the user. Then obviously remove the "const { login, avatar_url, html_url} = props.user;" below. (4:35 go to Navbar.js) 
const UserItem = ({ user: { login, avatar_url, html_url } }) => {


//Stateless Functional Components - 1:09 since it's a function, we don't need the render, so remove that and it's brackets. 
  // render() {

//Stateless Functional Components - 1:36 Now that we are not using class, we don't use "this" keyword, props are now going to be passed into the function parameters: "const UserItem = (props) =>...". We will come back later to add a prop type, since we have a user prop. (2:15 go to Navbar.js)
    // const { login, avatar_url, html_url} = props.user;
    
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
{/* Single User Component & Data - 6:45 Right now we just have "href={html_url}", which goes to the external site. We don't want this. So first, we want to import "Link". So what we are going to do is change the "a tag" to a Link and the "href" to "to". The link is going to be dynamic, so we use backticks plus the url with the "&{}" for the github api's login. 7:49 So now we have to do is pull this user name or this login from the URL and then call that getUser method. (7:57 go to User.js)  */}
        {/* <div><a href={html_url} className = "btn btn-dark btn-sm my-1"> More </a></div> */}
        <Link to={`/user/${login}`} className = "btn btn-dark btn-sm my-1"> More </Link>
      </div>
    );
  // }
};

//Stateless Functional Components - 5:18 Here we will say UserItem.Proptypes. Now, the the user prop that's being passed in here is an object. So we need to set user to a proptype object, it is required. For React Redux snippets extension, I can use "ptor" to have the object be required, we can do "ptar" for it to be an array required. (END OF VIDEO)
UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem;
