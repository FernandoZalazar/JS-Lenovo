let valueInput = document.querySelector("#input");
let buttonAdd = document.querySelector("#add");
let show = document.querySelector("#show");
let buttonPair = document.querySelector("#buttonPair");

let numbersPair = [];
let numbersPairShow = [];

buttonAdd.addEventListener("click", (e) => {
    if(valueInput.value >= 0){
        let = catchNumber = valueInput.value;
        numbersPair.push(catchNumber);
        if(catchNumber){
            valueInput.value = "";
        }
    }
    else{
        show.innerHTML="Please put positive number"
        show.style.color="red"
    }
});

buttonPair.addEventListener("click", (e) => {
    for (let number of numbersPair){
        
        if(number % 2 == 0){
            numbersPairShow.push(number);
            show.innerHTML= numbersPairShow;
            show.style.color="green";
        }
    }
});