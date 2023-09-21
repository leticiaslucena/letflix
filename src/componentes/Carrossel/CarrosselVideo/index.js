import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from "./CarrosselVideo.module.css";
import VideoCard from "../VideoCard";
import { categorias, videos } from 'Data/dados';



export default function CarrosselVideo({ categoria, videoCadastrado }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }; 

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className={styles.container}
    >
      {videos.map((video) => {
        if (video.categoriaNome === categoria || (videoCadastrado && video.id === videoCadastrado.id)) {
          return (
            <VideoCard
              key={video.id}
              corCategoria={
                categorias.find(
                  (c) => c.categoriaNome === video.categoriaNome
                ) === undefined
                  ? "#f0f0f0"
                  : categorias.find(
                      (c) => c.categoriaNome === video.categoriaNome
                    ).corCategoria
              }
              videoCover={video.linkImagem}
              linkVideo={video.linkVideo}
            />
          );
        }
        return null;
      })}
    </Carousel>
  );
}