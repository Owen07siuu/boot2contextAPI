import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { About } from "../components/About";
import { Login } from "../components/Login";
import { Errorpage } from '../components/Errorpage';
export const AppRouter = () => {
  return (
   <Router>
    {/*Menu de navegacion*/}
        <header className='header-nav'>
            <nav>
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
                <li>
                    <NavLink to='/login'>Identificte</NavLink>
                </li>
            </ul>
            </nav>
        </header>
    {/*configurar rutas*/}
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Inicio' element={<Home />}></Route>
        <Route path='/articulos' element={<Articles />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
        <Route path='/acerca-de' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Errorpage />}></Route>
    </Routes>
   </Router>
  )
}
