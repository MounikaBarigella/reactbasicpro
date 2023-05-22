import React from 'react'

const Mappin = () => {
  //const arra=["nodejs","expressjs","reactjs"]
  const arra = [
    {
        id:1,
        title:"react"
    },
    {
        id:2,
        title:"expressjs"
    },
    {
        id:3,
        title:"nodejs"
    
    }
  ]  
  return (
    <div>
      {
        arra.map(
            (value)=><li key={value.id}>{value.title}</li>
        )
      }
    </div>
  )
}

export default Mappin
