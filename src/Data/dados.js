import { v4 as uuidv4 } from "uuid";

const videos = [
  {
    id: uuidv4(),
    categoriaNome: "Canções",
    titulo: "Canções",
    linkVideo: "https://www.youtube.com/watch?v=4rB3mIKf68w",
    linkImagem: "https://i.ytimg.com/vi/U-ZMeMTDyh8/sddefault.jpg",
    descricao: "Oficina G3",
    
  },
  {
    id: uuidv4(),
    categoriaNome: "Canções",
    titulo: "Canções",
    linkVideo: "https://www.youtube.com/watch?v=mbwjwVixAoQ",
    linkImagem: "https://i.ytimg.com/vi/mbwjwVixAoQ/maxresdefault.jpg",
    descricao: "Rodolfo Abrantes",
    
  },
  {
    id: uuidv4(),
    categoriaNome: "Canções",
    titulo: "Canções",
    linkVideo: "https://www.youtube.com/watch?v=bMoWRV3YzOY",
    linkImagem: "https://pbs.twimg.com/profile_images/1080485855633002496/ThdDHphr_400x400.jpg",
    descricao: "Resgate",
  },
  {
    id: uuidv4(),
    categoriaNome: "Canções",
    titulo: "Canções",
    linkVideo: "https://www.youtube.com/watch?v=gtHc6g9P07M",
    linkImagem: "https://mir-s3-cdn-cf.behance.net/projects/404/8cbb70177672785.Y3JvcCw4MTAsNjMzLDAsMA.png",
    descricao: "Salomao do Regue",
  },


  {
    id: uuidv4(),
    categoriaNome: "Desenhos",
    titulo: "Desenhos",
    linkVideo: "https://www.youtube.com/watch?v=p04LjSHTOLM",
    linkImagem:"https://naudosloucos.com.br/wp-content/uploads/2023/04/Super-Mario-Bros.-O-Filme-post.jpg",
    descricao: "Supermario",
    
  },
  {
    id: uuidv4(),
    categoriaNome: "Desenhos",
    titulo: "Desenhos",
    linkVideo: "https://www.youtube.com/watch?v=TOa15DC81Mw",
    linkImagem:"https://i.ytimg.com/vi/32PJyKoNlrQ/maxresdefault.jpg",
    descricao: "Toy Story",
    
  },
  {
    id: uuidv4(),
    categoriaNome: "Desenhos",
    titulo: "Desenhos",
    linkVideo: "https://www.youtube.com/watch?v=8jHIzjQMHJU",
    linkImagem:"https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2017/01/Shrek_3_Wallpaper_1024.jpg",
    descricao: " Shrek :)",
    
  },
  {
    id: uuidv4(),
    categoriaNome: "Desenhos",
    titulo: "Desenhos",
    linkVideo: "https://www.youtube.com/watch?v=wsmWwKwCU3U",
    linkImagem:"https://vitaminanerd.com.br/wp-content/uploads/2019/05/A-Noiva-Cad%C3%A1ver-Capa.png",
    descricao: "Noiva cadaver",
    
  },


  {
    id: uuidv4(),
    categoriaNome: "Ação",
    titulo: "Ação",
    linkVideo: "https://www.youtube.com/watch?v=u01EUm_bu8k&list=PLz6BtDsqbCbUXpCM5UvSpwlBaWeHC8vY-",
    linkImagem: "https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2023/03/John-Wick-01.jpg", 
    descricao: "Melhor filme dos cinemas",
    
  },

  {
    id: uuidv4(),
    categoriaNome: "Ficção Cientifica",
    titulo: "Ficção Cientifica",
    linkVideo: "https://www.youtube.com/watch?v=Qg_8ghEK03Y",
    linkImagem:
      "https://mezha.media/wp-content/uploads/2022/12/Avatar-1.jpg",
    descricao: "Melhor filme dos cinemas",
    
  },
  
  {
    id: uuidv4(),
    categoriaNome: "Suspense",
    titulo: "Suspense",
    linkVideo: "https://www.youtube.com/watch?v=nUnK0LXfOdw",
    linkImagem: "https://i.ytimg.com/vi/nUnK0LXfOdw/maxresdefault.jpg",
    descricao: "Melhor filme dos cinemas",
    
  },
];

const categorias = [
  {
    id: uuidv4(),
    categoriaNome: 'Canções',
    corCategoria: '#e3f307',
  },
  {
    id: uuidv4(),
    categoriaNome: 'Desenhos',
    corCategoria: '#a84aaf',
  },
  {
    id: uuidv4(),
    categoriaNome: 'Ação',
    corCategoria: '#edbc3f',
  },
  {
    id: uuidv4(),
    categoriaNome: 'Ficção Cientifica',
    corCategoria: '#4a54b3',
  },
  {
    id: uuidv4(),
    categoriaNome: 'Suspense',
    corCategoria: '#217351',
  },

];

export { videos, categorias };