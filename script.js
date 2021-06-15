var tl = gsap.timeline({ defaults:{opacity:0, ease:"back"}});
function init() {
    tl.from(".page-wrapper", {autoAlpha:0})  //this nullifies visibility:hidden; from CSS 
    .from("h1", {x:80, duration:1})
    .from(".content p", {y:80, duration:1}, "<")
    .from(".js-anim", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=0.5")
    .from(".prev, .next", {scale:0, transformOrigin:"50% 50%", stagger:0.2, duration:0.8}, "-=0.5")
}

window.addEventListener("load", function(event) { 
  init();
});