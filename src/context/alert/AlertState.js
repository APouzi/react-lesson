import React, { useReducer } from "react";
//Alert Context Workflow - 1:45 Here we are going to be making some slight changes to the imports. 
import AlertContext from './alertContext';
import AlertReducer from "./alertReducer";
//Alert Context Workflow - 2:05 as far as types, the only two types we have are set alert and remove alert
import {
  SET_ALERT, REMOVE_ALERT
} from "../types";
//Alert Context Workflow - 2:35 Since the only piece of state is null (alert: null), we are just going to set the state of this to null. Also delete the other actions since we are only going to have one action/method.
const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

//Alert Context Workflow - 4:59 Here we want to paste in our "showAlert" into here. change it to setAlert. there's no reason not to because we don't have that you state method anymore. This is going to take in a message, a type and then we are going to dispatch(). Remember all our actions here, there are always going to dispatch an object to the reducer. The type is SET_ALERT and the payload is going to be an object with msg and type.
const setAlert = (msg, type) => {
    setAlert({ msg, type });
    dispatch({
        type: SET_ALERT,
        payload: {msg, type}
    })

//Alert Context Workflow - 5:48 We are going to have a setTimeout and inside we are going to have a dispatch, with an object with the type of remove alert., because we want to remove it after five seconds. 6:35 We also don't need Axios import anymore, since we aren't don't API requests. So now we just need to create the reducer to handle set alert and remove alert. (6:42 go to alertReducer.js) 
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);

  };

//Alert Context Workflow - 3:08 We are just going to have a Set Alert method here, so delete the other methods, change the provider from GithubContext to AlertContext. Remove all but two states inside. One is going to be Alert and we just return the entire state, since there is only one (null) and then we also have our method, which is going to be setAlert. Lastly the export default. So now in order to to use this, we need to wrap our component in the provider, just like we did with the GitHub state.(4:01 go to App.js)
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

