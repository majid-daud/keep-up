navbar = document.getElementById('navbar')
navbtnopen = document.getElementById('navbtnopen')
navbtnclose = document.getElementById('navbtnclose')

function navNone() {
    navbar.style.display = 'block'; 
    navbtnopen.style.display = 'none';
    navbtnclose.style.display = 'block';
    index.style.display = 'block';

}

function navOn() {
    navbar.style.display = 'none';  
    navbtnopen.style.display = 'block';
    navbtnclose.style.display = 'none';
    index.style.display = 'none';

}


index = document.getElementById('index')

function indexHide() {
    index.style.display = 'none';
    navbar.style.display = 'none';  
    navbtnopen.style.display = 'block';
    navbtnclose.style.display = 'none';
    

}


