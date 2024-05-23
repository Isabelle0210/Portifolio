document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
});
//aqui estou colocando um evento em que as minhas letras de nav__title ficam se mexendo

window.onload = () => {
    var dynamicText = document.getElementById('dynamicText');
    var color = ['pink', 'lightblue', 'lightgreen','ligthpurple'];
    var currentIndex=0;

    setInterval(function(){
        dynamicText.style.color = color[currentIndex];
        currentIndex = (currentIndex + 1) % color.length;
    }, 1000);
}

/*const acordeonTrigger =document.querySelectorAll('.acordeon .acordeon__btn')

acordeonTrigger.forEach((acordeon__btn)=>{
    acordeon__btn.addEventListener('click',(e)=>{
        const acordeon = acordeon__btn.parentElement
        const isOpen = acordeon.classList.contains('open')
        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
})
*/
