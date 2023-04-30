// 14, 15, 29, 30, 42, 43, 55-59, 61-65 - color
// 14, 30, 42, 43, 55 - size
//функция создает верстку клавиатуры в блоке HTML, используя массив из ключей клавиш 
function creatKeyboard(arrOfKeys, htmlFieldElement) {
    for (let i = 0; i < arrOfKeys.length; i++) {

        if ((i === 14) || (i === 28) || ((i >= 54) && (i <= 58)) ||
            ((i >= 60) && (i <= 64))) {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_color' id = 'key'>" + arrOfKeys[i] + "</div>"
        } else if ((i === 13) || (i === 29) || (i === 41) || (i === 42) ||
            (i === 54) || (i === 42) || ((i >= 54) && (i <= 58)) ||
            ((i >= 60) && (i <= 64))) {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_color keyboard__key_size' id = 'key'>" + arrOfKeys[i] + "</div>"

        } else if (i === 59) {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key keyboard__key_bs-size' id = 'key'>" + arrOfKeys[i] + "</div>"

        } else {
            htmlFieldElement.innerHTML += "<div class = 'keyboard__key' id = 'key'>" + arrOfKeys[i] + "</div>"
        }


    }
    let keys = document.querySelectorAll('#key');
    for (key of keys) {
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
// создал массив event.key русскоязычной клавиатуры
const pressedRusKeys = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
    'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift',
    'Control', 'Meta', 'Alt', '(blank space)', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const pressedEngKeys  = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', `'`, 'Enter',
'Shift', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift',
'Control', 'Meta', 'Alt', '(blank space)', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.innerHTML = '<div id="textarea"></div><div id="keyfield"></div>';
document.body.append(keyboard);
let textArea = document.getElementById('textarea');
let keyField = document.getElementById('keyfield');
keyField.className = 'keyboard__keyfield'
creatKeyboard(pressedEngKeys, keyField);


