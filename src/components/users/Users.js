//Lists & Passing State With Props - 00:35 generate a class based component here, remember to delete the ""
import React, { Component } from 'react';
//Lists & Passing State With Props - 3:08 Now instead of just outputting a div for each of the users in the state, I want to output a user item, which is the component we just created for this. So let's do that. Let's bring into users, the Useritem.js we made before, since it's in the same folder it would be "./UserItem"
import UserItem from './UserItem';
class Users extends Component {
// //Lists & Passing State With Props - 00:41 We are going to have some state, and this time we are going to have a users array, instead of one, we have multiple users.  what we want to do is go down to our render and we want to loop through these users and create what's called a list
//     state = {
//         users: [
//             {
//               id: "1",
//               login: "mojombo",
//               avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//               html_url: "https://github.com/mojombo"
//             },
//             {
//               id: "2",
//               login: "defunkt",
//               avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
//               html_url: "https://github.com/defunkt"
//             },
//             {
//               id: "3",
//               login: "pjhyett",
//               avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
//               html_url: "https://github.com/pjhyett"
//             }
//           ]    
//     }
//HTTP Requests & Updating State - 8:05 we no longer need the hardcoded state here! Since the users are now coming in as props 



    render() {
        return (
//Lists & Passing State With Props - 1:19  we will have this div and then inside this div, let's put an expression, where we get the "users" from the state, but we put them into a map. Now this function has a parameter that represents each user, which I'm going to call "user", and then I'm going to use an arrow and I'm going to say for each user I want to render, for now, a div that accesses the users login. Ultimately, I want to render a user item component, if we save this, it's not going to show on the site because we need to bring this User.js in the App.js (2:15 go to App.js)
           
//Lists & Passing State With Props - 6:20 now for the users, we want to use grid system instead. I want to show you that you can add you can add styles, already showed you how you can add an "inline styles", but you can actually set a variable to a styled object. So we want a style attribute and we want to set it to "{userStyle}" and if you set it like this, you don't need double curly bracelets
            <div style = {userStyle}>
 {/*Lists & Passing State With Props -  2:39 notice on the side, it says each child in lists should have a unique key prop. So whenever you have a list, which is what this is, you need to have a unique key to get rid of that warning. So in our users component, the div inside the map, we would add a key and we could use user.id as the key because those are unique. So if I save that now, we don't get that warning.  */}
 {/*HTTP Requests & Updating State - 8:17 Now all we have to do is change "state" to "props", now we get the entire list from the github API, next we do spinner component (END OF VIDEO)  */}
                {this.props.users.map(user => (
//Lists & Passing State With Props - 3:34 then we replace the div here, with the UserItem component instead. We get rid of "{user.login}" and instead, we want to pass in the entire user. because remember, what we're doing is looping through the users in the state for each one, "user" assigned in map represents that single user, that is being looped through. 4:28 we see that it's only showing one user, (4:34)
                    <UserItem key = {user.id} user = {user} />
                ))}
            </div>
        )
    }
}

//Lists & Passing State With Props -  6:35 down below the entire class, we can create a variable and set it to some curly braces and inside our styling, for the grid. It's going to have a grid temple columns and it's going to be set to "repeat(3, 1fr)" so it's 3 even columns. We do have a container within the global style sheet and I want that wrapped around everything not a navbar. (7:37 go to App.js)
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
