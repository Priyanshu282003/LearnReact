import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App

// Definition: Props (short for properties) are used to pass data from a parent component to a child component.
// Read-Only: Props are immutable and cannot be modified by the child component.
// Unidirectional Data Flow: Data flows from parent to child only.
// Customization: Enables dynamic and reusable components by passing different values.
// Access: Props are accessed in the child component via the props object.




// React States: Key Points
// Definition: State is an object that stores a component's dynamic data and determines its behavior.
// Mutable: State can be updated using setState (class components) or useState (functional components).
// Triggers Re-rendering: Updating state causes React to re-render the component.
// Private: State is local to a component and not accessible by others unless passed via props.
// Managing State
// Class Components: Use this.state and update with this.setState.
// Functional Components: Use the useState hook.
