// 4:51  types are really nothing more than just variables of strings that you can use, that you can call to change your state within your reducer. So for instance, let's export a few consts. So basically, all of our actions have type search users, get user clear, get repos set loading, set alert and remove alert. Those are our types for this application and obviously, the bigger your app, the more functionality, the more actions, the more types you're going to have. (5:30 go to GithubState.js)
export const SEARCH_USERS = 'SEARCH_USERS';
export const GET_USER = 'GET_USER';
export const CLEAR_USERS = 'CLEAR_USERS';
export const GET_REPOS = 'GET_REPOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';