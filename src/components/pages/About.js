//React Router Setup - 4:15 shortcut "rafce", since it's not going to have state. We are going to put some Html markup and we don't need a div, so we can bring in a fragment and replace that div with the fragment. (4:57 go to App.js)
import React, {Fragment} from 'react'

const About = () => {
    return (
        <Fragment>
            <h1>About This App</h1>
            <p>App to Search Github Users</p>
            <p>Version: 1.0.0</p>
        </Fragment>
    )
}

export default About
