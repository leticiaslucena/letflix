import React from "react";
import styles from './Header.module.css';
import {useNavigate } from 'react-router-dom';

import logoheader from 'imagens/logoheader.png';
import Botao from "componentes/Botao";

export default function Header({ children }) {
    const navigate = useNavigate();

    return (
        <div>
            <nav className={styles.navegacao}>
                <img
                    className={styles.logo}
                    onClick={() => navigate("/")}
                    src={logoheader}
                    alt="Letflix Logomarca"
                />

                <Botao
                    botaocor="vermelho"
                    onClick={() => navigate ("/novovideo")}>
                    {children}   
                        Novo Vídeo
                </Botao>
            </nav>
        </div>
    )
}

