//Repos & RepoItem Component & Data - 4:37 So repos is going to be pretty simple. We're just basically going to create a list. We're going to map through the repos that are passed in. So, lets create a functional component with "racfe". It's going to pass in "repos", destructure them with "{repos}". inside return we are just return repos.map(repo => <RepoItem repo ={repos}), 5:01 inside the map, what we are doing is we are calling each item "repo", and then we want to display a repo item component where we pass in the individual repo "{repo}". We do need a key in here, since it's a list and for the key, we will use the repo's id. 
import React from 'react'
import PropTypes from 'prop-types'
//Repos & RepoItem Component & Data - 5:57 The repo item doesn't exist, so we need to bring it in. (6:07 go to RepoItem.js)
import RepoItem from './RepoItem'

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo ={repo} key={repo.id} />)
}

//Repos & RepoItem Component & Data - 5:34 Since it's a prop, we should put in a propType and don't forget the import.

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
