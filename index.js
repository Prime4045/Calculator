let string = ""
let button = document.querySelectorAll('.button');
let display = document.querySelector('.screen')

Array.from(button).forEach(function(num){
    num.addEventListener('click', function(e){

        if(e.target.value === "AC"){
            string = ""
            display.value = string
        }else if(e.target.value === "="){
            string = eval(string)
            display.value = string
        }else if(e.target.value === "DEL") {
            string = string.substring(0, string.length - 1)
            display.value = string
        } else{
            string += e.target.value;
            display.value = string;
        }
    })
}) 

