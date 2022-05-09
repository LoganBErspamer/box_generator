import React from 'react'

const Boxdisplay = (props) => {
  return (
    <div style={{display: 'flex', flexWrap: "wrap"}}>
        {
            props.colorList.map((colorElement, i)=>{
                return(
                    <p key={i} style={{backgroundColor:colorElement, width:'100px', height:'100px'}}></p>
                )
            })
        }
    </div>
  )
}

export default Boxdisplay