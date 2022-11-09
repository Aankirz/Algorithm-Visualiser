import { useState } from 'react'
import './App.css'

function App() {
  const [numArray,setNumArray]=useState([10,19,18]);

  const generateArray=()=>{
    const arr=[];
    for(let i=0;i<10;i++){
      arr.push(Math.floor(Math.random()*80)+1)
      
    }

    setNumArray(arr);
  }
  
console.log(numArray)
  return (
    <div className="App">
     <div className="sorting-options">
      <button>Merge Sort</button>
      <button>Bubble Sort</button>
      <button>Insertion Sort</button>

     </div>
    { numArray.map((element,index)=>(
      <div className="array-bar" key={index} style={{width:`${element}rem`}} >
        {element}
        {console.log(element)}
      </div>
     ))}
     <div className="generateArray-Btn">
      <button onClick={generateArray}>Generate Array</button>
     </div>
    </div>
  )
}

export default App
