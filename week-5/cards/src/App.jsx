import CardForm from "./components/CardForm"
import Card from "./components/Card"
import { useState } from "react";

function App(){
  const [inputs,setInputs] = useState({name:"",desc:"",linkein:"",twitter:"",intersts:""});
  const [isCard,setIsCard] = useState(false);

  function handleInputChange(event){
    const { name,value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name] : value,
    }))
  }

  return(
    <>
      <CardForm onInputChange={handleInputChange}/>
      <button onClick={()=>{setIsCard(true)}}>Generate Card</button>
      {isCard?<Card {...inputs} />:null}
    </>
  )
}

export default App;
