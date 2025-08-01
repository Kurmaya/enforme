const cta = document.querySelector('.sticky-cta');
const close = document.querySelector('.close');
close.addEventListener('click',()=>{
    close.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
})



document.querySelector('.year').textContent = new Date().getFullYear();
cta.addEventListener('click',()=>{
    cta.classList.toggle('active');
})
document.querySelector('#hero>video').playbackRate='0.5';
