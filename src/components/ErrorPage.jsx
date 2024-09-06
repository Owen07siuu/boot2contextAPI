import React from 'react'
import '../styles/error-page.css';
export const Errorpage = () => {
  return (
    <div id='custom-body-class'>
        <section id='not-found'>
            <div id='title'>404 error page</div>
            <div className='circles'>
                <p>404 </p>
                <p>
                    <small>¡pagina no enconrtada!</small>
                </p>
                <span className='circle big'></span>
                <span className='circle med'></span>
                <span className='circle small'></span>
            </div>
        </section>
    </div>
  )
}

