
import './App.css'
import Login from './Component/login'
import Profile from './Component/profile'

import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>

    
     <h1>Hello World</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
