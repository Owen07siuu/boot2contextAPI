import './styles/App.css'
import { Router } from 'react-router-dom'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'
import { useEffect, useState } from 'react'

function App() {

const [user, setUser] = useState(() =>{
  const storeUser = localStorage.getItem("user");

  return storeUser ? JSON.parse(storeUser)  : {};
});

useEffect(() =>{
localStorage.setItem("user", JSON.stringify(user));
}, [user]);
  return (
    <Context.Provider value={{
      user,
      setUser
    }}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
  )
}
export default App
