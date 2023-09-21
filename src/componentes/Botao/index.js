import React from 'react';
import styles from './Botao.module.css';


export default function Botao({children, onClick, botaocor}) {
    return(
        <div>
            <button 
                className={`${styles.botao} ${styles[botaocor]}`}
              
                onClick={onClick}
            >

                {children}
            </button>
        </div>
    )
}
