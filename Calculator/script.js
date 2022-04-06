// This function clear all the values
var expdata="";
var historyData = [];
var resultData = "";
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    expdata=document.getElementById("result").value += value;
   }
   function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    resultData=q;
    historyData.push({ expression: expdata, result: resultData });
    history();
    resultData="";
    expdata="";
    document.getElementById("result").value = q;
    
   }
   
    function history(){
        $("#hist").click(function(){
              var div = document.getElementById("history");  
              if(div.style.display=="none"){
              div.style.display="block";
            var log = document.getElementById("history_log");
            var string = "";
            for (var key in historyData) {
              string +=
                "" +
                historyData[key]["expression"] +
                " = " +
                historyData[key]["result"] +
                "<br>";
            }
            log.innerHTML = string;
        }else{
            div.style.display="none";
        }
        }); 
      
    
        
       
    }