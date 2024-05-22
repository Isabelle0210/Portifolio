const acordeonTrigger =document.querySelectorAll('.acordeon .acordeon__btn')

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
