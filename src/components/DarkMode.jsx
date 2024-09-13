import React, { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Context } from '../context/Context';



export const DarkMode = () => {

    const{ isDarkMode, toggleDarkMode } = useContext(Context);


    //metodo para que se ejecuta al hacer clic en el icono
    const handleClick = () => {
        toggleDarkMode();
        localStorage.setItem('dark-mode', !isDarkMode);
    };
  return (
    <button onClick={handleClick} className='dark-mode-button'>
        {isDarkMode ? (
            <FaSun className='dark-mode-icon dark-mode-icon-sun' />
        ) :  (
            <FaMoon className='dark-mode-icon dark-mode-icon-moon' />
        )}
    </button>
  );
};
