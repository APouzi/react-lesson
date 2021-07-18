//Alert Context Workflow - 6:42 we're going to import  SET_ALERT and REMOVE_ALERT.
import { SET_ALERT, REMOVE_ALERT } from "../types";

//Alert Context Workflow - 7:02 Then lets create our function, it's going to have an export in front. we're going to have a switch which is going to evaluate action.type. Inside we are going to have default which is going to return state as is. For the case of SET_ALERT we return the payload, which is the alert object(msg and type). Then we are going to have a case of REMOVE_ALERT, which will return null. (8:20 go to Alert.js)
export default(state, action) => {
    switch(action.type){
        case SET_ALERT:
            return action.payload
        case REMOVE_ALERT:
            return null
        default:
            return state;
    }
}