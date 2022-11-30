let numeroNotification = 3
const number = document.getElementById('numberNotification');
let btnDelete = document.querySelector('.main__deleteTodo');
number.textContent = numeroNotification


const cardPerson = document.querySelectorAll('.main__person');
const itemNotification = document.querySelectorAll('.point')
cardPerson.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        card.classList.add('desactived')
    })
    btnDelete.addEventListener('click', () => {
        card.classList.add('desactived')
    })
})
cardPerson.forEach((item) => {
    let imagenes = item.children[1].children[1].children[0];
    item.addEventListener('click', () => {
        number.textContent = numeroNotification --;
        number.textContent = numeroNotification;
        if(number.textContent < 0) {
           numeroNotification = 0
           number.textContent = numeroNotification
        } else if(numeroNotification === 0) {
            setTimeout(() => {
                alert('Todos los mensajes vistos !!')
            }, 1000)
        }
        imagenes.classList.add('btncito')
        
    })
    
    btnDelete.addEventListener('click', () => {
        imagenes.classList.add('btncito')
        number.textContent = numeroNotification = 0
    })
})