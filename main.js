/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu') //When we click each nav__link, we remove the show-menu class
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
    strings: ['Software Engineer', 'Web developer', 'Computer Science Student'], //adding professions
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
});

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    //Add a class if bottom offset is >50 of viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID-templateID-#form-publicKey
    emailjs.sendForm('service_ommx8sf', 'template_vbfty7p', '#contact-form', 'O-P_-4AslTw2hedFt')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after 5 sec
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear input fields
            contactForm.reset()
        }, () => {
            //Show error message
            contactMessage.textContent = 'Message not sent❌'
        })
}
contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //When scroll is higher than 350viewport height, add the show-scroll class to the tag with scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')

scrollActive=()=>{
    const scrollDown=window.scrollY

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
              sectionTop=current.offsetTop-58,
              sectionId=current.getAttribute('id'),
              sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollDown>sectionTop && scrollDown<=sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2000,
    reset: true, //Animations repeat
})

sr.reveal(`.home__content, .resume__content:nth-child(1), .footer__container`)
sr.reveal(`.home__data, .resume__content:nth-child(2)`,{delay:300, origin:'bottom'})

sr.reveal(`.about__content, .contact__content`,{origin:'bottom'})
sr.reveal(`.about__image, .contact__form`,{delay:300})

sr.reveal(`.projects__card`,{interval:100})