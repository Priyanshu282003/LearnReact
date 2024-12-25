import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  const username="Hello world"
  return(
    <div>
      <h1>Custom App!{username}</h1>
    </div>
  )
}
//here the MyApp act as a function but this is not a good and developer friendly way to write the code


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <MyApp/>//Question the myApp is fuction here then why it called by the 
    //jsx because the react use the bundler in it which is use as the syntax correctness 
    // and many more it is also called like the function MyApp()
  //The {username} is the  evaluate-expression  
  //The evaluation expression is the final output of the provided javaScript 
  // Behind the scene the babble inject into the code 
)
