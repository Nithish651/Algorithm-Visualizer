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


function startQuickSort(){
    disableControls();
    quickSort(dataset,0,dataset.length-1);
         enableControls();
    console.log("QS: "+dataset);
}


async function quickSort(array,start,end){
    if (start < end) {
			let pivot = await partition(array, start, end);
			await quickSort(array, start, pivot-1 );
			await quickSort(array, pivot + 1,end);
		}

}

 async function partition(array, p, q){
    let speed = document.getElementById("speed").value;
    console.log(speed);
    let board = document.getElementById("board");
    let data = board.children;
    let length = dataset.length;
  		let pivot = q;
        data[pivot].classList.add('pivot');
		let i = p-1;
		for ( j = p; j <= q; j++) {
             data[j].classList.add('picked');
   
			if (array[j] <= array[pivot]) {
               	i++;
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
                board.insertBefore(data[i],data[j]);
                board.insertBefore(data[j],data[i]);
                await sleep(speed); 
                data[j].classList.remove('picked');

			}
            await sleep(speed); 
            data[j].classList.remove('picked');
		}
            data[pivot].classList.remove('pivot');
		    return i;
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