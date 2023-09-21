import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './NovaCategoria.module.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { categorias } from "Data/dados";
import FormNovaCategoria from "componentes/FormuNovaCategoria";
import { Container } from "@mui/material";
import Tabela from "componentes/Tabela";


export default function NovaCategoria() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cor, setCor] = useState("#000000");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const limpar = ()=> {
        setNome("");
        setDescricao("");
        setCor("#000000");
    };

    const aoMudar = () => {
        setError(false);
        setErrorMessage("");

        const categoria = categorias.find(
            (c) => c.categoriaNome === nome.toLowerCase().replace(/\s/g, "")
        );

        if (categoria) {
            setError(true);
            setErrorMessage(
                "Categoria já existe, clique em editar nova categoria.");
            return;
        }
    };

    const salvar = (evento) => {
        evento.preventDefault();

        if (!errorMessage) {
            const novaCategoria = {
                categoriaNome: nome.toLowerCase().replace(/\s/g, ""),
                DescricaoCategoria: descricao,
                corCategoria: cor,
                id: uuidv4(),
            };

            categorias.push(novaCategoria);
            alert("Categoria criada com sucesso!");
            limpar();
        }
    };

    const onClean = (evento) => {
        limpar();
        evento.preventDefault();
      };

    const remover = (evento) => {

        const categoria = categorias.find((categ) => categ.id === String(evento.target.id));
        const index = categorias.findIndex((categ) => categ.id === categoria.id);

        categorias.splice(index, 1);
        alert("Categoria removida!");
        navigate(`./`);
    };

    return (
        <Container className={styles.container}>
            <FormNovaCategoria
                salvar={salvar}
                nome={nome}
                onChangeNome={(event) => setNome(event.target.value)}
                onChangeDescricao={(event) => setDescricao(event.target.value)}
                onChangeCor={(event) => setCor(event.target.value)}
                error={error}
                errorMessage={errorMessage}
                aoMudar={aoMudar}
                descricao={descricao}
                cor={cor}
                limpar={onClean}
            />

            <Tabela
                remover={remover}
                editar={(evento) => navigate(`./novacategoria/${evento.target.id}`)}
            />
        </Container>
    )

}