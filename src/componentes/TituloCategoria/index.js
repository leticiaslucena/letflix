import styles from './TituloCategoria.module.css';


export default function TituloCategoria({ corCategoria, tituloCategoria, descricao }) { 
   //titulos das categorias que fica na tela principal
    return (
      <section className={styles.secao}>
        <div
          className={styles.titulo}
          style={{ backgroundColor: `${corCategoria}` }}
        >
          <h2>{tituloCategoria}</h2>
        </div>
        <p>{descricao}</p>
      </section>
    );
  }