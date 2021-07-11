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

// Stateless Functional Components - 00:00 So in this video, we're going to be converting a couple of Class-Based components to functional because they no longer have state, so they don't need to be classes. Now, ultimately, by the end of this project, we're going to have all functional components because with the hooks that have been introduced to react, we can have state within functional components. But traditionally, this is how it when you would have stateless functional components and then you'd have Class-Based, where you needed to use state or lifecycle methods and I'll go over lifecycle in a little bit. (00:35 go to UserItem.js)

// HTTP Requests & Updating State - 00:00 So right now we have just some hardcoded users inside of our state and our users component, which isn't really ideal. For one thing, we need to fetch the real users from the GitHub API. For another, we want to store any app level state such as our users in our App.js, since we're not using Context api or Redux or anything like that, we don't have a centralized store or anything like that. The next best thing is to have it in your App.js, that way you can easily send state down to components through props. Much like we did with sending the users down into the UserItem as a prop. (00:42 go to App.js)

// Spinner Component & Refactoring - 00:00 Download the spinner gif from the resources from this lesson. So, inside of src/components/layout, paste in the gif. Create a new component/file called "Spinner.js" (00:42 go to Spinner.js)

// Environment Variables - 00:00 we're going to get our API client I.D. in secret for GitHub so that we don't run out of requests and I'm also going to show you how to create environment variables, because that's where we want to store something like that. Now, to register your GitHub app, you just search for GitHub register app and it's the "Oauth" one, "https://github.com/settings/applications/new", just fill out the name you can use, localhost 3000 for your home page and callback and then register. Once you do that, you'll get a client ID and a client secret. (00:50 create a file in your root folder called ".env.local" ),  when you deploy, you want these very you want to add these as environment variables on your server. This this ".env.local", you don't want to put in like a public repository. It's in the gitignore created by npm (1:38 go to .env.local and type in  "REACT_APP_GITHUB_CLIENT_ID='' " and "REACT_APP_GITHUB_CLIENT_SECRET=''") for it to take effect, we need to restart server. (2:48 go to App.js)
// NOTE: GitHub Discontinuing Auth Using Query Params Starting Nov. 2020 https://www.udemy.com/course/modern-react-front-to-back/learn/lecture/14969814#questions/10199398
// Either way, if you ever need to store global variables, you can use .env.local.


// -------------------------------------------Section 4: Events, Passing Props, React Router & More -----------------------------------------------------

// Events & Search Component - 00:00 Now we work on the search form component. (00:22 create Search.js, go to it.)

// Passing Props Up & Search - 00:00 so now we want to be able to search for users based on what we enter in our in our search form. So with the GitHub API, we can make a request to the endpoints of search/users and then we can add a parameter of "q", which is the query string that we want to search for, and that would be whatever we put in the input field. So the way that we want to do this, I mean, we could put it in our search component, but I want to have everything centralized in our App.js (00:34 go to Search.js)

//Clear Users From State - 00:00  What I like to do is have a clear button here so that we can just kind of set the state back to its default, its default state of just an empty array and they only want the clear button to show if there's users in the state. when we first come to the page, it should not be a clear button, So we need to add that functionality as well. (00:33 go to Search.js)

//Alert State & Component - 00:00 We will set up an alert system. if we search here with without entering anything, I want to show an alert. (00:12 go to Search.js)

//React Router Setup - 00:00 So in this video, I want to set up our react router so that we can have different routes, because right now we just have our components embedded right into our main app component and in the terminal, 00:20 we want to input "npm i react-router-dom" and this will install the latest version of React (00:43 go to App.js)

// Single User Component & Data - 00:00 Now we want to have the User layout. So when we hit "more", we don't want the page to go to an external site, we want to get the api data and build our own page. We are going to do this with the Github API. First, lets create the function to make the request for the github, and then make the user component. (1:02 go to App.js)

// User Component UI & Layout - 00:00 We got all the data we need to build the user UI,  (00:33 go to User.js) 

//Repos & RepoItem Component & Data - 00:00  so now we want to display the users repositories, I want to display it down here and we're going to have separate components for that, well have a repos component, and then we'll have a repo item for each one. The endpoint is going to be slightly different, in that it's going to end with a "/repos" at the end of the user. Let's create the function first (00:33 go to App.js). 
//Repos & RepoItem Component & Data - 9:35 As far as functionality, app is finished. Instead of having everything crammed in this app, just like we've done, we can use a state manager and we can use the we could use redux if we wanted to. But I'm going to go ahead and use the context API. But before we do that, before we get into context, I'm going to convert everything to a functional component and I'm going to introduce a couple hooks to one is useState, which which allows you to have state in your functional component and then also "useEffect", which will allow us to basically mimic lifecycle methods. So, for instance, inside our user component, we're calling these methods when the component mounts now we can't use component did mount inside of a functional component, but there's a hook called use effect that will give us the same kind of functionality.


// -------------------------------------------Section 4: Events, Passing Props, React Router & More -----------------------------------------------------

// Overview of Hooks & Context - 00:00 In Word

// Search Class to Function With useState Hook - 00:00 (00:20 go to Search.js)

// User Class to Function With useEffect Hook - 00:00 Now we work on the User.js and turning that into a functional based component. the reason why we made User.js in a class based component was because we wanted to use "componentDidMount()", which fires off when the components mount and so does all the code inside the method. (00:33 go to User.js)

// App Class to Function Component - 00:00 (00:11 go to app.js) 

//Implementing Context - 00:00 Now we're going to start to look at the context API, we're also going to look at a couple new Hooks which are useContext and useReducer. The idea here is to give you an alternative to redux. I'm not going to say redux is bad because I think that it's needed for very large applications but, the Context API gives you a really nice solution for small to medium sized applications when you want to manage app level state and there's a lot of different ways to implement it. In fact, in the react community right now, it seems that there's a lot of confusion on standarized ways on how to implement it. I've come up with a pretty nice folder and file structure that I think is scalable. This is Brad's opinion on best way to handle Context Api hooks. 
//Implementing Context - 1:10 create a new folder in src called "context", We basically have we're going to have a context for anything to do with GitHub, which is the users, the repos, all that stuff. And then we're also going to have an "alert context" for our alerts, which is going to be very small in terms of state and stuff like that. But if you have a big application, you might have a profile context, you might have a blog post context. Different resources should be broken up into different contexts.
//Implementing Context - 1:58 inside context, create another folder called "github". Inside github, we are going to have three main files, one is "githubContext.js". Another is, "GithubState.js" which basically all of our actions are going to go. So when we call and action to fetch data or anything like that, that's going to go in here. We also need a reducer, which is a function that basically decides what's going to happen to your state based on an action. So we're going to create another file here called "GitHubReducer.js". 2:43 So the way that I'm doing things is each resource has these three files. (2:50 go to githubContext.js)

//Create Reducer & Actions - 00:00 now we want to basically move everything from App.js to our Context into our state. And we want to have a reducer that's going to basically change the state of certain components that need changing when something happens. 00:21 If you look at the react tools. Essentially there is nothing in the user array, because we haven't implemented them within our application. One by one we move all the methods like "searchUsers" and move them to GithubState and then we connect to conect within each component using "useContext" hook and we have to have some reducer functions. (1:35 go to App.js)