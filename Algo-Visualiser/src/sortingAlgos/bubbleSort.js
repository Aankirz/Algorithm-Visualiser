export default function getBubbleSort(array){
    /*Creating an array for Color Change Animation */
    let animationArray=[];
    let helperArray=array.slice();
    bubbleSort(helperArray,animationArray);
    array=helperArray;

    return[animationArray,array] 

}

function bubbleSort(helperArray,animationArray){
   for(let i=0;i<helperArray.length-1;i++){

    for(let j=0;j<helperArray.length-i-1;j++){
        animationArray.push([j,j+1]);
        animationArray.push([j,j+1]);
        
        if(helperArray[j]>helperArray[j+1]){
            animationArray.push([j,helperArray[j+1]]);
            animationArray.push([j+1,helperArray[j]]);
            swap(helperArray,j,j+1);

        }else{
            animationArray.push([-1,-1]);
            animationArray.push([-1,-1]);

        }
    }

   }
}

function swap(helperArray,fi,si){
   let temp=helperArray[fi];
   helperArray[fi]=helperArray[si];
   helperArray[si]=temp;
}