import { Link } from "react-router-dom"
import styles from "./About.module.css"
import "./About.css"

const About = () => {
  return (
    <div className="container-about">
      <div className={styles.About}>
          <h2>Sobre o Mini <span>Blog</span></h2>
          <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
          {/* <Link to="/posts/create" className="botao">Criar post</Link> */}
      </div>
    </div>
  )
}

export default About