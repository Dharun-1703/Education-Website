const navLink=document.querySelectorAll('.nav-link');
const pages=document.querySelector('.dropdown-toggle');
const dm=document.querySelector('.dropdown-menu');
let e=0;
console.log(window.innerWidth);

if(window.innerWidth<=768){
        dm.hidden=false;

}
else{
    dm.hidden=true;

pages.addEventListener('mouseover',()=>{
        pages.classList.add('active')
        dm.hidden=false;
    

})
dm.addEventListener('mouseover',()=>{
            pages.classList.add('active')
    e=1;
    dm.hidden=false;
    
})
dm.addEventListener('mouseout',()=>{
            pages.classList.remove('active')
    e=0;
    dm.hidden=true;
    
})
pages.addEventListener('mouseout',()=>{
    setTimeout(()=>{
        if(e===0){
                    pages.classList.remove('active')
                dm.hidden=true;
        }
        else{
                dm.hidden=false;

        }
    },200)
})
}
navLink.forEach(element=>{
    element.addEventListener('click',()=>{
        if(!element.textContent.includes("pages")){
        navLink.forEach(element=>{
            element.classList.remove('active')
        })
        element.classList.add('active')
    }
    })
    
})
$(document).ready(function(){
    $('#owl').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        nav:false,
        autoplayTimeout:3000,
        dots: true,
        autoHeight: false,
        dotsClass:"custom-dots",
        dotsEach: false, // This will disable the automatic dots count based on items
        responsive:{
            0:{
                items:1,
                nav:false
            },
            700:{   
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                navContainerClass:"custom-nav",
            }
        },
        
    });
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoWidth:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        700:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            navContainerClass:"ggg",
        }
    }
  });
});


if(document.querySelector('.accordio')){
    const a=document.querySelectorAll(".ace");
    const ah=document.querySelectorAll(".ace > .head");
    const ab=document.querySelectorAll(".ace > .body");
    a.forEach(element=>{
        element.addEventListener('click',()=>{
            a.forEach(element=>{
                element.querySelector('.head').classList.remove('openh')
                element.querySelector('.body').classList.remove('openb')
            })
            element.querySelector('.head').classList.add('openh')
            element.querySelector('.body').classList.add('openb')
        })
        
    })
}

const h1=document.querySelectorAll('.cad>h1');

h1.forEach(element=>{
    const endValue=parseInt(element.getAttribute('data'));
    let startvalue=0;
    let count=()=>{
        if(endValue>1000){
            return 40;
        }
        else if(endValue>100){
            return 20;
        }
        else if(endValue>50){
            return 30;
        }
        else{
            return 90;
        }
    }
    const valueupdate=setInterval(()=>{
        if(endValue>1000){
            startvalue+=35;
        }
        else{
            startvalue+=1;
        } 
        if(endValue===90){
            element.textContent=startvalue+" %";
        }
        else{
            element.textContent=startvalue;
        }  
        if(startvalue==endValue){
            
            clearInterval(valueupdate);
            
        }
    },count())
    
})
window.addEventListener('scroll', () => {
    if(window.scrollY>405){
        document.querySelector('header').classList.add('fixed')
    }
    else{
        document.querySelector('header').classList.remove('fixed')
    }
});

if(document.querySelector('.mc')){
    const but=document.querySelectorAll('.but button');
    const mc=document.querySelectorAll('.mc');
    const m=document.querySelector('.meetingcontainer');
    but.forEach(element=>{
        element.addEventListener('click',()=>{
            
            but.forEach(element=>{
                element.classList.remove('active')
            })
            element.classList.add('active')
            mc.forEach(elemen=>{
                if(element.classList[0]==='all'){
                    elemen.style.display="block";
                    document.querySelector('.meetingcontainer').style.transition="all 3s linear";
                }
                else if(elemen.classList.contains(element.classList[0])){
                    elemen.style.display="block";
                    document.querySelector('.meetingcontainer').style.transition="all 3s linear";
                }
                else{
                    elemen.style.display="none";
                    document.querySelector('.meetingcontainer').style.transition="all 3s linear";
                }
                
            })
        })
    })
}
    