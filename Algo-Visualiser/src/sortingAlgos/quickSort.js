export default function getQuickSort(array){
    let animationArray=[];
    let helperArray=array.slice();
   
    quickSort(helperArray,animationArray,0,helperArray.length-1);

    
}

function quickSort(helperArray,animationArray,low,high){
   if(low<high){
    let pi=partition(helperArray, low, high);


   }
}

function partition(arr,low,high){
    let pivot =arr[high];
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}