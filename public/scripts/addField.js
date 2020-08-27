// Procurar botão "novo horario"
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
// Executar uma ação
function cloneField() {
// Mostrar os campos para duplicar e duplicar
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
// limpar os campos para que coloque na pagina limpos
const fields = newFieldContainer.querySelectorAll('input')
fields.forEach(function(field) {
    field.value = ""
})

// Colocar na pagina, mas onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)



}







