const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubtract = document.querySelector("#buttonSub");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function addition(num1, num2) {
    // sans TS pour verifier qu'on à bien des nombres passé dans la fonction
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        // cas ou la data d'entrée n'est pas un type number
        //on converti la donnée en entrée en number avec le +
        return +num1 + +num2;
    }
}

function subtraction(num1, num2) {
    return num1 - num2;
}

buttonAdd.addEventListener("click", function () {
    console.log(addition(input1.value, input2.value));
});

buttonSub.addEventListener("click", function () {
    console.log(subtraction(input1.value, input2.value));
});
