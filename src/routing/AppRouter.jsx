import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Login } from "../components/Login";
import { Errorpage } from '../components/Errorpage';
import logo from  '../assets/logo.png';
export const AppRouter = () => {

    const { user, setUser } = useContext(Context);

  return (
   <Router>
    {/*Menu de navegacion*/}
        <header className='header-nav'>
        <nav>
            <div className='logo'>
                    <img src={logo} alt="logo" className='logo-img' />
                </div>
            <ul>
                <li>
                    <NavLink to='/'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/articulos'>Articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/acerca-de'>Acerca de</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>Contacto</NavLink>
                </li>
                {user.username !== null ? (
                <>
                <li>
                    <NavLink to='/' id='text-username'>{user.username}</NavLink>
                </li>
                <li>
                    < a href='/' onClick={e =>{
                        e.preventDefault();
                        setUser({username: null})
                    }} >Cerrar Sesion</a>
                </li>
                </>
                ) :(
                <li>
                    <NavLink to='/login'>Identificte</NavLink>
                </li>
                )}
            </ul>
            </nav>
        </header>
    {/*configurar rutas*/}
        <Routes>
        <Route path='/' element={<div className='content'><Home /></div>}></Route>
        <Route path='/Inicio' element={<div className='content'><Home /></div>}></Route>
        <Route path='/articulos' element={<div className='content'><Articles /></div>}></Route>
        <Route path='/contacto' element={<div className='content'><Contact /></div>}></Route>
        <Route path='/acerca-de' element={<div className='content'><About /></div>}></Route>
        <Route path='/login' element={<div className='content'><Login /></div>}></Route>
        <Route path='*' element={<Errorpage />}></Route>
        </Routes>
   </Router>
  )
}
