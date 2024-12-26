import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=5
  let [counter, setCounter]=useState(15)//Hooks provide the functionality to take controll the chnages in the UI and propogate in the UI
  const addValue=()=>{
    
    setCounter(counter+1);
  };

  const removeValue=()=>{
    setCounter(counter-1);
  };
   
  
  
  // Hooks in React are functions introduced in React 16.8 that allow functional components to use state, lifecycle methods, and other features previously available only in class components. 
  // They simplify React development by making code more readable, reusable, and maintainable. Hooks like useState manage state, while useEffect handles side effects, eliminating the need for class components or complex patterns like HOCs. 
  // This makes functional components powerful and efficient for modern React applications.








  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value</h2>
      <button onClick={addValue}>Add value{counter}</button>
      
      <br />

      <button onClick={removeValue}>remove value{counter}</button>
    </>
  );
}


export default App
