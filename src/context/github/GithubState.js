//Implementing Context - 3:35 So this in here is going to be our initial state also is going to be basically our actions, like when we search users and we make a request to GitHub that's going to go in here as opposed to writing in our App.js. We're going to be using something called types and if you're familiar, if you're familiar with Redux, a lot of this stuff is going to make sense to you.
//Implementing Context - 4:25 So with types, let's create a file. This is going to go in the context folder, but not in GitHub, because the types are relevant to all contexts that we create. So I'm going to create a file here called "types.js" and types are really nothing more than just variables of strings that you can use, that you can call to change your state within your reducer. (4:50 go to types.js)

//Implementing Context - 5:37 lets import React and the userReducer hook. So we want to import Axios. We're not going to have to make requests right from our app component anymore. We want to bring in our context, our GitHub context.
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
//Implementing Context - 6:26 We also want to bring in the types we want to use.
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

//Implementing Context - 6:56 We also want to create our intial state, or default state. 7:48 So this GitHub state is going to include all of our actions n, in order to basically dispatch "useReducer" hook here. So we will say "const []", the array takes "state" and "dispatch" and then put in the "useReducer()" pass in the GithubReducer and initialState. Alot of this is boilerplate.
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
//Create Reducer & Actions - 1:55 Right here, where we made the comment for Search Users, we paste the method.
  const searchUsers = async (text) => {
//Create Reducer & Actions - 3:12 Now we go from "setLoading(true);" to "setLoading();"
    setLoading();
    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

//Create Reducer & Actions - 3:25 after this we don't need "setLoading", he will show why in a second. 3:27 delete "setUsers(res.data.items);", and have the us "dispatch to the reducer", with the type of "SEARCH_USERS". we want to send a payload.  the payload is the data we want to send and that's going to be the response data, so "res.data". 3:56 so two things are happening here, we have the "searchUsers()" and it calls setLoading(), which dispatches the type of SET_LOADING to the reducer  (Which we're going to create now) Then it makes the request and then it dispatches the type of search users with the data. And our reducer is going to be responsible of putting this into our state and sending it down to any components that need it. (4:22 go to githubReducer.js)
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };


  // Get User
//Moving User State To Context - 9:06 Here we will be getting  
  const getUser = async (username) => {
//Moving User State To Context - 9:11 setLoading doesn't need a value, the dispatcher sets the value to true. This setLoading() in here basically just dispatches to the reducer's setLoading(), which sets the loading value to "true".
      setLoading();
      const res = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
      }
      );
// //Moving User State To Context - 9:26 we want to dispatch here, since all these functions/actions will end with a dispatch. so remove the setUser and setLoading. Which is the singular user, that comes from the endpoint above. (9:49 go the reducer)
      // setUser(res.data);
      // setLoading(false);
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    };

   
  //Get Repos
 //Moving Repos State To Context - 00:57 paste the getUserRepos here. "setLoading(true); > setLoading();".
 const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`, {
    headers: {
      Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
    }
    );
//Moving Repos State To Context - 1:17 isntead of having the two methods, like we had before, we want to dispatch(), like we always do. that returns an object with "type: GET_REPOS, payload: res.data". 1:38 go to the githubReducer.js
    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  };

 
  //Moving User State To Context - 4:47 Here we paste the "clear users" function. Now we want to do something a little different here. With all our actions, we want to dispatch to our producer. So we have a type called "CLEAR_USERS". So I just want to dispatch() and dispatch an object with the type of CLEAR_USERS. (5:19 go to the githubReducer)
  const clearUsers = () => dispatch({type: CLEAR_USERS});
  // // Clear Users
  // const clearUsers = async () => {
  //   setUsers([]);
  //   setLoading(false);
  // };


  // Set Loading
//Create Reducer & Actions - 2:10 The first thing we want to do is set our lading to true, but we don't have that function yet. Lets make it. Now, all we want this to do, this set loading is dispatch to our reducer. So we do that with the dispatch that was pulled from the useReducer hook and what we dispatch is an object{}, that has a "type". it has to have a type. You can send a payload with data if needed, but for for this, we don't actually need a payload. We just need the type which is going to be SET_LOADING, from types. the reducer is going to catch that, We need to basically handle that within the reducer.
  const setLoading = () => dispatch({ type: SET_LOADING });

//Implementing Context - 9:10 After we write the comments of the functions above we continue. What we want to "return" here is the "provider" or <GithubContext.Provider> because we basically have to wrap our entire application with the provider. Now, this provider is going to say, let's just do that. This provider is going to take in a bunch of props, which is going to be in one value. We want to pass in anything that we want available to the entire app, such as users and we can get that from "state.users". 10:16 Now, any methods or action methods we create here, like search users and so on, we're also going to want to pass those. I haven't created those yet, so I'm not going to pass them in just yet.

//Create Reducer & Actions - 9:53 if we want to actually use "searchUsers()" action, what we have to do is go down to the Provider and pass it in as just "searchUsers", that way it's avaible in the value of the context. 10:20 if we want to use that method in any component, all we have to do is bring in the context, initialize it, and then call whatever piece of state or whatever action we want that's associated with that context.

//Moving User State To Context - 8:33 Add in clearUsers to the gitHub state, for the application to be able to access it. It's clearing it from the app level state, rather than the app state level component (Moving User State To Context - 8:30 go to App.js). 
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser, 
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
//Implementing Context - 10:28 Here we need to pass in "props.children" because we are going to wrap our entire application in this Provider
};

//Implementing Context - 10:41 Here lets export default Github State (10:50 go to App.js)
export default GithubState;

//Create Reducer & Actions - 11:23 When we go to the site and do a search(it's not going to show anything in the UI, since we haven't implemented context where the search results appear), go to the dev tools we see that the users are full and they are in our main app level state, the GithubState. We can use the searchUsers anywhere by bring in the import, intializing it and so on. 