import { useState,useEffect } from 'react'
import './App.css'

import getBubbleSort from './sortingAlgos/bubbleSort';

import Animation from './sortingAlgos/animation';

export default function App() {
  const [numArray,setNumArray]=useState([10,19,18]);

  
  useEffect(()=>{
    resetArray
  })

  function resetArray(){
    let array=[];
    for(let i=0;i<15;i++){
      array.push(randomInt(5,80))
    }
    setNumArray(array)
  } 
  function quickSort(){
    
  }
  function bubbleSort(){
      let [animationArray,array]=getBubbleSort(numArray);
      Animation(animationArray);
  }

  return (

    <div className="App">
     <div className="sorting-options">
      <button onClick={quickSort}>Quick Sort</button>
      <button>Insertion Sort</button>

     </div>
    { numArray.map((element,index)=>(
      <div className="array-bar" key={index} style={{width:`${element}rem`}} >
      {/* {element} */}
      </div>
     ))}
     <div className="generateArray-Btn">
      <button onClick={resetArray}>Generate Array</button>
      <button onClick={()=>bubbleSort()}>Bubble Sort</button>

     </div>
    </div>
  )


}

function randomInt(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

