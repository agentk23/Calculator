let numbers = document.querySelector('.numbers');
let resultBox = document.getElementById('resultbox');
let operationContainer = document.querySelector('.operation-container');


//2 be reseted when entering second number
let nr = 0;
let digitCounter = 0;
let decimalBtnPressed = false;
let decimalMode = false;
let decimalsCounter = 0;
//2 be reseted when entering second number
numbers.addEventListener('click', numbersClickFunction);


let selectedOperation;
let isOperationSelected=false;
let operations = document.querySelectorAll('.operation');

let firstNum = 0;



resultBox.value = '';



operationContainer.addEventListener('click', operationClickFunction);
operationContainer.addEventListener('mouseover', hoverFunction);

//function for selecting operation/restablishing original button color
function hoverFunction(e){
    e.stopPropagation();
    const BreakError = {};
    try{
        operations.forEach(op => 
            {
                if(isOperationSelected == true){
                    throw BreakError;
                }else{
                    if(e.target == op){
                        op.setAttribute('style', 'background: #f0f0f0af');
                    }else{
                        op.setAttribute('style', 'background: #f4f4f4');
                    }
                }
                
            }); 
    }catch(err){
        if(err !== BreakError){
            throw err;
        }
    }
    
}

//function for selecting an operation
function operationClickFunction(e){
    let btnPressed = e.target;
    let activationColor = '#9b9a9bce';
    switch(btnPressed.innerText){
        case '+': 
            if(!isOperationSelected){
                btnPressed.style.background = activationColor;
                isOperationSelected = true;
                firstNum = nr;
                resetResultBox();
                displayMiniHistory('+');
                btnPressed.classList.add('pressed');
            }
            break;
        case '-':
            if(!isOperationSelected){
                btnPressed.style.background = activationColor;
                isOperationSelected = true;
                firstNum = nr;
                resetResultBox();
                displayMiniHistory('-');
                btnPressed.classList.add('pressed');

            }
            break;
        case '/':
            if(!isOperationSelected){
                btnPressed.style.background = activationColor;
                isOperationSelected = true;
                firstNum = nr;
                resetResultBox();
                displayMiniHistory('/');
                btnPressed.classList.add('pressed');


            }
            break;
        case '*':
            if(!isOperationSelected){
                btnPressed.style.background = activationColor;
                isOperationSelected = true;
                firstNum = nr;
                resetResultBox();
                displayMiniHistory('*');
                btnPressed.classList.add('pressed');


            }
            break;
        case 'C':
            operations.forEach(op => op.style.background = '#f4f4f4');
            isOperationSelected = false;
            resetResultBox();
            resetMiniHistory();
            let rmClass = document.querySelector('.pressed');
            rmClass.classList.remove('pressed');

            break;
        case 'Del':
            if(isOperationSelected){
                if(nr === 0){
                    isOperationSelected = false;
                    resetMiniHistory();
                }else{
                    removeLastDigit();
                }
            }else{
                removeLastDigit();
                resultBox.value = nr;
            }
            break;
        default:
            break;
    }
}
//removeLastDigit function for Del button -> deletes last character from num or deletes the selected operation
function removeLastDigit(){
    let stringNr = (nr.toString());
    if(decimalMode){
        decimalsCounter--;
        console.log(decimalsCounter);
        if(decimalsCounter === 1){
            decimalMode = false;
            decimalsCounter = 0;
        }
        stringNr = stringNr.substring(0, stringNr.length - 1);
        nr = parseFloat(stringNr);
   
    }else{
        digitCounter--;
        stringNr = stringNr.substring(0, stringNr.length - 1);
        nr = parseInt(stringNr);
        if(digitCounter === 0){
            nr = 0;
        }
        
        
    }
    
}
function resetResultBox(){
    resultBox.value = '';
    nr = 0;
    decimalBtnPressed = false;
    decimalMode = false;
    decimalsCounter = 0;
    digitCounter = 0;
}
//historyBox functionality
let historyBox = document.querySelector('.history-box');

function displayMiniHistory(operation, secondNum){
    historyBox.animate([{text: '#7a7b7cec'},
        {color: 'black'}], 2000);

    historyBox.value = firstNum.toString() + " " + operation;
    if(secondNum !== undefined){
        historyBox.value = firstNum.toString() + " " + operation + " " + secondNum.toString() + " = ";
    }

}
function resetMiniHistory(){
    historyBox.color = '#7a7b7cec';
    historyBox.value = '';
}
//to reset historyBox to default on page load
document.addEventListener('DOMContentLoaded', function(e){ e.stopPropagation(); resetMiniHistory();})


function numbersClickFunction(e){
    let keyPressed = e.target.innerText;
    switch(keyPressed){
        case '0':
            if(decimalMode == false){
                nr = nr*10;
                if(nr === 0){
                    digitCounter = 0;
                }else{
                    digitCounter++;
                }
            }else{
                decimalsCounter++;
            }    
            break;
        case '1':
            if(decimalMode == false){
                nr = nr*10 + 1;
                digitCounter++;
            }else{
                nr = nr + (1 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }
            break;
        case '2':
            if(decimalMode == false){
                nr = nr*10 + 2;
                digitCounter++;
            }else{
                nr = nr + (2 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '3':
            if(decimalMode == false){
                nr = nr*10 + 3;
                digitCounter++;
            }else{
                nr = nr + (3 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '4':
            if(decimalMode == false){
                nr = nr*10 + 4;
                digitCounter++;
            }else{
                nr = nr + (4 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '5':
            if(decimalMode == false){
                nr = nr*10 + 5;
                digitCounter++;
            }else{
                nr = nr + (5 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '6':
            if(decimalMode == false){
                nr = nr*10 + 6;
                digitCounter++;
            }else{
                nr = nr + (6 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '7':
            if(decimalMode == false){
                nr = nr*10 + 7;
                digitCounter++;
            }else{
                nr = nr + (7 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '8':
            if(decimalMode == false){
                nr = nr*10 + 8;
                digitCounter++;
            }else{
                nr = nr + (8 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        case '9':
            if(decimalMode == false){
                nr = nr*10 + 9;
                digitCounter++;
            }else{
                nr = nr + (9 / Math.pow(10, decimalsCounter));
                decimalsCounter++;
            }

            break;
        
        case '.':
            if(decimalBtnPressed == false){
                if(decimalMode == false){
                    decimalMode = true;
                    decimalsCounter++;
                }  
            }
            break;
        case '=':
            let op = document.querySelector('.pressed');
            switch(op.innerText){
                case '+':
                    displayMiniHistory('+', nr);
                    nr+=firstNum;

                    break;
                case '-':
                    displayMiniHistory('-', nr);
                    nr = (firstNum-nr);

                    break;
                case '*':
                    displayMiniHistory('*', nr);
                    nr*=firstNum;
                    
                    break;
                case '/':
                    displayMiniHistory('/', nr);
                    if(firstNum !== 0){
                        nr = (firstNum/nr);
                    }else{
                        alert('Dividing by 0 - no no');
                    }
                    break;
                default:
                    break;
            }
        
    }
    resultBox.value = nr;
}

