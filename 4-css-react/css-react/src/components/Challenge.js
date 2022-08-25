import styles from "./Car.module.css"

const Challenge = ({id, brand, model, color, newCar, km}) => {
  return (
    <div>
        <div className={styles.card}>
            <h1>{model}</h1>           
            <p className={styles.details}>Marca: {brand}</p>
            <p className={styles.details}>Cor: {color}</p>
            <p className={styles.details}>KM: {km}</p>
            <p className={styles.details}>O carro é novo? {newCar ? "Sim" : "Não"}</p>
        </div>
    </div>
  )
}

export default Challenge