import "./Skins.css"
import { useParams } from "react-router-dom"

const Skins = () => {

    const {id} = useParams()
  return (
    <div className="container-skins">
        <h1>Carrossel de skins {id}</h1>
    </div>
  )
}

export default Skins