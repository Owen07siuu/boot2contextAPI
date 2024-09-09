import { useState } from 'react'

import './styles/App.css'
import { Router } from 'react-router-dom'
import { AppRouter } from './routing/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <AppRouter />
    </div>
  )
}

export default App
