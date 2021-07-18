import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

//Alert Context Workflow - 8:24 We are no longer passing in "{alert}" as a prop. We need to bring in our AlertContext 
const Alert = () => {
//Alert Context Workflow - 8:52 We need to bring in our context. Just like we did with the GitHub context, we're going to initialize it. We also need to bring in useContext into our import in React
const alertContext = useContext(AlertContext);

//Alert Context Workflow - 9:35 to make it easy for ourselves, lets destructure and pull out alert and assign it to alertContext, so we don't have to keep rephrasing certain things. 9:54 remove "{alert}". (10:08 go to Search.js)
const {alert} = alertContext;
    return (
        alert !== null && (
            <div className = {`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle">
                    {alert.msg}
                </i>
            </div>
        )
    )
}

export default Alert;

//Alert Context Workflow - 00:20 We only have this one method and one piece of state. However, this gives you an idea of how you can break your global state up into resources. You don't have to squish everything into one single context. 00:38 In the context folder, I am going to create a folder called "alert" and inside there we are going to create the same three files that github does. "AlertState.js", "alertContext.js", "alertReducer.js".  1:05 Our context is simple, copy from the "githubContext.js" and paste it into "alertContext.js" (1:14 go to alertContext.js) 