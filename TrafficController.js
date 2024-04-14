
      /*  document.getElementById('count');
        document.getElementById('lights');
         var message = document.getElementById('message');


    function updateAnimation() {

        

        
        if (count ===2) {
            // Two or more people detected: Red light
            
            

          
            messageElement.textContent = "Stop"
            
            messageElement.style.color = "red";
            red.style.backgroundColor = "red";
            orange.style.backgroundColor = "black";
            green.style.backgroundColor = "black";
           
           
        } 
        if (count === 2) {
            // Only one person detected: Green light
            red.style.backgroundColor = "black";
            
            messageElement.textContent="smoot tarffic"
            
            orange.style.backgroundColor = "black";
            green.style.backgroundColor = "green";
            messageElement.textContent = "Smooth Traffic";
            messageElement.style.color = "green";
            
      
        } 
        if(count===1){
            // No people detected: Yellow light for 3 seconds, then switch to green
           
             messageElement.textContent = "get ready";
            
            messageElement.style.color = "yellow";
            red.style.backgroundColor = "black";
            orange.style.backgroundColor = "yellow";
            green.style.backgroundColor = "black";
           
           
        }
        updateAnimation();

    }

    async function start() {
        countElement = document.getElementById('count');
        messageElement = document.getElementById('message');
        roadstop = document.getElementById('road');


       
        
        await setupCamera();
        await loadModel();
        
        detectPeople();
    }


        
    
    
        
    

 

    




