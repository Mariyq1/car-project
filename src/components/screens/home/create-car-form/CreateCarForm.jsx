import { useState } from 'react'
import styles from './CreateCarForm.module.css'


const clearData = {
    price: '',
    name: '',
    image: '',
}
const CreateCarForm = ({setCars}) => {
    const [data, setData] = useState({
        price: '', name: '', image: '',
    })
    
    const createCar = (e)=>{
        e.preventDefault()
        setCars(prev => [...prev, {id:prev.length +1, ...
        data}])
        setData(clearData)
    }
    return (
    <form className={styles.form}>
        <input 
            placeholder="Name" 
            onChange={e => setData(prev => ({
                ...prev, name: e.target.value
            }))}
            value={data.name}
            />
        <input 
        placeholder="Price"
        onChange={e => setData(prev => ({
                ...prev, price: e.target.value
            }))}
        value={data.price}
        />
        <input 
        placeholder="Image"
        onChange={e => setData(prev => ({
                ...prev, image: e.target.value
            }))}
        value={data.image}
        />
        <button 
        onClick={e=>createCar(e)}
        className="btn">Create</button>
    </form>
    )
}
export default CreateCarForm