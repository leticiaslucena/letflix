import styles from './Footer.module.css';

import rodape from 'imagens/logoheader.png';
 
export default function Footer() {
    return (
        <footer className={styles.footer}>
             <img 
                src={rodape} 
                alt="Logo do Footer"  
            />
            <h3>desenvolvido por Letícia</h3>
        </footer>
    )
}






