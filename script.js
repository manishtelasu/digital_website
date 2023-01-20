

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay:{
    delay:2000
},
        // centeredSlides: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


var tl = gsap.timeline();


tl.from("#text h1", {

    opacity: 0,
    duration: 1,
    delay:0.8,
    ease:Expo.inOut,
},"-=0.8")

tl.from("#img1", {
        opacity: 0,
        y:100,
        duration: 1,
        
    ease:Expo.inOut,
},"-=0.8")


tl.from("#img2", {
    opacity: 0,
    y:-100,  
    duration: 1,
    
    ease:Expo.inOut,
},"-=0.8")

tl.from("#img3", {

    opacity: 0,
    x:50,
    duration:1,
    ease:Expo.inOut,

},"-=0.8");



tl.to(['#h-1','h1','h2'],{
    scrollTrigger:{
        trigger:"#page2",
        start :"40%",
        // markers:"true",  
        scrub:3
    },
opacity:7,
ease:Expo.inOut,


});

tl.to("#page3",{
    scrollTrigger:{
        trigger:"#page2",
        start :"100%",
        // markers:"true",
        scrub:3
        
    },
ease:Expo.inOut,
opacity:7,
duration:2
});

tl.to("#page4",{
    scrollTrigger:{
        trigger:"#page3",
        start :"70%",
        // markers:"true",
        scrub:3
        
    },
ease:Expo.inOut,
opacity:7,
duration:2
});
tl.to("#page5",{
    scrollTrigger:{
        trigger:"#page4",
        start :"30%",
        // markers:"true",
        scrub:3
        
    },
ease:Expo.inOut,
opacity:7,
duration:2
});
tl.to("#page6",{
    scrollTrigger:{
        trigger:"#page5",
        start :"30%",
        // markers:"true",
        scrub:3
        
    },
ease:Expo.inOut,
opacity:7,
duration:2
});




// gsap.to('#one',{
//     scrollTrigger:{
//         trigger:"#main",
//         start:"top top",
//         scrub:3,
//     opacity:0
        
//     },
    

// left:"-600%",

// }),
// gsap.to('#holdr1',{
//     scrollTrigger:{
//         trigger:"#main",
//         start:"top top",
//         scrub:3,
//     opacity:0
        
//     },
    

// left:"-300%",


// })
// gsap.to('#sx',{
//     scrollTrigger:{
//         trigger:"#main",
//         start:"top top",
//         scrub:3,
//     opacity:0
        
//     },
    

// right:"-600%",


// })




// gsap.to('#holdr2',{
//     scrollTrigger:{
//         trigger:"#main",
//         start:"top top",
//         scrub:3,
//     opacity:0
        
//     },
    

// right:"-300%",


// })

// gsap.to('h2',{
//     scrollTrigger:{
//         trigger:"#main",
//         start:"top top",
//         scrub:4,
    
        
//     },
    

// top:"-600%",


// })



// gsap.to('h1',{
//     scrollTrigger:{
//         trigger:".cover",
//         start:"top 30%",
//         scrub:3,
//     backgroundColor: ""
        
//     },
    

// top:"-100%",


// })


