import { Container } from "@mui/material";
import styles from "./FormuNovaCategoria.module.css";

import TextField from "@mui/material/TextField";
import Botao from "componentes/Botao";

export default function FormNovaCategoria({
  salvar,
  nome,
  onChangeNome,
  onChangeDescricao,
  onChangeCor,
  error,
  errorMessage,
  aoMudar,
  descricao,
  cor,
  onClean,
  onFocus,
}) {
  return (
    <Container>
      <form className={styles.novocadastro} onSubmit={salvar}>
        <h2>Nova Categoria</h2>
        <TextField
          id="filled-basic"
          variant="filled"
          fullWidth
          required
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={onChangeNome}
          error={error}
          helperText={errorMessage}
          onBlur={aoMudar}
          onFocus={onFocus}
        />

        <TextField
          id="filled-basic"
          variant="filled"
          fullWidth
          required
          placeholder="Descrição"
          multiline
          rows={4}
          type="textarea"
          value={descricao}
          onChange={onChangeDescricao}
        />
        <div className={styles.inputCor}>
          <label>Cor:</label>
          <input
            type="color"
            label="Cor"
            value={cor}
            onChange={onChangeCor}
          />
        </div>

        <div className={styles.botao} >
          <div className={styles.buttons}>

            <Botao type="submit" botaocor="azul" onClick={salvar}> Salvar</Botao>
            <Botao botaocor="branco" onClick={onClean}>Limpar</Botao>
          </div>
        </div>
      </form>
    </Container>
  );
}
