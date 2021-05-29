function toggleMeny() {

    document.querySelector('.nav-links').classList.toggle('navActive')
    document.querySelector('.burger').classList.toggle('toggle')
    
}

document.querySelector('burger').addEventListener('click', toggleMeny)