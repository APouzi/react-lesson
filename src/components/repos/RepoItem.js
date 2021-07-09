//Repos & RepoItem Component & Data - 6:07 lets for a rafce shortcut, this is going to pass in the single repo and we want to import proptypes and then put them below.
import React from 'react'
import PropTypes from 'prop-types'


const RepoItem = ({repo}) => {
//Repos & RepoItem Component & Data - 6:30ish? This is going to have a class name of card. Inside it's going to have an href that will take you to the outside and text is going to be repo's name. (7:22 go to User.js)
    return (
        <div className = 'card'>
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
