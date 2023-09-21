import React from 'react';
import styles from './Banner.module.css';
import capa from 'imagens/filmes-e-series.jpg';

export default function Banner () {
    return(
        <section className={styles.banner}>
           <img
                className={styles.bannerImage}
                src={capa}
                alt='capa de filmes diversos'
           />                        
        </section>
    )
}
