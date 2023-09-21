import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";

export default function VideoCard({ linkVideo, corCategoria, videoCover }) {
  return (
    <Link to={linkVideo} target="_blank">{/*link deve ser aberto em uma nova aba/janela do navegador.*/}
      <div
        className={styles.videoCard}
        style={{
          border: `5px solid ${corCategoria}`,
        }}
      >
        <img src={videoCover} alt="Capa" />
      </div>
    </Link>
  );
}