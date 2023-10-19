
let value = '';

// to add event listner to all buttons

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            value = eval(value)
            document.querySelector('input').value = value
        }else if(e.target.innerHTML == "c"){
            value = ""
            document.querySelector('input').value = value
        }
         else{
            console.log(e.target)
         value = value + e.target.innerHTML
         document.querySelector('input').value = value
         }
    })
})