// //////////////////////////////Sidebar toggle
const navMenu=document.getElementById('sidebar'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener("click", ()=>{
     navMenu.classList.add('show-sidebar')
    })
}

if(navToggle){
    navClose.addEventListener("click", ()=>{
     navMenu.classList.remove('show-sidebar')
    })
}


// ///////////////////////////Skills///////////////////////
const tabs=document.querySelectorAll('[data-target]'),
tabcontent=document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener("click", () => {
        const target= document.querySelector(tab.dataset.target)

        tabcontent.forEach(tabcontents => {
            tabcontents.classList.remove('skill-active')
        })
        target.classList.add('skill-active')
        tabs.forEach(tab => {
            tab.classList.remove('skill-active')
        })
        tab.classList.add('skill-active')
        
    
    })
})
////////////////////////////////////////////////////// Projects
// ////////////////////////////////mix-filter

let mixerProject= mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation:{
        duration:300
    }
})

const linkWork = document.querySelectorAll('.work-item');
function activeWork(){
    linkWork.forEach(l=>l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener("click",activeWork))

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-btn")){
        togglePortPop();
        portItemDetails(e.target.parentElement);
    }
})
function  togglePortPop(){
   document.querySelector(".port-pop").classList.toggle("open")
}

document.querySelector(".port-pop-close").addEventListener("click",togglePortPop)

function portItemDetails(portItem){
    document.querySelector(".pp-thumb img").src=portItem.querySelector(".work-img").src
    document.querySelector(".port-pop-subtit span").innerHTML =portItem.querySelector(".work-title").
    innerHTML;
    document.querySelector(".port-pop-body").innerHTML =portItem.querySelector(".portfolio-item-details").
    innerHTML;
}

////////////////////////////////////////// service
const modelViews=document.querySelectorAll('.serv-model'),
modelBtn=document.querySelectorAll('.serv-btn'),
modelCloses=document.querySelectorAll('.serv-model-close')

let model= function(modelClick){
    modelViews[modelClick].classList.add('active-model')

}
modelBtn.forEach((modelbt,i)=>{
    modelbt.addEventListener('click',()=>{
        model(i)
    })
})
modelCloses.forEach((modelClose)=>{
    modelClose.addEventListener('click',()=>{
        modelViews.forEach((modelView)=>{
            modelView.classList.remove('active-model')
        })
    })
})

////////////////////////////////////////contact
const inputs= document.querySelectorAll("input, textarea")
function focusFun(){
    let parent=this.parentNode;
    parent.classList.add("focus")
}
function blurFun(){
    let parent=this.parentNode;
    if(this.value== ""){
        parent.classList.remove("focus")
    }
}
inputs.forEach((input)=>{
    input.addEventListener("focus",focusFun)
    input.addEventListener("blur",blurFun)

})
const form = document.querySelector(".cont-form");
const inputs1 = document.querySelectorAll(".input");
form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then((response) => {
        if (response.ok) {
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent successfully!',
                icon: 'success',
                confirmButtonColor: '#005b96', 
                background: '#2e2d2de0',
                color:'#fff'
            }).then(() => {
               
                form.reset();
                inputs1.forEach((input) => {
                    const parent = input.parentNode;
                    parent.classList.remove("focus"); // إزالة الـ focus من الحقول
                });
            });
        } else {
           
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonColor: '#2e2d2de0',
                background: '#f8f9fa',
                color:'#fff'
            });
        }
    })
    .catch((error) => {
        
        Swal.fire({
            title: 'Error!',
            text: 'Unable to send your message. Please check your connection.',
            icon: 'error',
            confirmButtonColor: '#2e2d2de0',
            background: '#f8f9fa',
            color:'#fff'
        });
    });
});



////scroll///////////////////////

const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Loop through sections to get height, top, and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        // Find the corresponding nav link
        const navLink = document.querySelector('.nav-mennu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLink.classList.add("active-link");
            }
        } else {
            if (navLink) {
                navLink.classList.remove("active-link");
            }
        }
    });
}
