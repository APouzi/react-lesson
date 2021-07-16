//Create Reducer & Actions - 4:29 We want to import all of our "types", so go to githubState and copy the "import" of types
import {SEARCH_USERS, SET_LOADING,CLEAR_USERS,GET_USER, GET_REPOS} from '../types'

//Create Reducer & Actions - 4:37 our reducer is just a function. So we're going to export a default arrow function and a reducer takes in two things the "state" and "action". Remember, when we dispatch that object to the reducer, it has a type and a possible payload. Now, what we want to evaluate here is the type. We want to put a JavaScript switch, and we are asking the "action.type". We are going to have multiple cases,  if it's default, basically with no case, we're just going to return the state as is, "return state".

export default (state, action) => {
    switch(action.type) {

//Create Reducer & Actions - 6:31 lets add our searchUsers case, we want to return the current state, with the spread operator. The users are going to be filled with the payload. 6:46 Remember, we made this request (const res = await axios.get(...) ), in searchUsers() method in GithubState.js and we got resource data(res.data) back from our request and we're sending that to the reducer as the payload. So, we want to add "action.payload", which is all the users pulled from the Github api. lastly, set loading to false.   Now we want to replace a couple of things, since we don't have our searchUser in app.js anymore. (7:50 go to App.js) 
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }

//5:21 Now we are going to create a case for CLEAR_USERS,return the spread operator of the state, and set the users to an empty array and then loading to false. In order to call clear users, we have to go into the component we're using it in (6:03 go to Search.js)
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }

//Create Reducer & Actions - 5:24 for any other cases, an example, we're going to say "case SET_LOADING:"  
        case SET_LOADING:
//Create Reducer & Actions - 5:31 So for set loading, we want to return our state now. We want to return whatever is already in the state, state is immutable, meaning We can't just reassign it. We have to basically make a copy of it and then add any additions or changes to it. Now, the way we can copy it is with the spread operator(...). We can just say triple dot and then "state" and that's going to copy whatever is in the current state. Now what SET_LOADING does, is it just sets the loading value to true(loading: true).because it's initially false. 6:10 If we look in our GitHubState.js, loading is false. But when we make a request such as searchUsers, we want to set it to true, and that's what this is going to do. (setLoading() in searchUsers calls setLoading the method, which dispatches the SET_LOADING to the Reducer(here) and it sets loading to true. 
            return {
                ...state,
                loading: true
            }
        default: 
        return state;
    }
}