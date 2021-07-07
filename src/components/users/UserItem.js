//Getting Started With Component State - 1:40 and we are going to generate a class based component with RCE shortcut. Now, one thing that this does is it adds an export at the top and bottom, which we don't need the top one.
import React, { Component } from "react";

class UserItem extends Component {
// //Getting Started With Component State - 2:29 Now, there's a couple of ways to add state to a class based component. You can use a constructor if you need to. I wouldn't recommend it unless you need to use a constructive for something else. Basically, it's just a function that's going to run when the component runs. and it would require you to use the "super()" function for it to run.
//   constructor() {
//     super();
//     console.log(123);
// //Getting Started With Component State - 3:12 We could specify our state in here with the a JS object, grab the url from the api "https://api.github.com/users" since we are only hard coding this. later on we will be fetching this through HTTP.
//     this.state = {
//       id: "id",
//       login: "jombo",
//       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//       html_url: "https://github.com/mojombo",
//     };

//Getting Started With Component State - 7:07 We don't actually need a constructor to define our state,  so what we could do is comment out the code and under that, we can post the simplier version. We get the same result as above, with constructor. 
    state = {
        id: "id",
        login: "jombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    };
  

  render() {
//Getting Started With Component State - 7:25 we keep repeating "this.state" in the code below, what we could do instead is use a destructure, or pull the values out of the state. So what we could do is "const {}", And what the curly braces signify is just destruction, it pulling stuff out from that object, and to pull out what we want is by passing in what we want (login, avatar_url, html_url). Then we can get rid of the "this.state" in the curely braces, it just looks neater. in the next video, we are going to create a users component to warp and loop through all the different useritems (END OF VIDEO)
    const { login, avatar_url, html_url} = this.state;

    return (
//Getting Started With Component State - 1:54 let's just output UserItem like that just so we can bring it into our app and output it, just so we can bring it into our App.js (1:59 go to App.js)
//Getting Started With Component State - 4:05 so we have the stuff in our state, lets use it. First lets add a classname of "card text-center". Now we are going to be pulling in the Avatar, when we want to use something from state, we are going to to use "this.state.avatar_url" for the image, with the className = 'round-img'. 4:54 You might want to add inline style as well, and you can do that in react by using double curly braces, you can't use two words, like background-color, instead use backgroundColor, and you would use a string of "red", so it's different to regular CSS. 5:52 underneath the image, h3 tag with the login.Under that, have a div with an a tag, that is going to have an href of the home_url, or profile. All of this is stored in the COMPONENTENT LEVEL STATE. 
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div><a href={html_url} className = "btn btn-dark btn-sm my-1"> More </a></div>
      </div>
    );
  }
}

export default UserItem;
