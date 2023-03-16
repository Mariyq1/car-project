import {cars} from './cars.data.js'
import CarItem from './car-item/CarItem';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';


function Home() {
  return (
    <div >
      <h1>Cars Catalog</h1>
      <CreateCarForm/>
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
