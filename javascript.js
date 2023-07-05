const display=document.getElementById("display");
const buttons=document.getElementById("buttons");


buttons.addEventListener("click",(event)=>{
    // console.log(event.target.innerHTML);
    // console.log(event.target.classList.contains("number"));
    let Target=event.target;
    if (Target.innerHTML==="C")
    
    {
        display.value="";
    }
    else if(Target.classList.contains("number"))
    {
        display.value+=Target.innerHTML;
    }
    else if(Target.classList.contains("operator"))
    {   
        const str=display.value;
        const lastChar=str[str.length-1];
        if (
            lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "x" ||
            lastChar === "/"
          ){
            display.value=str.slice(0,-1)+Target.innerHTML;  //eliminates repeated element:
            }
        else{
        
        display.value+=Target.innerHTML;
    }}
    else if (Target.classList.contains("equal")){   
        if (display.value.length!==0){
    try{
        const result=eval(display.value);
        display.value=result;
    }catch(error){
        display.value="This is wrong expression";
    }}
        else{
            display.value="";
    }}

}
) ;

// const str=display.value;
// const lastChar=str[str.length-1];
// const operator=["+","/","-","*"];
// for(let i=0;i<operator.length;i++){
//     if (lastChar===operator[i])
// }
