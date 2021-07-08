// Spinner Component & Refactoring - 00:47 this is going to be an arrow functional component, with the extention we can do "rafce" shortcut, for export at the bottom.
import React, {Fragment} from 'react'
//  Spinner Component & Refactoring - 00:59 we want to bring in the spinner and we can import images because of the "webpack", how react is under the hood. 1:27 lets also import a fragment with the React import.
import spinner from './spinner.gif'

const Spinner = () => 
// Spinner Component & Refactoring - 1:35 we are going to be returning a Fragment instead of a div, because it's a ghost element and we just want the spinning gif. Inside there, we want an image with a source of the spinner, we want some styling too with Width and margin adjusted, display set to block. 2:39 cool thing about arrow functions, is that we don't need to return anything if there is no other JS, cool tip. (2:57 go to Users.js)
        <Fragment>
            <img src={spinner} alt="Loading..." style = {{width: '200px', margin: 'auto', display: 'block'}} />
        </Fragment>
    


export default Spinner

