import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {

  const [userInput, setUserInput]= useState({
    initialInvestment: 12000,
    annualInvestment: 1000,
    expectedReturn:6,
    duration: 10,
  });

  const initialInvestmentValid = userInput.initialInvestment > 0;
  const annualInvestmentValid = userInput.annualInvestment > 0;
  const expectedReturnValid = userInput.expectedReturn > 0;
  const duratationValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput =>{
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!initialInvestmentValid && <p className="center">Please enter valid Investment Value</p>}
      {!annualInvestmentValid && <p className="center">Please enter valid Annual Investment Value</p>}
      {!expectedReturnValid && <p className="center">Please enter valid expected Returns</p>}
      {!duratationValid && <p className="center">Please enter valid Duration</p>}
      { initialInvestmentValid && annualInvestmentValid && expectedReturnValid && duratationValid && <Results input={userInput}/>}
      
    </>
  )
}

export default App;
