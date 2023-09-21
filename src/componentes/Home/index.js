import React, { useEffect, useState } from "react";
import { categorias, videos } from "Data/dados";

import TituloCategoria from "componentes/TituloCategoria";
import Banner from "componentes/Banner";
import CarrosselVideo from "../Carrossel/CarrosselVideo";
import TituloPag from "componentes/TituloPag";


export default function Home() {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});
  /*
  const [corCategoriaCard, setCorCategoriaCard] = useState("");
  const location = useLocation();
  */

  //este useEffect rola para o topo da página ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    const videosPorCategoriaTemp = {};

    // Inicialize o objeto de vídeos por categoria
    categorias.forEach((categoria) => {
      videosPorCategoriaTemp[categoria.categoriaNome] = [];
    });

    videos.forEach((video) => {
      const categoriaNome = video.categoriaNome;

      // Verifique se a categoria existe no objeto videosPorCategoriaTemp
      if (!videosPorCategoriaTemp[categoriaNome]) {
        videosPorCategoriaTemp[categoriaNome] = [];
      }

      videosPorCategoriaTemp[categoriaNome].push(video);
    });

    setVideosPorCategoria(videosPorCategoriaTemp);
    /*
    if (location.state && location.state.videoCadastrado) {
      const categoriaDoVideoCadastrado = location.state.videoCadastrado.categoriaNome;

      const categoriaCorrespondente = categorias.find(
        (categoria) => categoria.categoriaNome === categoriaDoVideoCadastrado
      );

      if (!categoriaCorrespondente) {
        setCorCategoriaCard(null);
      } else {
        setCorCategoriaCard(categoriaCorrespondente.corCategoria);
      }
    } else {
      const categoriaPadrao = categorias[0];
      setCorCategoriaCard(categoriaPadrao.corCategoria);
    }
    */
  }, []);

  return (
    <>
      <div>
        <Banner />
      </div>

      <div>
        <hr />
        <TituloPag>
          <h1>Meus Vídeos Preferidos</h1>
        </TituloPag>
        <hr />
      </div>

      {categorias.map((categoria) => (
        <div key={categoria.id}>
          <TituloCategoria
            tituloCategoria={categoria.categoriaNome}
            DescricaoCategoria={categoria.DescricaoCategoria}
            corCategoria={categoria.corCategoria}
          />
          <CarrosselVideo categoria={categoria.categoriaNome} videos={videosPorCategoria[categoria.categoriaNome]} />
        </div>
      ))}
    </>
  );
}
