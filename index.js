let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ''
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        
        console.log("Button = ", buttonText);
        if(buttonText == "←") {
            screenValue = screen.value.substr(0, screen.value.length - 1);
            screen.value = screenValue;
        }
        else if ( buttonText == "✆"){
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText.replace(/\D/g, "");
            screen.value = screenValue;
        }
    })
}