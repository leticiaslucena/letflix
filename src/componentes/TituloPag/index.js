import styles from './TituloPag.module.css';

function TituloPag({ children }) {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    )
}

export default TituloPag;