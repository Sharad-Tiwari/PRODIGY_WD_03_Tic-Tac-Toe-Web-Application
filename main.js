const bn1 = document.querySelector(".b1"),
  bn2 = document.querySelector(".b2"),
  bn3 = document.querySelector(".b3"),
  bn4 = document.querySelector(".b4"),
  bn5 = document.querySelector(".b5"),
  bn6 = document.querySelector(".b6"),
  bn7 = document.querySelector(".b7"),
  bn8 = document.querySelector(".b8"),
  bn9 = document.querySelector(".b9"),
    reset = document.querySelector(".reset"),
    errtxt =document.querySelector(".err-txt") ;

reset.addEventListener("click", () => {
  newGame();
  errtxt.style.display = "none";
} );
let flag = 1, count = 1;

window, addEventListener("load", () => {
  errtxt.style.display = "none";
})


function newGame() {
    bn1.innerHTML = "";
    bn2.innerHTML = "";
    bn3.innerHTML = "";
    bn4.innerHTML = "";
    bn5.innerHTML = "";
    bn6.innerHTML = "";
    bn7.innerHTML = "";
    bn8.innerHTML = "";
    bn9.innerHTML = "";
    count = 1;
    flag = 1;
}




bn1.addEventListener("click", () => {
    if (bn1.textContent === "") {
        if (flag == 1) {
            bn1.innerHTML = "X";
            flag = 0;
        } else {
            bn1.innerHTML = "0";
            flag = 1;
      }
      check();
    } else {
        errtxt.style.display = "block";
        errtxt.style.color = "Orange";
        errtxt.innerHTML = "Select Another location !!"
    }
});

bn2.addEventListener("click", () => {
  if (bn2.textContent === "") {
    if (flag == 1) {
      bn2.innerHTML = "X";
      flag = 0;
    } else {
      bn2.innerText = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn3.addEventListener("click", () => {
  if (bn3.textContent === "") {
    if (flag == 1) {
      bn3.innerHTML = "X";
      flag = 0;
    } else {
      bn3.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn4.addEventListener("click", () => {
  if (bn4.textContent === "") {
    if (flag == 1) {
      bn4.innerHTML = "X";
      flag = 0;
    } else {
      bn4.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn5.addEventListener("click", () => {
  if (bn5.textContent === "") {
    if (flag == 1) {
      bn5.innerHTML = "X";
      flag = 0;
    } else {
      bn5.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn6.addEventListener("click", () => {
  if (bn6.textContent === "") {
    if (flag == 1) {
      bn6.innerHTML = "X";
      flag = 0;
    } else {
      bn6.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn7.addEventListener("click", () => {
  if (bn7.textContent === "") {
    if (flag == 1) {
      bn7.innerHTML = "X";
      flag = 0;
    } else {
      bn7.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn8.addEventListener("click", () => {
  if (bn8.textContent === "") {
    if (flag == 1) {
      bn8.innerHTML = "X";
      flag = 0;
    } else {
      bn8.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});

bn9.addEventListener("click", () => {
  if (bn9.textContent === "") {
    if (flag == 1) {
      bn9.innerHTML = "X";
      flag = 0;
    } else {
      bn9.innerHTML = "0";
      flag = 1;
    }
    check();
  } else {
    errtxt.style.display = "block";
    errtxt.style.color = "Orange";
    errtxt.innerHTML = "Select Another location !!";
  }
});



let check = () => {
    count++;
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = bn1.textContent;
    b2 = bn2.textContent;
    b3 = bn3.textContent;
    b4 = bn4.textContent;
    b5 = bn5.textContent;
    b6 = bn6.textContent;
    b7 = bn7.textContent;
    b8 = bn8.textContent;
  b9 = bn9.textContent;
  if (count > 4) {
    if (b1 === b2 && b2 === b3 && b1 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b1} Won !!`;
      newGame();
      
    } else if (b4 === b5 && b5 === b6 && b4 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b4} Won !!`;
      newGame();

      
    } else if (b7 === b8 && b8 === b9 && b7 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b7} Won !!`;
      newGame();
      
    } else if (b1 === b4 && b4 === b7 && b1 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b1} Won !!`;
      newGame();
      
    } else if (b2 === b5 && b5 === b8 && b2 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b5} Won !!`;
      newGame();
     
    } else if (b3 === b6 && b6 === b9 && b3 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b3} Won !!`;
      newGame();
      
    } else if (b1 === b5 && b5 === b9 && !b1 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b1} Won !!`;
      newGame();
      
    } else if (b3 === b5 && b5 === b7 && b3 !== "") {
      errtxt.style.display = "block";
      errtxt.innerHTML = `Player ${b3} Won !!`;
      newGame();
      
    } else if (
      count == 9 &&
      b1 !== "" &&
      b2 !== "" &&
      b3 !== "" &&
      b4 !== "" &&
      b5 !== "" &&
      b6 !== "" &&
      b7 !== "" &&
      b8 !== "" &&
      b9 !== ""
    ) {
      newGame();
    }
  }
};