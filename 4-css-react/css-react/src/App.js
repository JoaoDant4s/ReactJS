import './App.css';
import Challenge from './components/Challenge';
import Example from './components/Example';
import Title from './components/Title';

function App() {
  const n = 12
  const redTitle = true
  const cars = [
    {id: 1, brand: "BMW", model: "X6", color: "Branco", newCar: true, km: 0},
    {id: 2, brand: "Toyota", model: "Corolla", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Honda", model: "Civic", color: "Prata", newCar: false, km: 12314},
    {id: 4, brand: "VW", model: "Polo", color: "Branco", newCar: true, km: 0}
  ]
  return (
    <div className="App">
      
      <h1>React com CSS</h1>
      <Example />
      <p>Este parágrafo é do App.js</p>
      <p style={{color: "blue", backgroundColor: "cyan"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*CSS dinamico*/}
      <h2 style={n < 10 ? {color: "purple"} : {color: "red"}}>CSS dinâmico</h2>
      {/* Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS modules */}
      <Title />

      {/* Desafio */}
      {cars.map((car) => (
        <Challenge id={car.id} brand={car.brand} model={car.model} color={car.color} newCar={car.newCar} km={car.km}/>
      ))}
    </div>
  );
}

export default App;
