function generateDataSet(){
    console.log("inside");
    let board = document.getElementById("board");
    board.innerHTML = '';
    let random  = Array.from({length:100}, () => Math.floor(Math.random() *450) );
    console.log(random);
    
    for(i=0; i< random.length; i++){
        let element = document.createElement("div");
        element.className = 'data';
        element.style.height = random[i];
        board.appendChild(element);
    }
}