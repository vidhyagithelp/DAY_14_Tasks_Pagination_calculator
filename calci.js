let numberDiv=document.getElementById("numbersDiv");
let opearatnDiv=document.getElementById("operatorsDiv");
let resultDiv=document.getElementById("result").innerHTML;
numberDiv.style.display="flex";
numberDiv.style.flexWrap="wrap";
opearatnDiv.style.display="flex";
opearatnDiv.style.flexWrap="wrap";
let op="";
let opSymbol="";
document.getElementById("result").innerHTML="Do Math here !!!!!";

for(let i=0;i<10;i++){
 let num=document.createElement("button");
 num.innerHTML=i;
 num.style.width="10%";
 num.style.height="20%";
 num.style.border="1px solid";
 num.style.padding="20px";
 num.style.margin="10px";
 num.style.textAlign="center";
 num.setAttribute("id",`btn${i}`);
 numberDiv.append(num);
}

let operatnFn=["+","-","*","/","%","=","clear"];
for(let i=0;i<operatnFn.length;i++){
    let oprtn=document.createElement("button");
    oprtn.innerHTML=operatnFn[i];
    oprtn.style.width="20%";
    oprtn.style.height="20%";
    oprtn.style.border="1px solid";
 
    oprtn.style.margin="10px";
    oprtn.style.textAlign="center";
    oprtn.setAttribute("id",`operatn${i}`);
    opearatnDiv.append(oprtn);
   }
let op1=0;
let op2=0;
let operatn="";
let res="";

document.getElementById("btn0").addEventListener("click",(e)=>{
  console.log(e.target.innerHTML);
  // op1=e.target.innerHTML;
  op+=e.target.innerHTML;
  document.getElementById("result").innerHTML=op;

  console.log("op",op);
})
document.getElementById("btn1").addEventListener("click",(e)=>{
  console.log(e.target.innerHTML);
  // op1=e.target.innerHTML;
  op+=e.target.innerHTML;
  console.log("op",op);
  document.getElementById("result").innerHTML=op;
})

document.getElementById("btn2").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    console.log("op",op);
    document.getElementById("result").innerHTML=op;
  })
  document.getElementById("btn3").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    console.log("op",op);
    document.getElementById("result").innerHTML=op;
  })
  document.getElementById("btn4").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
    console.log("op",op);
  })
 
  document.getElementById("btn5").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
    console.log("op",op);
  })
  document.getElementById("btn6").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
    console.log("op",op);
  })
  document.getElementById("btn7").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
    console.log("op",op);
  })
  document.getElementById("btn8").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
    console.log("op",op);
  })
  document.getElementById("btn9").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    // op2=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
    console.log("op",op);
  })

  document.getElementById("operatn0").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    opSymbol=e.target.innerHTML;
    // operatn=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
  })
  document.getElementById("operatn1").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    opSymbol=e.target.innerHTML;
    // operatn=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
  })
  document.getElementById("operatn2").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    opSymbol=e.target.innerHTML;
    // operatn=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
  })

document.getElementById("operatn3").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    opSymbol=e.target.innerHTML;
    // operatn=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
  })
  document.getElementById("operatn4").addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    opSymbol=e.target.innerHTML;
    // operatn=e.target.innerHTML;
    op+=e.target.innerHTML;
    document.getElementById("result").innerHTML=op;
  })

  document.getElementById("operatn5").addEventListener("click",(e)=>{
    // console.log(JSON.stringify(operatn));
    console.log(op);
    if(operatnFn.includes(opSymbol)){
      let op1=Number(op.slice(0,op.indexOf(opSymbol)));
      console.log(op1);
      let op2=Number(op.slice(op.indexOf(opSymbol)+1,op.length));
      console.log(op2);

      operatn=opSymbol.toString();
      console.log(operatn)
      console.log(Number(op1)+operatn+Number(op2));
    
     
  switch(operatn){
    case "+":{
        res=Number(op1)+Number(op2);   
      break;
    }
    case "-":{
      res=op1-op2;   
      break;
    }
    case "*":{
      res=op1*op2;   
      break;
    }
    case "/":{
      res=op1/op2;   
      break;
    }

  }}
    console.log(res);
    document.getElementById("result").innerHTML=res;

  })

  document.getElementById("operatn6").addEventListener("click",(e)=>{

    document.getElementById("result").innerHTML="";
    op1="";
    op2="";
    op="";
    opSymbol="";
 
  
    
  })


