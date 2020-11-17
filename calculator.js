var op="";
var resultFinal="";
var preSign="";
var flag=0;
  
function myfunction(clickedid) {//This function merely writes the input the shows it on the calculator to the user
      preSign+=clickedid;
      document.getElementById("result").innerHTML=preSign;
      }
  //Function to reset the calculator
function reset(){
      location.reload()
  }
  //Function to deal with the operators and do operations in a consicutive manner.
function operators(sign){
    if(document.getElementById("result").innerHTML=="" ) {  //If operator is clicked before entering anything
       alert("Nothing to add");
      }
    if(op!="") { 
       switch(op){
              case "+":
              resultFinal=Number(resultFinal)+Number(preSign);
              break;

              case "-":
              resultFinal=Number(resultFinal)-Number(preSign);
              break;

              case "*":
              resultFinal=Number(resultFinal)*Number(preSign);
              break;

              case "/":
              resultFinal=Number(resultFinal)/Number(preSign);
              break;

              case "%":
              resultFinal=Number(resultFinal)%Number(preSign);
              break;
             }         //When there is already an operator stored in op
        document.getElementById("result").innerHTML=resultFinal;
        op=sign;
        preSign="";
              }
    else if(op=="") {
        resultFinal=Number(preSign);
        op=sign;
        document.getElementById("result").innerHTML=="";
        preSign=""; }
    else{
        alert("something went wrong");
        }
    }