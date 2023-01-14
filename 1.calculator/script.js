let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) => {
        console.log(e.target.innerText);
        if (e.target.innerText == "=") {
            string = eval(string);
        }else if (e.target.innerText.toLowerCase() == "c") {
            string = "";
        }else{
            string += e.target.innerText;
        }        
        document.querySelector('input').value = string;
    })
})