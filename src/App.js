import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";


function App() {

  const [userInput, setUserInput]= useState({
    initialInvestment: 12000,
    annualInvestment: 1000,
    expectedReturn:6,
    durations: 10,
  });

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput =>{
        return {
            ...prevUserInput,
            [inputIdentifier]: newValue
        }
    })
  }
  return (
    <>
      <Header />
      <UserInput />
    </>
  )
}

export default App;
