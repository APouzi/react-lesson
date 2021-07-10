//Single User Component & Data - 3:16 This is actually going to be a class based component, so it's going to be an "rce" shortcut
import React, { Fragment, Component } from "react";
//User Component UI & Layout - 00:39 bring in the spinner component for us to have if we need to load to get data and we should bring in prop types and use the "impt" shortcut.
import Spinner from "../layout/Spinner";
//Repos & RepoItem Component & Data - 7:24 Bring in the repos, 8:00 make sure to put Repos into proptype, then scroll to bottom
import  Repos from "../repos/Repos"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Single User Component & Data - 3:23  It's not going to have any state, but will use a lifecycle method, we need to use "componentDidMount" to fire off that "getUser" function we created in App.js. (3:41 go to App.js)
export class User extends Component {
//Single User Component & Data - 8:01  Lets add the "componentDidMount" method here, so that this fires off right away when this is loaded. Inside the method we are going to call this.props.getUser method, and the way we get the user is with "this.props" then attach "match.params" and then the user we want. https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969858#questions/12484250. Brad also explains how this is all connected here.
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
//Repos & RepoItem Component & Data - 3:08 You could call the get repos from the repos component, but then you'd have to pass it up twice. That's that's called prop drilling when you keep passing up props through components, because we're actually going to embed the repos here, the repos component. So I'm just going to call it right when we call get user, which is up here in the componentDidMount. 3:42 Make sure to pass this into propTypes. 4:07 Now, we could just stick it right in the user component, but it's with react with any front end framework that's component base. You want to break everything up. So we want to create a new component, lets create a folder called "repos" and then two files inside called "Repos.js" and "RepoItem.js". (4:30 go to Repos.js)
    this.props.getUserRepos(this.props.match.params.login);
  }

//User Component UI & Layout - 1:16 Here we need to input the proptypes that we are bringing in. Scroll down.
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

//Single User Component & Data - 9:16 Let's actually pull out all the data we want from this.props.user, because remember, user is getting passed in as a prop. So within the render we are going to destructre the user that we just got with "getUser", this list that we are getting is from the github api.
  render() {
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
    } = this.props.user;
 //Single User Component & Data - 10:44 We also should pull out loading

    const { loading, repos } = this.props;

//User Component UI & Layout - 1:38 Here we need an if statement, asking that if the state of the loading prop is true, then we return a Spinner. 1:58 Now for the main content, we want to use a Fragment, so import that Fragment in and change the div out with a link. 2:20 Then import in Link, and that way we can have a back button and it does keep it's state.
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
{/*User Component UI & Layout - We want to have a checkmark, if the user is hireable and under that we are going to have a conditional. It's going to ask if the user is hireable or not, if so, we are going to have some styling with a checkmark if not, we are going to have a negative. This does work */}
        Hireable: {""}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
{/*User Component UI & Layout - 5:16 underneath that, we are going to create a card. We will have a className of round-img and a stlye of width*/}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
{/*User Component UI & Layout - 6:50 Since the parent of this is "grid-2", that means everything is in a grid that we put in it. 7:01 This is going to be the bio, the user might not have a bio, so we need a conditional. The conditional says that if there is a bio, then lets put a fragment. Under that we will have the link to their profile, externally.  */}
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className = "btn btn-dark my-1">Github Profile</a>
{/*User Component UI & Layout - 8:31 Next we want the company and website, not required so we do a check to see if there.  */}
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
{/*User Component UI & Layout - 10:55  Now we want the rest of the stuff, which is going to be the repos, likes and all that, so we need to create a card, and inside the card we are going to have abunch of "badges". like from bootstrap */}
        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
{/*Repos & RepoItem Component & Data - 8:18 Here we are going to be putting in our repos component and pass in the repos and make sure to put "repos" in the destructurer */}
      <Repos repos = {repos}/>
      </Fragment>
    );

  }
}

export default User;
