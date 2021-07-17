// User Class to Function With useEffect Hook - 00:33 The first thing we need to do is remove Component, since we are going to change this to a function. Then we want to bring in "useEffect()"
import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import  Repos from "../repos/Repos"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Moving User State To Context - 11:42 just like we did with the other components that are using anything from the context, whether it's an action or a part of the state, we need to bring in the context. We also need to use the "useContext" hook to bring into react. 12:28 We also need to get rid of "loading, user, getUser," from "const user = ({..." because now we want to create a const for all these, for the "githubContext". 
import GithubContext from "../../context/github/githubContext";

// User Class to Function With useEffect Hook - 00:42 lets convert this to a functional component, arrow function. 

//User Class to Function With useEffect Hook - 1:33 We are going to leave in the "const {}" with the giant list starting with "name, company...". But we still need to destructure it users and such.  We could just destructure that giant list in the parameter, but instead, we will just leave this outside of the parameter and leave the destructuring in the method.  2:12 We also want to bring in "match", so it goes from "this.props.match.params.login" to "match.params.login".
const User = ({ match}) => {
//Moving User State To Context - 12:42 scroll down and define the githubContext with the three variables. 12:45 He begans explaining how user, loading and getUser is working. We want to put it here, since we are using "getUser" in useEffect. 13:49 we also forgot to set githubContext = useContext(); like we do in other places. 14:24 don't forget to put getUser in GithubState.js, GithubContext.Provider was the place.  
const githubContext = useContext(GithubContext);
const {getUser, loading, user, repos, getUserRepos } = githubContext;

//User Class to Function With useEffect Hook - 3:05 the last thing we want to do, is how do we get "componentDidMount"? We use useEffect. 3:19 Inside the useEffect, when we pass in the arrowFunction, do not forget the {} after the "=>" arrow, because you don't want to run stuff directly in there. 
//User Class to Function With useEffect Hook - 4:14 IMPORTANT There is something to be mentioned, so if you look at the network tab, it keeps making requests, it's going on a loop. Basically, it runs on any update and when we run get user or get repos, it's updating the component so it constantly runs in a loop. The way we can stop that is simply by adding an empty set of brackets. In the brackets, we can define special conditions on when we want this to run. Like if the repos change, we can put that in there. Since we only want it to run one iteration, we just put an empty bracket in there. 
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);
//User Class to Function With useEffect Hook - 6:15 in the console, it says "React Hook useEffect has missing dependencies: 'getUser'" plus some other ones for "getUserRepos". So basically, when something changes with the "useEffect", it wants you to add it as a dependency. So it's saying add the "getUser" and "getUserRepos", which are running in useEffect as a dependency in here like this, get user and so on. However, if we do that, it's going it's going to do the same thing that just happened. We're going to keep getting that loop. So there is cases where are there are cases where you're going to get that message where you don't want to actually add those as dependencies. So to get rid of that warning, you can just put a simple comment in here and you can say he has lent dash, disable dash next line. To get rid of that, simply use this comment at the end and it will go away: //eslint-disable-next-line, also don't listen to the warning and people complain about the warning. (END OF VIDEO)



    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;


//User Class to Function With useEffect Hook - 2:25 We don't need any of "const { loading, repos } = this.props;" since we already destructured loading and repos. Delete that. 2:38 get rid of the render.
  

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable: {""}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "150px" }}
              alt = ''
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className = "btn btn-dark my-1">Github Profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                            <strong>Username: {login} </strong>
                            </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong>Company: {company}</strong>
                            </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong>Blog: {blog} </strong>
                            </Fragment>}
                    </li>
                </ul>
          </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
      <Repos repos = {repos}/>
      </Fragment>
    );
}
//Moving Repos State To Context - 2:31 We no longer need to pass in "getUserRepos, repos," in the user function component. We no longer need propTypes here. 2:45 Put "repos" and "getUserRepos" into line 16 that is passing in those actions into githubContext. 2:49 explains how this works and how we pass this stuff into the user html and stuff dynamically. 3:14 go to App.js to remove the "useStates", except setAlert one. (End of Video)

// //User Class to Function With useEffect Hook - 1:00 underneath the function, we want to put in the propTypes and then chain it to User. "User.propTypes". 
// User.propTypes = {
//     loading: PropTypes.bool.isRequired,
//     user: PropTypes.object.isRequired,
//     repos: PropTypes.array.isRequired,
//     getUser: PropTypes.func.isRequired,
//     getUserRepos: PropTypes.func.isRequired,
// };

export default User;
