import { useState } from "react"

export default function UserInput(){
    

    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" 
                    value={userInput.initialInvestment}
                    onChange={(event)=>handleChange('initialInvestment', event.target.source)} 
                    required/>
                </p>
                <p>
                    <label>Anuual Investment</label>
                    <input type="number" 
                    value={userInput.annualInvestment}
                    onChange={(event)=>handleChange('annualInvestment', event.target.source)} 
                    required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Returns</label>
                    <input type="number" 
                    value={userInput.expectedReturn}
                    onChange={(event)=>handleChange('expectedReturn', event.target.source)} 
                    required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                    value={userInput.durations}
                    onChange={(event)=>handleChange('durations', event.target.source)} 
                    required/>
                </p>
            </div>
        </section>
    )
}