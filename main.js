// Menu show
const showMenu =(toggleID, navID) =>{
    const toggle =document.getElementById(toggleID),
        nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
// Remove Menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))