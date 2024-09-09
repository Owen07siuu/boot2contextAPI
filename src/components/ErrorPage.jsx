import React from 'react'
import styles from '../styles/error-page.module.css';
import { useEffect } from 'react';
export const Errorpage = () => {
  useEffect(() => {
    // Guardar el estilo original del body
    const originalBodyClassName = document.body.className;

    // Aplicar la clase del body de la página de error
    document.body.className = `${styles.errorPageBody}`;

    // Limpiar el estilo del body al desmontar el componente
    return () => {
      document.body.className = originalBodyClassName;
    };
  }, []); // Arreglo de dependencias vacío, significa que solo se ejecutará una vez.
  return (
    <div id={styles.customBodyClass}>
        <section id='not-found'>
            <div className={styles.circles}>
                <p>404 <br />
                    <small>¡pagina no enconrtada!</small>
                </p>
                <span className={`${styles.circle} ${styles.big}`}></span>
                <span className={`${styles.circle} ${styles.med}`}></span>
                <span className={`${styles.circles} ${styles.small}`}></span>
            </div>
        </section>
    </div>
  )
}

