const cta = document.querySelector('.sticky-cta');




document.querySelector('.year').textContent = new Date().getFullYear();
cta.addEventListener('click',()=>{
    cta.classList.toggle('active');
})
document.querySelector('#hero>video').playbackRate='0.5';
