let input = document.getElementById("inputScreen");
let buttons = document.querySelectorAll("#btn");

let content = "";
let calculate =Array.from(buttons);

calculate.forEach( button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === '='){
            content = eval(content);
            input.value = content;
        }
        else if(e.target.innerHTML == 'AC'){
            content = "";
            input.value = content;
        }
        else if(e.target.innerHTML == 'Del'){
            content = content.substring(0, content.length-1)
            input.value = content;
        }
        else{
            content += e.target.innerHTML;
            input.value = content;
        }
    })
})