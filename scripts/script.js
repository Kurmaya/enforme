const cta = document.querySelector('.sticky-cta');
cta.addEventListener('click',()=>{
    cta.classList.toggle('active');
})
document.querySelector('#hero>video').playbackRate='0.5';
