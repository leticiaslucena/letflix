import { categorias } from 'Data/dados';
import styles from './Tabela.module.css'

//componente da criação da tabela da nova categoria
export default function Tabela({ remover, editar }) {
  function criarTabela (categoriaNome, descricao, editar, remover, id) {
    return { categoriaNome, descricao, editar, remover, id };
  }

  const criar = categorias.map((categoria) => {
    return {
      categoriaNome: categoria.categoriaNome,
      descricao: categoria.descricao,
      id: categoria.id,
    };
  });

  const rows = criar.map((row) => {
    return criarTabela(
      row.categoriaNome,
      row.descricao,
      "Editar",
      "Remover",
      row.id
    );
  });

  return (
    <>
      <table className={styles.tabela}>
        <thead className={styles.cabeçalho}>
          <tr className={styles.row}>
            <td className={styles.cabeçalho}>Nome</td>
            <td className={styles.cabeçalho}>Descrição</td>
            <td className={styles.cabeçalho} align="center">
              Editar
            </td>
            <td className={styles.cabeçalho} align="center">
              Remover
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className={styles.catgcriadas}>
                {row.categoriaNome}
              </td>
              <td className={styles.catgcriadas} align="left">
                {row.descricao}
              </td>
              <td align="center">
                <button
                  className={styles.bttabedit}
                  type="submit"
                  id={row.id}
                  onClick={editar}
                >
                  {row.editar}
                </button>
              </td>
              <td align="center">
                <button
                  className={styles.bttabremov}
                  type="submit"
                  id={row.id}
                  onClick={remover}
                >
                  {row.remover}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
 