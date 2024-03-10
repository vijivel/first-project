let output=document.getElementById("out-put");
        function display(num){
            output.value+=num;
        }
        function calculate(){
            try{
                output.value=eval(output.value);
            }
            catch(err){
                // alert("invalid");
                output.value= "Error";
            }
        }

        function clre(){
            output.value= "";
        }
        function del(){
            output.value=output.value.slice(0,-1);
        }
