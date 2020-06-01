let rootElem = document.getElementById('root');

let containerHeader = document.createElement('div')
let title = document.createElement('h1')
let text = document.createElement('p')
let inputElem = document.createElement('input')
let inputBtn = document.createElement('button')
title.innerHTML = 'Распорядок Дня';
text.innerHTML = 'Добавить дело на день:';
inputBtn.innerHTML = 'Добавить';
containerHeader.classList.add('containerHeader');
inputBtn.classList.add('inputBtn');
containerHeader.append(title);
containerHeader.append(text);
containerHeader.append(inputElem);
containerHeader.append(inputBtn);
rootElem.append(containerHeader);


function addForm(elem) {
    let container = document.createElement('div');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type',"checkbox");
    let todoElem = document.createElement('p');
    let closeElem = document.createElement('div');

    todoElem.innerHTML = elem;
    closeElem.innerHTML = '&#10008;';

    container.classList.add('container');
    todoElem.classList.add('todoList');
    closeElem.classList.add('close');

    container.append(checkbox);
    container.append(todoElem);
    container.append(closeElem);
    rootElem.append(container);

    checkbox.addEventListener('click', function () {
        if (this.checked) {
            checkbox.closest('.container').style.opacity = '0.5';

        } else {
            checkbox.closest('.container').style.opacity = '1';
        }
    })
    closeElem.addEventListener('click', function () {
        closeElem.closest('.container').remove();
    })
}

for (let i = 0; i<data.length; i++){
    addForm(data[i].todo)
}

inputBtn.addEventListener('click', function () {
    let textInput = inputElem.value;
    addForm(textInput)
    inputElem.value = '';
})