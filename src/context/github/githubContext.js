//Implementing Context - 2:53 The Context file is easy, all we are doing is intializing new Context. First we want to bring that in. 
import { createContext } from "react";

//Implementing Context - 3:11 Then we want to intialize our Github context with a "createContext" and after that, we want to do a "export default". (3:35 go to GithubState.js)

const githubContext = createContext();

export default githubContext;