import React, {Fragment} from 'react'
import Search from "../users/Search";
import Users from "../users/Users";
//Home & NotFound Components - 00:48 do a "rafce" shortcut and put in a fragment the react import, paste the Search/User imports. Then input the Fragement, with the Search and User components. 1:53 We don't need the return since we are directly returning the Fragment. (1:58 go to App.js)
const Home = () => {
    return (
        <Fragment>
            <Search/>
            <Users/>
        </Fragment>
    )
}

export default Home
