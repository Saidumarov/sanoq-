// let bodyColor =document.querySelector("body")

// let h1 = document.querySelector(".h1")

// function ok(){
//     // h1.style.background = "red"
//     // h1.style.color = "yellow"
//     let input = prompt("rrrrrrr")
// bodyColor.style.backgroundColor = input


// }



// 1 talik

let in1 = document.querySelector(".in1")
let in2 = document.querySelector(".in2")
let ttx = document.querySelector(".ttx")

let count = -1

function ok1(){
   
    count++
    ttx.textContent = 1 +count ;
    if (count >8) {
        ttx.style.backgroundColor = "red";
        
    } 

    else if(count > -1){
        ttx.style.backgroundColor = "white"; 
    }
    
   
}

function ok2(){
    count--
    ttx.textContent = 1+ count;
    if (count < -1) {
        ttx.style.backgroundColor = "yellow"
     
    }    else if(count < 10){
        ttx.style.backgroundColor = "white"; 
    }
}
    
// 2 talik

let in11 = document.querySelector(".in1")
let in22 = document.querySelector(".in2")


function ok11(){
   
    count++
    ttx.textContent = 2 + count ++;
    if (count >9) {
        ttx.style.backgroundColor = "red";
    } 

    else if(count > -1){
        ttx.style.backgroundColor = "white"; 
    }
    
   
}

function ok22(){
    count--
    ttx.textContent = 0 + count --;
    if (count < 0) {
        ttx.style.backgroundColor = "yellow";
        ttx.style.color.color = "red"
     
    }    else if(count < 10){
        ttx.style.backgroundColor = "white"; 
    }
}
    

