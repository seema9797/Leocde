import React from 'react'
function MainCont({Drinks}) {
  return (
    <div>
      {Drinks.map((data)=>(
        <div key={data.id}>
           <h2>{data.strDrink}</h2>
        </div>
      ))}
    </div>
  )
}

export default MainCont