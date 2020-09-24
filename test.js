//-----------------QUESTION 1
// Using 24 hour timing only
let time = -3
if (time>=1 && time<=11){
    console.log("Good morning");
}
else if (time>=12 && time<=15){
    console.log("Good afternoon");
}
else if (time>=16 && time<=20){
    console.log("Good night");
}

//-----------------QUESTION 2
even = []
odd = []
for (let num=1; num<=100; num++) {
    if (num % 2 != 0){
        odd.push(num)
    }

    else if (num % 2 == 0){
        even.push(num)
    }
}

console.log(`EVEN NUMBERS: \n${even}`);
console.log(`ODD NUMBERS: \n${odd}`);


//--------------QUESTION 4
i = 0
while (i <= 10) {
    console.log(`For Loop Number: ${i}`);
    i++
}


//--------------QUESTION 5
let button = document.getElementById("bait")

number = 0;
button.addEventListener("click", ()=>{
    number++
    document.getElementById("infinity").innerHTML = number
})

