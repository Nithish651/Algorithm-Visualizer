let dataset = null;


function generateDataSet(){
    console.log("inside");
    let board = document.getElementById("board");
    board.innerHTML = '';
    let random  = Array.from({length:100}, () => Math.floor(Math.random() *450) );
    dataset = random;

    
    for(i=0; i< random.length; i++){
        let element = document.createElement("div");
        element.className = 'data';
        element.style.height = random[i];
        board.appendChild(element);
    }
}



function startBubbleSort(){
    disableControls();
    bubbleSort();
 
}


async function bubbleSort(){
    
    let speed = document.getElementById("speed").value;
    console.log(speed);
    let board = document.getElementById("board");
    let data = board.children;
    let length = dataset.length;
    
    for(i=0; i< length-1; i++){
        for(j=0; j < length - 1 - i; j++){
            
             data[j].classList.add('picked');
             data[j+1].classList.add('picked');
             await sleep(speed);
           
            if (dataset[j] > dataset[j+1]){

                    let temp = dataset[j+1];
                    dataset[j+1] = dataset[j];
                    dataset[j] = temp;
                    board.insertBefore(data[j+1],data[j]);
                    await sleep(speed);

            }
        
            data[j].classList.remove('picked');
            data[j+1].classList.remove('picked');
        }
    }
                
                console.log(dataset);
    enableControls();
}



function disableControls(){
    
    let controls = document.getElementsByClassName('option');
    for(i=0; i<controls.length; i++){
        controls[i].style.pointerEvents = "none";
        controls[i].style.cursor = "default";
        controls[i].style.color = "red";
    }
    
    document.getElementById('speed').style.color = "red";
    document.getElementById('speed').disabled = true;
}


 function enableControls(){

    let controls = document.getElementsByClassName('option');
    for(i=0; i<controls.length; i++){
        controls[i].style.pointerEvents = "auto";
        controls[i].style.cursor = "pointer";
        controls[i].style.color = "white";
    }
    

    document.getElementById('speed').disabled = false;
    
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}