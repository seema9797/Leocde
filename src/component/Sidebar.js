import React from 'react'
import{Card,CardHeader,CardText,CardBody} from 'reactstrap';
import {Link} from "react-router-dom"
function Sidebar({Drinks}) {
  return (
    <Card className="LeftMenu">
       <CardHeader color="cardHeader">
      Menu
    </CardHeader>
  
        {
            Drinks.map((drink)=>(
                <CardBody className="p-3">
 <CardText className="cardText" key={drink.idDrink}>
        <a>{drink.strCategory}</a>
        <i className="fa-solid fa-arrow-right"></i>
      </CardText>
                      </CardBody>
            ))
        }

     </Card>

  )
}

export default Sidebar