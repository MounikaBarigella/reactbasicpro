import React from 'react'

const Filterin = () => {
  const people=[
    {
      name:"mounika",
      age:1,
    },
    {
      name:"mmmmmm",
      age:2,
    },
    {
      name:"mmmmmmmmmmmmm",
      age:3
    }
  ];
  
  return (
    <div>
      
        {people.filter(person=>person.age<2).map(filteredperson=>
          <li>{filteredperson.name}</li>
          )
      }
    </div>
  )
}

export default Filterin;
