import {useState,useEffect} from "react"
import './App.css';
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from "./component/HeaderCont"
import SideBar from "./component/Sidebar" 
import SearchBar from "./component/Search"
import MainCont from "./component/MainCont"

function App() {
  const[ Drinks,setDrinks]=useState([])
  const[searchInput,setSearchInput]=useState("")

const URL_GET="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
const SEARCH="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

useEffect(()=>{
  fetch(URL_GET)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data.drinks)
    setDrinks(data.drinks)
  });
},[])


const handleSubmit = (e) => {
  e.preventDefault();

  if (searchInput) {
    fetch(SEARCH + searchInput)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
        console.log(data.drinks)
      });
  } else {
    fetch(URL_GET)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
        console.log(data.drinks);
      });
  }
};

const changeHandler = (e) => {
  setSearchInput(e.target.value);
};
  return (
    <div className="App">
      <HeaderComp/>
      <div className="containerBack" color="light">
      <div className="pt-4 container ">
        <div className="row mt-4">
          <div className="col-md-4">
           <SideBar Drinks={Drinks}/>
        </div>
        <div className="col-md-8">
        <SearchBar
        searchInput={searchInput}
         handleSubmit={handleSubmit} 
         changeHandler={changeHandler} />
         {Drinks.length >0 ?(
          Drinks.map((drink)=>(
            <div>
              <div class="mb-4 mt-3 ">
              {drink.strCategory}
              </div>
 
            <div className="bg-white rounded border shadow-sm mb-4">
              <div className="p-3 mainContDesign" key={drink.id}>
             <div className="subImg">
              <img src={drink.strDrinkThumb} alt="error"/>
              <div className="TextSub">
              <span>{drink.strDrink}</span> 
              <p>{drink.strMeasure1}</p>
              </div>
          
             
            </div>
              <Button outline className="btnColor">
    Add
  </Button>
 
  </div>
              </div>
            </div>
          ))
         ):(
          <p>Nothing</p>
         )

         }
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
