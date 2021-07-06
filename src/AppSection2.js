//Intro To JSX & Fragments - 4:50 Here we can input "Fragment" if we wanted to use "<React.Fragment>" but without "React"
import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
//Expressions & Conditionals in JSX - 1:53
 foo2() {
  return "outside the function" 
}

  render(){
//Expressions & Conditionals in JSX - 00:21 We are going to be inputting some conditionals and logic into here to show we can. So put a const named "name" with the value of john doe.
    const name = 'John Doe';
//Expressions & Conditionals in JSX - 1:27 We can even output a function. So lets create one called foo and have it return a string.
  const foo = () => 'bar';
//Expressions & Conditionals in JSX - 2:21 sometimes there are situations where we are fetching data from an api and alot of times we would have a loading variable and maybe we want to show a spinner. So we are going to create a const named loading and set it to True.
  const loading = false;
//Expressions & Conditionals in JSX - 2:50 Then we can do an if statement asking if Loading is True and if so, then have it produce an h4 tag and it will only have an h4 tag on the page and the code below.
    if(loading){
      return <h4>loading...</h4>
    }
//Expressions & Conditionals in JSX -3:20 a cleaner way of doing that would be to use a ternary operator and this time we are going to be using it inside the other return below.
    const loading2 = true;

//Expressions & Conditionals in JSX -4:33 There is also another way of doing conditional and that's with the "&&" symbol
    const showName = true;

//Intro To JSX & Fragments - 00:17 What we are returnin here looks like HTMl but is actually JSX. Which as brad calls it, syntatic sugar. Under the hood it's JS and you don't need to use JSX but should if you want to save time. There is some differences between JSX and HTML and one of them being "className = 'App' " 1:30 and the other one is "htmlFor = 'name'> Name,/label>"2:12 the jsx has to have one parent element, so if we put a "h1" or some other element under the div, we will get an error. So we would need to put that h2 inside that parent div. 
  return (
//Intro To JSX & Fragments - 3:33 We may not want the div or use the div whatsoever, then in that case, we would use a "<React.Fragment>", it's like a ghost element.
    // <React.Fragment></React.Fragment>
    <div className="App">
{/* 00:34 We are going to put an h1 take that says "hello" plus the name with the variable. We can also do "{1+2}" if we wanted to. Along with using methods so we can use something like "{name.ToUpperCase}"*/}
      <h1>Hello, {name}</h1>
{/* 00:50 We can put other logic in here */}
      <h1>other logic {1+2}</h1>
{/* 1:34 lets pass in that function to show it can be outputted */}
      <h1>function being passed in {foo()}</h1>
{/*1.56 since this method is outside the scope of the function and part of the class, we want to use "this"  */}
      <h1>Here is a method that is part of the class and {this.foo2()}</h1>
{/*Expressions & Conditionals in JSX - 3:40 here is the other way of doing a conditional */}
      {loading2 ? <h4>this loading2 function passing</h4> : <h4>this loading2 is false</h4>}

{/*Expressions & Conditionals in JSX - 4:45 Now lets just same we want to show the name part of this, if only "showName" is true with the "&&" symbols */}
      <h1> show the name of {showName && name }</h1>
    </div>
    );
  }
}


export default App;
