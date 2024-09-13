import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';

export const Login = () => {

  //Extraer user y setuser del contexto usando usecontext
  const { user, setUser } = useContext(Context);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  //metodo para validar username y que no permita espacios y mayusculas
  const handleUsernameV = e => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase();
    setUsername(value);
  };

  //metodo para validar el nombre y cambiar primera letra en mayuscula
  const handleNameV = e =>{
  const value = e.target.value
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
  setName(value);
  }

  //metodo para validar el numero
  const handlePhoneV = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhone(value);
  }

  // Metodo que se ejecuta al hacer clic en enviar el formulario
  const saveData = e => {
    e.preventDefault();

    //crear el objeto del usuario a partir de los datos del formulario
    let identified_user = {
      username: e.target.username.value,
      name: e.target.name.value,
      phone: e.target.phone.value
    }

    console.log(identified_user);
    //actualizamos el estado del usuario
    setUser(identified_user);
  };
  return (
    <div>
      <h1 className='text-center'>Login</h1>
      <form className='login' onSubmit={saveData}>
        <input type="text" name='username' placeholder='username' value={username} onChange={handleUsernameV} required  />
        <input type="text" name='name' placeholder='name' value={name} onChange={handleNameV} required />
        <input type="text" name='phone' placeholder='phone' value={phone} onChange={handlePhoneV} required />
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}
