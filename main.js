// taggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');
sections.forEach(sec => {
    let top =window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >=  offset && top < offset + height) {
        // active navber Links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
});

header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);
}
  
let FullName= document.getElementById("FullName");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let MobileNunmber = document.getElementById("Nunmber");
let YourMessage = document.getElementById("Your Message");
let Sumbit = document.getElementById("Sumbit");

console.log(FullName,Email,Nunmber,Password,YourMessage,Sumbit)


let dataPro;
if(localStorage.Data != null){
    dataPro = JSON.parse(localStorage.Data)
}else{
    dataPro = [];
}


Sumbit.onclick = function(){
    let newPro = {
        FullName:FullName.value,
        Email:Email.value,
        Password:Password.value,
        MobileNunmber:MobileNunmber.value,
        YourMessage:YourMessage.value,
    }
    dataPro.push(newPro);
    //save local storage
    localStorage.setItem('Data', JSON.stringify(dataPro)  )
    
    clearData()
}



//clear inputs
function clearData(){
    FullName.value = '';
    Email.value = '';
    Password.value = '';
    MobileNunmber.value = '';
    YourMessage.value = '';
}
  
