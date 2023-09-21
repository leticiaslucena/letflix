import React, { useState } from 'react';
import styles from './VideoCadastrado.module.css';
import { videos, categorias } from 'Data/dados';
import { v4 as uuidv4 } from 'uuid';
import Botao from 'componentes/Botao';
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function NovoVideo() {
  const [video, setVideo] = useState({
    titulo: '',
    linkVideo: '',
    linkImagem: '',
    descricao: '',
    categoriaNome: '',
  });

  const navigate = useNavigate();

  const Salvar = (evento) => {
    evento.preventDefault();

    /*
    const categoriaEncontrada = categorias.find(
      (categoria) => categoria.categoriaNome === video.categoriaNome
    );
    */

    const aoCadastrar = {
      id: uuidv4(),
      ...video,
      categoriaNome: video.categoriaNome.toLowerCase().replace(/\s/g, ''),
    };

    videos.push(aoCadastrar);

    Limpar();

    alert('Vídeo cadastrado com sucesso!');
    navigate('/home', { state: { videoCadastrado: aoCadastrar } });

    /*
    if (categoriaEncontrada) {
      categoriaEncontrada.videos = categoriaEncontrada.videos || [];
      categoriaEncontrada.videos.push(aoCadastrar);
    } else {
      alert('Categoria não encontrada!');
    }
    */
    
  }

  const Limpar = () => {
    setVideo({
      titulo: '',
      linkVideo: '',
      linkImagem: '',
      descricao: '',
      categoriaNome: '',
    });
  };

  return (
    <Container>
      <form onSubmit={Salvar} className={styles.novocadastro}>
        <h2>Novo Vídeo</h2>
        <TextField
          id="filled-basic"
          variant="filled"
          fullWidth
          type="text"
          required
          placeholder='Título'
          value={video.titulo}
          onChange={(evento) => setVideo({ ...video, titulo: evento.target.value })}
        />
        <TextField
          id="filled-basic"
          variant="filled"
          fullWidth
          type="text"
          required
          placeholder='Link do vídeo'
          value={video.linkVideo}
          onChange={(evento) => setVideo({ ...video, linkVideo: evento.target.value })}
        />
        <TextField
          id="filled-basic"
          variant="filled"
          fullWidth
          placeholder="Link da imagem do vídeo"
          type="text"
          required
          value={video.linkImagem}
          onChange={(evento) => setVideo({ ...video, linkImagem: evento.target.value })}
        />

        <TextField
          id="filled-basic"
          variant="filled"
          fullWidth
          required
          multiline
          rows={4}
          type="textarea"
          placeholder="Descrição"
          value={video.descricao}
          onChange={(evento) => setVideo({ ...video, descricao: evento.target.value })}
        />

        <FormControl
          variant="filled"
          required
          fullWidth
        >
          <InputLabel className={styles.InputLabel}>
            Escolha a Categoria!
          </InputLabel>

          <Select
            id="demo-simple-select-filled"
            value={video.categoriaNome}
            onChange={(ev) => setVideo({ ...video, categoriaNome: ev.target.value })}
          >
            {categorias.map((categoria) => (
              <MenuItem
                key={categoria.id}
                value={categoria.categoriaNome}
              >
                {categoria.categoriaNome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className={styles.botoes}>
          <Botao botaocor="azul" type="submit" onClick={Salvar}>Salvar</Botao>
          <Botao type="button" botaocor="branco" onClick={Limpar} >Limpar</Botao>
        </div>

        <div className={styles.trocarcategoria}>
          <Botao botaocor="azul" onClick={() => navigate("/novacategoria")}>Nova Categoria</Botao>
        </div>
      </form>
    </Container >
  )
}
