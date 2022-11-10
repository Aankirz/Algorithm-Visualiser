
export default function Animation(animationArray){
    const arrayBars=document.getElementsByClassName('array-bar');  
     
    for(let i=0;i<animationArray.length;i++){
        const isColorChange=(i%4==0)||(i%4==1)
    
        if(isColorChange){
         const color=(i%4==0)?'blue':'deeppink';
         const [firstBar,secondBar]=animationArray[i]
         const firstBarStyle=arrayBars[firstBar].style;
         const secondBarStyle=arrayBars[secondBar].style;
    
         setTimeout(()=>{
          firstBarStyle.backgroundColor=color;
          secondBarStyle.backgroundColor=color;
    
         },i*200)
        }else{
          const[barId,newHeight]=animationArray[i];
    
          if(barId==-1){
            continue;
          }
          const barStyle=arrayBars[barId].style;
          setTimeout(()=>{
            barStyle.width=`${newHeight}rem`;
    
          },i*200)
        }
    }
      
     
}



