
// 1 talik

let in1 = document.querySelector(".in1")
let in2 = document.querySelector(".in2")
let ttx = document.querySelector(".ttx")

let count = -1  

function ok1() {
    count++
    ttx.textContent = 1 + count;
    if (count > 8) {
        ttx.style.backgroundColor = String("#2742DF");
        ttx.style.color = "white"

    } else if (count > -2) {
        ttx.style.backgroundColor = "white";
    }

    if (count > 8) {
        ttx.style.color = "white"

    } else if (count < 8) {
        ttx.style.color = "black"
    }
    if (count < -1) {
        ttx.style.color = "white"
    }


}


function ok2() {
    count--
    ttx.textContent = 1 + count;
    if (count < -1) {
        ttx.style.backgroundColor = String("#ed239f");


    } else if (count < 10) {
        ttx.style.backgroundColor = "white";
    }
    if (count > 10) {
        ttx.style.color = "white"

    } else if (count < 10) {
        ttx.style.color = "black"
    }
    if (count < -1) {
        ttx.style.color = "white"
    }

}

// 2 talik

let in11 = document.querySelector(".in11")
let in22 = document.querySelector(".in22")


function ok11() {

    count++
    ttx.textContent = 2 + count++;
    if (count > 8) {
        ttx.style.backgroundColor = String("#2742DF");
        ttx.style.color = "white"


    } else if (count > -2) {
        ttx.style.backgroundColor = "white";
    }

    if (count > 8) {
        ttx.style.color = "white"

    } else if (count < 8) {
        ttx.style.color = "black"
    }
    if (count < -1) {
        ttx.style.color = "white"
    }
}

function ok22() {
    count--
    ttx.textContent = 0 + count--;
    if (count < 0) {
        ttx.style.backgroundColor = String("#ed239f");

    } else if (count < 10) {
        ttx.style.backgroundColor = "white";
    }

    if (count > 10) {
        ttx.style.color = "white"

    } else if (count < 10) {
        ttx.style.color = "black"
    }

    if (count < -2) {
        ttx.style.color = "white"
    }
    if (count < 0) {
        ttx.style.backgroundColor = "white";
    }
    if (count < -1) {
        ttx.style.backgroundColor = String("#ed239f");
    }

}

const res = document.getElementById("res");
res.addEventListener("click" , function(){
    location.reload();
});



