// 14, 15, 29, 30, 42, 43, 55-59, 61-65 - color
// 14, 30, 42, 43, 55 - size
//функция создает верстку клавиатуры в блоке HTML, используя массив из ключей клавиш 
function changeNameKeys(keys){
    for (let key of keys) {
        switch (key.textContent) {
            case 'Delete':
                key.textContent = 'DEL';
                break
            case 'Enter':
                key.textContent = 'ENTER';
                break
            case 'CapsLock':
                key.textContent = 'Caps Lock';
                break
            case 'Meta':
                key.textContent = 'Win';
                break
            case '(blank space)':
                key.textContent = '';
                break
            case 'Control':
                key.textContent = 'Ctrl';
                break
            case 'ArrowUp':
                key.innerHTML = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.116566 12L7.004 0.40909L13.8914 12H0.116566Z" fill="white"/>
                </svg>`;
                break
            case 'ArrowLeft':
                key.innerHTML = `<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4992 14.3636L0.79106 7.54545L12.4992 0.727272V14.3636Z" fill="white"/>
                </svg>`;
                break
            case 'ArrowDown':
                key.innerHTML = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.116566 0.0909088H13.8861L6.99867 11.6818L0.116566 0.0909088Z" fill="white"/>
                </svg>`;
                break
            case 'ArrowRight':
                key.innerHTML = `<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.494185 14.3636V0.727272L12.2023 7.54545L0.494185 14.3636Z" fill="white"/>
                </svg>`;
                break

        }
    }
}
function creatRusKeyboard(arrOfKeys, htmlFieldElement) {
    for (let i = 0; i < arrOfKeys.length; i++) {

        if ((i === 14) || (i === 28) || ((i >= 54) && (i <= 58)) ||
            ((i >= 60) && (i <= 64))) {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_color' id = 'key' data =" + `${i}` + ">" + arrOfKeys[i] + "</div>"
        } else if ((i === 13) || (i === 29) || (i === 41) || (i === 42) ||
            (i === 54) || (i === 42) || ((i >= 54) && (i <= 58)) ||
            ((i >= 60) && (i <= 64))) {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_color keyboard__key_size' id = 'key' data =" + `${i}` + ">" + arrOfKeys[i] + "</div>"

        } else if (i === 59) {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_bs-size' id = 'key' data =" + `${i}` + ">" + arrOfKeys[i] + "</div>"

        } else {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key' id = 'key' data =" + `${i}` + ">" + arrOfKeys[i] + "</div>"
        }


    }
    let keys = document.querySelectorAll('#key');
    changeNameKeys(keys)
}
    function creatEngKeyboard(arrOfKeys, htmlFieldElement) {
        for (let i = 0; i < arrOfKeys.length; i++) {
    
            if ((i === 14) || (i === 28) || ((i >= 54) && (i <= 58)) ||
                ((i >= 60) && (i <= 64))) {
                htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_color' id = 'key' data =" + '0'+`${i}` + ">" + arrOfKeys[i] + "</div>"
            } else if ((i === 13) || (i === 29) || (i === 41) || (i === 42) ||
                (i === 54) || (i === 42) || ((i >= 54) && (i <= 58)) ||
                ((i >= 60) && (i <= 64))) {
                htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_color keyboard__key_size' id = 'key' data =" + '0'+`${i}` + ">" + arrOfKeys[i] + "</div>"
    
            } else if (i === 59) {
                htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_bs-size' id = 'key' data =" + '0'+`${i}` + ">" + arrOfKeys[i] + "</div>"
    
            } else {
                htmlFieldElement.innerHTML += "<div class = 'keyboard__key' id = 'key' data =" + '0'+`${i}` + ">" + arrOfKeys[i] + "</div>"
            }
    
    
        }
    
    let keys = document.querySelectorAll('#key');
    changeNameKeys(keys)
    }
// создал массив event.key русскоязычной клавиатуры
const pressedRusKeys = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
    'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift',
    'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const pressedEngKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', `'`, 'Enter',
    'Shift', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift',
    'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.innerHTML = '<input type="textarea" id="textarea"></input><div id="keyfield-rus"></div><div id="keyfield-eng"></div>';
document.body.append(keyboard);
const textArea = document.getElementById('textarea');
textArea.className = "keyboard__textarea"
const keyFieldRus = document.getElementById('keyfield-rus');
keyFieldRus.className = 'keyboard__keyfield'
const keyFieldEng = document.getElementById('keyfield-eng');
keyFieldEng.className = 'keyboard__keyfield keyboard__keyfield_disable';
creatRusKeyboard(pressedRusKeys, keyFieldRus);


addEventListener('click', () => {
    keyFieldEng.classList.toggle('keyboard__keyfield_disable');
    keyFieldRus.classList.toggle('keyboard__keyfield_disable');
    if (!keyFieldEng.innerHTML) {
        creatEngKeyboard(pressedEngKeys, keyFieldEng);
        keyFieldRus.innerHTML = '';
    }
    else {
        creatRusKeyboard(pressedRusKeys, keyFieldRus);
        keyFieldEng.innerHTML = '';
    }

})
function highlight(el) {
    el.classList.add('keyboard__key_active');
}
function cancelHighlight(el) {
    el.classList.remove('keyboard__key_active');
}

const highlightRusKey = (event) =>{
    for (let item of pressedRusKeys) {
        if (event.key === item) {
            let indexOfKey = pressedRusKeys.indexOf(item);
             highlight(document.querySelector('[data =' + '"' + `${indexOfKey}` + '"' + ']'));
        }
    }
};
const cancelHighlightRusKey = (event) =>{
    for (let item of pressedRusKeys) {
        if (event.key === item) {
            let indexOfKey = pressedRusKeys.indexOf(item);
             cancelHighlight(document.querySelector('[data =' + '"' + `${indexOfKey}` + '"' + ']'));
        }
    }
};
const highlightEngKey = (event) =>{
    for (let item of pressedEngKeys) {
        if (event.key === item) {
            let indexOfKey = pressedEngKeys.indexOf(item);
             highlight(document.querySelector('[data =' + '"' +'0'+`${indexOfKey}` + '"' + ']'));
        }
    }
};
const cancelHighlightEngKey = (event) =>{
    for (let item of pressedEngKeys) {
        if (event.key === item) {
            let indexOfKey = pressedEngKeys.indexOf(item);
         cancelHighlight(document.querySelector('[data =' + '"'+'0'+ `${indexOfKey}` + '"' + ']'));
        }
    }
};

document.addEventListener('keydown', highlightRusKey);
document.addEventListener('keyup', cancelHighlightRusKey)


document.addEventListener('keydown', highlightEngKey);
document.addEventListener('keyup', cancelHighlightEngKey)
