let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) => {
        //console.log(e.target.innerText);
        try {
            if (e.target.innerText == "=") {
                string = eval(string);
            }else if (e.target.innerText.toLowerCase() == "c") {
                string = "";
            }else{
                string += e.target.innerText;
            }        
            document.querySelector('input').value = string;
          }
          catch(err) {
            alert("Please select correct calculation format..");
            string = "";
            document.querySelector('input').value = string;
          }        
    })
})