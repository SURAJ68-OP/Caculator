//select id
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');//sellectsl all buttons

let string = ""; //stores value
let arr = Array.from(buttons);//converts buttons to array

arr.forEach(button => {  //for every button has clck event and operation
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);//eval means evaluate 
            input.value = string;
        } 
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } 
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else {
            string += e.target.innerHTML;
            input.value = string; //display every string
        }

    });
});
