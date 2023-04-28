let pressedKeys = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift', 'Control', 'Alt', '(blank space)', 'Control', '\\', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let keyboard = document.createElement('div');
keyboard.className ='keyboard';
keyboard.innerHTML= '<div id="textarea"></div>gdfgs<div id="keyfield"></div>';
document.body.append(keyboard);
let textArea = document.getElementById('textarea');
let keyField = document.getElementById('keyfield');
keyField.className = 'keyboard__keyfield'
for (let i=0; i < pressedKeys.length; i++){
    keyField.innerHTML += "<div class = 'keyboard__key' id = 'key'>"+pressedKeys[i]+"</div>"
}