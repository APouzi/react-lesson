import React, { useContext } from "react";
import UserItem from "./UserItem";
// Spinner Component & Refactoring - 4:28 now we need to bring in the spinner
import Spinner from "../layout/Spinner";
// Spinner Component & Refactoring - 5:35 Since we have users and loading as props, we should bring in our prop types and go to the bottom
// import PropTypes from 'prop-types'
import GithubContext from "../../context/github/githubContext";

// Spinner Component & Refactoring - 3:19 New file made, changing class based component to function, 3:50 we could just pass in "props" but it's better to destructure it so we don't have to change alot of code and then we can change "this.props.users.map" to "users.map" since it's already destructured, we also don't need a render.
const Users = () => {
// Spinner Component & Refactoring - 4:48 what we will do is an if statement that asks if loading is true, if so, then return Spinner component. in the else, we are going to copy and paste the other return we had before.

// 1:22 First, we want to import the GithubContext and then we want to define it in the function for us to use this "useContext". Now we have access to everything in Github Context (users, user, repos, loading, searchUsers). All because we imported that and 
const githubContext = useContext(GithubContext);

//2:38 We want to destructure "loading and users" and make it equal to the defined githubContext. Then delete the "{ users, loading }" from the parameters being passed in since our props are being handled by the contextAPI. Since this stuff is no longer coming from "app.js". ( 4:01 go to App.js and to clearUser() ) 
const {loading, users} = githubContext
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};


//7:42 Remove propTypes entirely and it's imports. (8:04 go to githubState.js)
// Spinner Component & Refactoring - 6:04 here we will bring in propTypes, camel case. Inside there, we have users with an array that is required or "ptar" shortcut and loading with the "ptbr" shortcut for bool required. (END OF VIDEO)
// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired,
// }

export default Users;
