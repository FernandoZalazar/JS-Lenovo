let inputTwo = document.querySelector("#inputTwo");
let checkTwo = document.querySelector("#checkTwo");
let showTwo = document.querySelector("#showTwo");

checkTwo.addEventListener("click", (e) => {
    if(isNaN(inputTwo.value)){
        let = catchValue = inputTwo.value;
        let reverse = catchValue.split("").reverse().join("");
        if(reverse == catchValue){
            showTwo.innerHTML = "Your name is a palindrome";
            showTwo.style.color="green";
            return true;
        }else{
            showTwo.innerHTML = "Your name is not a palindrome";
            showTwo.style.color="red";
            return false;
        }
        if(catchValue){
            inputTwo.value = "";
        }
    }else{
        showTwo.innerHTML = "Please put a real Name 😥"
        showTwo.style.color="red";
    }
    

});