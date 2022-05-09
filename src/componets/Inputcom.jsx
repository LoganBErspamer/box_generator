import React from 'react'

const Inputcom = (props) => {
const secretMessage = "SOmething"
  return (
    <div>
     <input type="text" name='color' value={props.color}
     onChange={e=>props.setColor(e.target.value)} />
    </div>
  )
}

export default Inputcom