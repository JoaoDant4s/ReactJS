import './App.css';

import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message'
import {useState} from 'react'
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const cars = [
    {id: 1, brand: "BMW", model: "X6", color: "Branco", newCar: true, km: 0},
    {id: 2, brand: "Toyota", model: "Corolla", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Honda", model: "Civic", color: "Prata", newCar: false, km: 12314},
    {id: 4, brand: "VW", model: "Polo", color: "Branco", newCar: true, km: 0}
  ]
  const showMessage = () => {
    console.log("Evento do componente pai!")
  }
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  const users = [
    {id: 1, name: "João", age: 20, main: "Akali"},
    {id: 2, name: "Guga", age: 19, main: "Sion"},
    {id: 3, name: "Fernando", age: 21, main: "Ezreal"},
    {id: 4, name: "José", age: 17, main: "Leona"},
    {id: 5, name: "Thiago", age: 13, main: "Master Yi"}
  ]
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em src/assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name="João"/>
      {/*destructuring*/}
      <CarDetails brand="Honda" km={0} color="Cinza" model="HB20 3 portas" newCar={true} />
      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={123234} color="Preto" model="Ka" newCar={false} />
      <CarDetails brand="Chevrolet" km={20000} color="Prata" model="Voyage" newCar={false}/>
      {/*Looping em array de objetos*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} model={car.model} newCar={car.newCar}/>
      ))}
      {/*Fragment*/}
      <Fragment propFragment="teste"/>
      {/*Children*/}
      <Container myValue="testando">
        <p>E este é o conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      {/*State Lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio*/}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} main={user.main}/>
      ))}
    </div>
  );
}

export default App;
