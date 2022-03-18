window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        document.querySelector('.goTop')
        .classList.add('showA')
    }else{
        document.querySelector('.goTop')
        .classList.remove('showA')
    }
}

document.querySelector('.goTop').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})