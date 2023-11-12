/* Desenvolva sua lógica aqui */
import { valuesCategory } from "./valuesData.js"
import { insertedValues } from "./valuesData.js"

export function createModal (){
    const buttonShowModal = document.querySelector('.show__modal')
    const modalController = document.querySelector('.modal__controller')
    const modalContainer = document.querySelector('.modal__container')

    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal__header')
    const titleModal = document.createElement('h2')
    titleModal.classList.add('title__modal')
    const closeModal = document.createElement('button')
    closeModal.classList.add('close-modal')
    const infoModal = document.createElement('p')
    infoModal.classList.add('info__modal')

    
    const valueForm = document.createElement('form')
    valueForm.classList.add('value__form--container')
    const valueTitle = document.createElement('h3')
    valueTitle.classList.add('value__title')
    const inputContainer = document.createElement('div')
    inputContainer.classList.add('input__container')
    const valueSymbol = document.createElement('label')
    valueSymbol.classList.add('value__symbol')
    const valueInput = document.createElement('input')
    valueInput.classList.add('value__input')
    
    const typeValueForm = document.createElement('form')
    typeValueForm.classList.add('type__value--container')
    const typeValueTitle = document.createElement('h3')
    const typeValueButtonsContainer = document.createElement('div')
    typeValueButtonsContainer.classList.add('type__buttons--container')
    const entryValue = document.createElement('input')
    entryValue.classList.add('button-outline')
    const entryText = document.createElement('label')
    entryText.classList.add('entry__container','button-outline')
    const exitValue = document.createElement('input')
    exitValue.classList.add('button-outline')
    const exitText = document.createElement('label')
    exitText.classList.add('exit__container','button-outline')

    const footerModal = document.createElement('form')
    footerModal.classList.add('footer__modal')
    const cancelModal = document.createElement('button')
    cancelModal.classList.add('cancel__modal')
    const insertValue = document.createElement('button')
    insertValue.classList.add('insert__value')

    
    {titleModal.innerText = 'Registro de valor'
    closeModal.innerText = 'X'
    infoModal.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    valueTitle.innerText = 'Valor'
    valueSymbol.innerText = 'R$'
    valueInput.innerText = '00,00'
    typeValueTitle.innerText = 'Tipo de valor'
    entryValue.innerText = valuesCategory[0]
    exitValue.innerText = valuesCategory[1]
    entryText.innerText = 'Entrada'
    exitText.innerText = 'Saida'
    cancelModal.innerText = 'Cancelar'
    insertValue.innerText = 'Inserir valor'

    valueInput.type = 'number'
    valueInput.placeholder = '00,00'
    valueSymbol.setAttribute('for', 'value')

    entryValue.type = 'radio'
    entryValue.checked = true
    entryValue.id = 'entry__value'
    entryValue.name = 'categoryID'
    entryValue.value = '0'
    entryValue.hidden = true
    entryText.setAttribute('for', 'entry__value')
    
    exitValue.type = 'radio'
    exitValue.id = 'exit__value'
    exitValue.name = 'categoryID'
    exitValue.value = '1'
    exitValue.hidden = true
    exitText.setAttribute('for', 'exit__value')}

    modalHeader.append(titleModal,closeModal,infoModal)
    valueForm.append(valueTitle,inputContainer)
    inputContainer.append(valueSymbol,valueInput)
    typeValueForm.append(typeValueTitle,typeValueButtonsContainer)
    typeValueButtonsContainer.append(entryText,entryValue,exitText,exitValue)
    footerModal.append(cancelModal,insertValue)
    modalContainer.append(modalHeader, valueForm, typeValueForm,footerModal)
    modalController.append(modalContainer)

    function showModal(){
        buttonShowModal.addEventListener('click', () => {
            modalController.showModal()
            modalClose()
    })
    
}
    

    function modalClose(){
        closeModal.addEventListener('click', () => {
            modalController.close()
            valueInput.value = '';
        })
    }
    showModal()
}



