const reads = document.querySelectorAll('.more');

reads.forEach(read=>{
    read.addEventListener('click', ()=>{
        reads.forEach(r=> {
            r.classList.remove('active');
            r.parentElement.classList.remove('active');
        })
        read.parentElement.classList.toggle('active'); 
        read.classList.toggle('active');
    })
})