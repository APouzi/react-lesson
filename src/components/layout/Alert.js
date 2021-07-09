//Alert State & Component - 4:31 we are going to do an "racfe" so we get the export at the bottom. This function is going to take in the alert, which is an object with a message and type.we want to make sure that alert is not null in order to show this or else it'll just show the background without the text and other data.
import React from 'react'

const Alert = ({alert}) => {
//Alert State & Component - 4:59 inside the return, get rid of the div tags, we are going to say "as long as alert is not equal to null, then we want to show a div." Inside that div tag, we want some styling, so we are going to have to set the className to react curly brackets and inside those, we need backticks `` and set it to "alert alert-${alert.type}". Remember we are passing in "alert" and alert has the "type" we want
    return (
        alert !== null && (
            <div className = {`alert alert-${alert.type}`}>
{/*Alert State & Component - 6:14 inside the div want an i tag, with a className that has stlying and inside that, we want the message from the alert. We want this displayed in App.js (6:37 go to App.js) */}
                <i className="fas fa-info-circle">
                    {alert.msg}
                </i>
            </div>
        )
    )
}

export default Alert
