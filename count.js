
    let video, model, countElement, count = 0;

    async function loadModel() {
        model = await cocoSsd.load();
    }

    function detectPeople() {

       

        model.detect(video).then(predictions => {
            count = predictions.filter(prediction => prediction.class === 'person').length;
            countElement.textContent = count;

            
            function animateRoad() {
                var road = document.getElementById('road');
                var position = 0;
                var animationInterval;
            
                function startAnimation() {
                    animationInterval = setInterval(function() {
                        position -= 1; // This determines the speed of the animation
                        road.style.backgroundPosition = position + '0 0';
                    }, 5); // The lower this number, the smoother the animation
                }
            
                function stopAnimation() {
                    clearInterval(animationInterval);
                }
            
                function speakMessage(text) {
                    var utterance = new SpeechSynthesisUtterance(text);
                    utterance.volume = 10; // Setting volume to maximum (1) for loud output
                    window.speechSynthesis.speak(utterance);
                }

                

                var previousMessage='';
                    
                function updateAnimation() {

                    var currentMessage;

                    
                    if (count >=3 && count<=9) {
                        // Two or more people detected: Red light
                        
                        
                        messageElement.style.color = "red";
                        red.style.backgroundColor = "red";
                        orange.style.backgroundColor = "black";
                        green.style.backgroundColor = "black";
                        var utterance = new SpeechSynthesisUtterance("stop");
                        utterance.volume = 10; // Setting volume to maximum (1) for loud output
                        window.speechSynthesis.speak(utterance);
                        stopAnimation(); // Stop animation when count is between 2 and 3
                       
                    } 
                    if (count === 0 ) {
                        // No person detected: Green light
                        red.style.backgroundColor = "black";
                        var SmoothcurrentMessage="smoot traffic";
                        messageElement.textContent=SmoothcurrentMessage;
                        
                        orange.style.backgroundColor = "black";
                        green.style.backgroundColor = "green";
                        messageElement.textContent = "Smooth Traffic";
                        messageElement.style.color = "green";
                        
                        startAnimation(); // Start animation when count is 1
                        var utterance = new SpeechSynthesisUtterance("Smooth traffic");
                    utterance.volume = 10; // Setting volume to maximum (1) for loud output
                    window.speechSynthesis.speak(utterance);
                    } 
                    if(count===1 ){
                        // No people detected: Yellow light for 3 seconds, then switch to green
                        var ReadycurrentMessage="get ready";
                         messageElement.textContent = ReadycurrentMessage;
                        
                        messageElement.style.color = "yellow";
                        red.style.backgroundColor = "black";
                        orange.style.backgroundColor = "yellow";
                        green.style.backgroundColor = "black";
                       
                        stopAnimation(); // Stop animation when count is 0
                        var utterance = new SpeechSynthesisUtterance("get ready");
                    utterance.volume = 10; // Setting volume to maximum (1) for loud output
                    window.speechSynthesis.speak(utterance);
                    }

                    /*if (currentMessage !==previousMessage){
                        speakMessage(currentMessage);
                        previousMessage=currentMessage;
                    }*/

                    
                }
                
                    
                
            
                // Initially update animation
                updateAnimation();
            }
            
                // Continuously monitor count and update animation accordingly
                setInterval(function() {
                    // If count changes, update the animation
                    updateAnimation();
                    
                   
                }, 1000); // Check every second
                
            
            
            animateRoad();
            


            requestAnimationFrame(detectPeople);
            requestAnimationFrame(adjustLights);
        });

    
        
        

    }
    async function setupCamera() {
        video = document.getElementById('video');
        const stream = await navigator.mediaDevices.getUserMedia({ 'video': {} });
        video.srcObject = stream;

        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
        
        
    }
    


    async function start() {
        countElement = document.getElementById('count');
        messageElement = document.getElementById('message');
        roadstop = document.getElementById('road');


       
        
        await setupCamera();
        await loadModel();
        
        detectPeople();
    }

    start();


    //updateMessage();
//this function reads message displayed on scree
    function ReadAdio(){

          const audio=document.getElementById('message');


        const utterance = new SpeechSynthesisUtterance(audio);
            window.speechSynthesis.speak(utterance);



    }









