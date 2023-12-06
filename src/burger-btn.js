document.getElementById("burger").addEventListener("click",function (){
    document.getElementById("burger-menu").classList.add("open")
})
document.getElementById("close-btn").addEventListener("click",function (){
    document.getElementById("burger-menu").classList.remove("open")
})


//закрытие при нажатии на область вне модального окна
document.querySelector("#burger-menu .header__burger-menu").addEventListener('click', event => {
    event._isClickWithModal = true
})
document.querySelector("#burger-menu").addEventListener('click', event => {
    if (event._isClickWithModal) return;
    event.currentTarget.classList.remove('open')
})
