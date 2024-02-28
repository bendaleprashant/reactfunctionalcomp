import {useState} from 'react';
 
export default function Counter() {
    const [counterValue,setNewValue]=useState(0)
    const [firstName,setNewFirstName]=useState("Prashant")

    const handleIncrement=()=>{
        setNewValue(counterValue+1)
    }

    const handleDecrement=()=>{
        setNewValue(counterValue-1)
    }

    const updateName=()=>{
        setNewFirstName("CS React")
    }

    return(
        <div>
            <h1>counter</h1>
            <div>
                <button onClick={handleIncrement}>+</button>+
                <button onClick={handleDecrement}>-</button>+
                <button onClick={updateName}>Update Name</button>+
            </div>
            <div>
                <h4>Value : {counterValue}</h4>
                <h4>First Name: {firstName}</h4>
            </div>
        </div>
    )
}