/* Desenvolva sua lógica aqui */
import { insertedValues } from "./valuesData.js";
import { createModal } from "./modal.js";

createModal()
let typeButtonFilter = 'todos'
let categoryID = '';

function categoryDefine(){
    const entryValue = document.querySelector('#entry__value')
    const exitValue = document.querySelector('#exit__value')

    entryValue.addEventListener('click', () => {
        categoryID = 0
    })
    exitValue.addEventListener('click', () => {
        categoryID = 1
    })
}
categoryDefine()
function createNewValue(){
    const modalController = document.querySelector('.modal__controller')
    const insertButton = document.querySelector('.insert__value')

    let valueInput = document.querySelector('.value__input')
    let nextId = insertedValues.length +1
    insertButton.addEventListener('click', (event) => {
        event.preventDefault()
        let createValue = {};
        createValue.id = nextId;
        createValue.value = parseFloat(valueInput.value);
        createValue.categoryID = categoryID;
        if(!isNaN(createValue.value) && createValue.categoryID !== ''){
            insertedValues.push(createValue)
            nextId = nextId + 1;
            valueInput.value = ''
            categoryID = ''
        }else{ 
            valueInput.value = ''
            categoryID = ''
            return alert('Insira um valor correto.')
        }
        valueInput.value = ''
        categoryID = ''
        modalController.close()
        createValueList(typeButtonFilter)
    })
}
createNewValue()
function createValueList (valueType){ 
    const totalSum = document.querySelector('.total__sum')
    const listContainer = document.querySelector('.list__container')
    listContainer.innerHTML = ''
    let filterValue;
    if(valueType === 'todos'){
        filterValue = insertedValues
    }
    else if(valueType === 'entrada'){
        filterValue = insertedValues.filter(value => value.categoryID === 0)
    }
    else if(valueType === 'saida'){
        filterValue = insertedValues.filter(value => value.categoryID === 1)
    }
    filterValue.forEach(element => {
        let category;
        if(element.categoryID === 0){
            category = 'Entrada'
        }else{
            category = 'Saida'
        }
       listContainer.insertAdjacentHTML("beforeend", 
       ` 
       <div class="list__item">
            <p>R$ ${element.value.toFixed(2)}</p>
            <div class="list__item__buttons">
                <p>${category}</p>
                <button class="delete__button" id="${element.id}"><img src="./src/assets/trash.svg" alt="trash"></button>
        
            </div>
        </div>
       `)
    });
        let valueSumAll;
        if(valueType === 'todos'){
            let entryValue = insertedValues.filter(value => value.categoryID === 0)
            let exitValue = insertedValues.filter(value => value.categoryID === 1)
            const entryValueSum = entryValue.reduce((accumulator, array) => accumulator + array.value, 0)
            const exitValueSum = exitValue.reduce((accumulator, array) => accumulator + array.value, 0)
            const allValueSum = entryValueSum + exitValueSum
            valueSumAll = allValueSum
        
        }
        else if(valueType === 'entrada'){
            let entryValue = insertedValues.filter(value => value.categoryID === 0)
            const entryValueSum = entryValue.reduce((accumulator, array) => accumulator + array.value, 0)
            valueSumAll = entryValueSum        
        }
        else if(valueType === 'saida'){
            let exitValue = insertedValues.filter(value => value.categoryID === 1)
            const exitValueSum = exitValue.reduce((accumulator, array) => accumulator + array.value, 0)
            valueSumAll = exitValueSum
        }
        totalSum.innerHTML = `R$ ${valueSumAll.toFixed(2)}`
        deleteValueList()
}
createValueList('todos')
let listType = 'todos' //ajuda a chamar correto a function createValueList

function deleteValueList(){
    const buttons = document.querySelectorAll('.delete__button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        const div = button.parentNode.parentNode;
        div.remove()

        const buttonId = Number(button.id)
        const index = insertedValues.findIndex(value => value.id === buttonId)
        if(index !== -1){
            insertedValues.splice(index, 1)
        }
        createValueList (listType)
        valueNone()
    })})
}

function financeResume (){
    const buttonAll = document.querySelector('#button__all')
    const buttonEntry = document.querySelector('#button__entry')
    const buttonExit = document.querySelector('#button__exit')

    buttonAll.addEventListener('click', () => {
        createValueList('todos')
        typeButtonFilter = 'todos'
        listType = 'todos'
        valueNone()
    })
    buttonEntry.addEventListener('click', () => {
        createValueList('entrada')
        typeButtonFilter = 'entrada'
        listType = 'entrada'
        valueNone()
    })
    buttonExit.addEventListener('click', () => {
        createValueList('saida')
        listType = 'saida'
        typeButtonFilter = 'saida'
        valueNone()
    })

}
financeResume()

function valueNone (){
    const listItems = document.querySelectorAll('.list__item')
    const listContainer = document.querySelector('.list__container')
    if(listItems.length < 1){
        listContainer.insertAdjacentHTML(`afterbegin`, 
        `
        <div class="none__value__container">
            <p class="p1">Nenhum valor cadastrado</p>
            <p class="p2">Registrar novo valor</p>
        </div>
        `)
    }
}



