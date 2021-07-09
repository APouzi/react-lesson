//Single User Component & Data - 3:16 This is actually going to be a class based component, so it's going to be an "rce" shortcut
import React, { Component } from 'react'

//Single User Component & Data - 3:23  It's not going to have any state, but will use a lifecycle method, we need to use "componentDidMount" to fire off that "getUser" function we created in App.js. (3:41 go to App.js)
export class User extends Component {

//Single User Component & Data - 8:01  Lets add the "componentDidMount" method here, so that this fires off right away when this is loaded. Inside the method we are going to call this.props.getUser method, and the way we get the user is with "this.props" then attach "match.params" and then the user we want. https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969858#questions/12484250. Brad also explains how this is all connected here.
componentDidMount(){
    this.props.getUser(this.props.match.params.login);
}

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
            hireable
          } = this.props.user;
//Single User Component & Data - 10:44 We also should pull out loading

          const {
              loading
          } = this.props;

        return (
            <div>
             <h1> {name}  </h1>
            </div>
        )
    }
}

export default User
