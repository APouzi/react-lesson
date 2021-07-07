// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//-----------------------------Section 2 -------------------------------
// Intro To JSX & Fragments - 00:00 go to AppSection2.JS

// Expressions & Conditionals in JSX - 00:00 go to AppSection2.JS



//-----------------------Section 3: Components, State & Props--------------------------

//Components, Props & PropTypes - 00:00 in src, we are going to create a folder called "components" and we can structure components folder how we like but here we are going to break it up, so put in a folder inside there called "layout", inside layout we are going to create the navbar component, common convention is to call files with an uppercase when it comes to components, so "Navbar.js". (1:00 go to components/layout/Navbar.js)

//Getting Started With Component State - 00:00 we're going to talk a little bit about component level state. Component level state means that your state is contained within a single component. So we're going to be creating this user item component and we're going to add some state to it, which later is actually going to be app level state, and we're just going to pass it in as props.For now, I'm going to add some state, including some stuff from the GitHub API. I'm not going to actually fetch data from the API yet, I'm just going to hardcoded. 00:55 Some of things that we want is this Avatar, the login, which is the username. I also want to link to the GitHub profile.  1:00 So over here you can see this is just a page from the API. This is the users, it's an array of objects of GitHub users and inside the Array, we have login, id, avatar_url and html_utl, which is the link to the profile. Those are the four things that I want. For now, like I said, I'm just going to hardcoded them into the components state. 
//Getting Started With Component State - 1:22 So let's jump into this code and in components folder, I'm going to create a new folder and I'm going to call this "users". Anything that has to do with GitHub users is going to go in here. In there we are going to create a file called UserItem.js () (1:38 go to UserItem.js) 

// Lists & Passing State With Props - 00:00 All right, so up to this point, we just have a user item component that has the state that includes a single user and that's not really what we want. we want a users component that includes an array of users and we can loop through and then output one of these user item components for each one. Rather than just having a single user item embedded right in the app component. So I'm going to create a new file in components/users and I'm going to call this "Users.js" (00:34 go to comoponents/users/User.js)