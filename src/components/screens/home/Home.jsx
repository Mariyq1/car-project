import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import { useState } from 'react';


function Home() {
  const [cars, setCars] = useState(carsData)
  return (
    <div >
      <h1>Cars Catalog</h1>
      <CreateCarForm setCars={setCars}/>
      {cars.length ? (
        cars.map(car=>(
            <CarItem key={car.id} car={car}/>
        ))
      ): (
        <p>There are no cars</p>
      ) }
      </div>
  )
}

export default Home
