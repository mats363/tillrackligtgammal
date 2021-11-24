let inputAge = document.getElementById("inputAge");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
result.innerHTML = "hejsan";


btn.addEventListener("click", function() {
  let ageAsNumber = Number(inputAge.value);
  age = ageCheck(ageAsNumber);
  if (ageAsNumber) {
      console.log(age);
      result.innerHTML = age;
  }
  else {
      result.innerHTML = "Du måste ange en siffra";
  }
})


function ageCheck (x) {
    let message = "";
    if (x < 18){
        message = "Du är för ung!";
    }
    else if (x > 18 && x < 65) {
        message = "Du är i perfekt ålder!";
    }

    else if (x > 65) {
        message = "Du är för gammal!";
    }

    return message;
}

// number();

// (under 18 år), precis rätt (18 eller över - yngre än 65 år) eller 
// för gammal (65 år eller över).