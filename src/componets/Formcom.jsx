import React, {useState} from 'react'
import Inputcom from './Inputcom'

const Formcom = (props) => {
    const [color, setColor] = useState("")

    const parentfunction=(secret)=>{
        alert(secret)
    }
const handleSubmit = (e) =>{
    e.preventDefault()
    props.onNewColor(color)
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Color</label>
        <Inputcom setColor={setColor} color={color}/>
        <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Formcom