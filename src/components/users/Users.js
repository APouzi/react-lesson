import React from "react";
import UserItem from "./UserItem";
// Spinner Component & Refactoring - 4:28 now we need to bring in the spinner
import Spinner from "../layout/Spinner";
// Spinner Component & Refactoring - 5:35 Since we have users and loading as props, we should bring in our prop types and go to the bottom
import PropTypes from 'prop-types'


// Spinner Component & Refactoring - 3:19 New file made, changing class based component to function, 3:50 we could just pass in "props" but it's better to destructure it so we don't have to change alot of code and then we can change "this.props.users.map" to "users.map" since it's already destructured, we also don't need a render.
const Users = ({ users, loading }) => {
// Spinner Component & Refactoring - 4:48 what we will do is an if statement that asks if loading is true, if so, then return Spinner component. in the else, we are going to copy and paste the other return we had before.
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

// Spinner Component & Refactoring - 6:04 here we will bring in propTypes, camel case. Inside there, we have users with an array that is required or "ptar" shortcut and loading with the "ptbr" shortcut for bool required. (END OF VIDEO)
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users;
