let buttons = document.querySelectorAll('.product .row .buttons > *');

function removeBoxActiveClass() {
    let boxs = document.querySelectorAll('.product .row .detail-box > div');
    boxs.forEach((box) => {
        box.classList.remove('active');
    })
}

    function addClass(className){
    let boxs = document.querySelectorAll('.product .row .detail-box > div');
    boxs.forEach((box)=>{
        if (box.classList[0] == className){
            box.classList.add('active')
        }
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        removeBoxActiveClass();
        let boxClass = button.classList[0]
        addClass(boxClass);
    })
})