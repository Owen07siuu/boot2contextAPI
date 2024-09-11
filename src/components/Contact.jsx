import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Contact = () => {

  const { user } = useContext(Context);
  return (
    <div>
      <h1>Contacto</h1>
      <p>Esta es la pagina de contacto</p>
      <p>Estos son los datos de <strong>{user.phone}</strong></p>
    </div>
  )
}
