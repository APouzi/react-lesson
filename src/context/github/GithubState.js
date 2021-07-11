//Implementing Context - 3:35 So this in here is going to be our initial state also is going to be basically our actions, like when we search users and we make a request to GitHub that's going to go in here as opposed to writing in our App.js. We're going to be using something called types and if you're familiar, if you're familiar with Redux, a lot of this stuff is going to make sense to you. 
//Implementing Context - 4:25 So with types, let's create a file. This is going to go in the context folder, but not in GitHub, because the types are relevant to all contexts that we create. So I'm going to create a file here called "types.js" and types are really nothing more than just variables of strings that you can use, that you can call to change your state within your reducer. (4:50 go to types.js)

//Implementing Context - 5:37 lets import React and the userReducer hook. So we want to import Axios. We're not going to have to make requests right from our app component anymore. We want to bring in our context, our GitHub context. 
import React, { userReducer} from 'react';
import axios from 'axios';
import githubContext from './githubContext';
//Implementing Context - 6:26 We also want to bring in the types we want to use.
import {SEARCH_USERS, SET_LOADING,CLEAR_USERS,GET_USER, GET_REPOS} from '../types'


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }


//Implementing Context - 6:56 We also want to create our intial state, or default state. 7:48 So this GitHub state is going to include all of our actions n, in order to basically dispatch "useReducer" hook here. So we will say "const []", the array takes "state" and "dispatch" and then put in the "useReducer()" pass in the GithubReducer and initialState. Alot of this is boilerplate.
    const [state, dispatch] = userReducer(GithubReducer, initialState);

    // Search Users
    // Get User
    // Get Repos
    // Clear Users
    // Set Loading


//Implementing Context - 9:10 After we write the comments of the functions above we continue. What we want to "return" here is the "provider" or <GithubContext.Provider> because we basically have to wrap our entire application with the provider. Now, this provider is going to say, let's just do that. This provider is going to take in a bunch of props, which is going to be in one value. We want to pass in anything that we want available to the entire app, such as users and we can get that from "state.users". 10:16 Now, any methods or action methods we create here, like search users and so on, we're also going to want to pass those. I haven't created those yet, so I'm not going to pass them in just yet.

    return <GithubContext.Provider>
            value = {{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading

            }}

{/*Implementing Context - 10:28 Here we need to pass in "props.children" because we are going to wrap our entire application in this Provider */}
    </GithubContext.Provider>
}

//Implementing Context - 10:41 Here lets export default Github State (10:50 go to App.js)
export default GithubState;
