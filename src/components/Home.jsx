import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <h1>Inicio</h1>
      <p>Esta es la pagina de Inicio</p>
      <p>Bienvenido <strong>{user.name}</strong></p>
    </div>
  )
}
