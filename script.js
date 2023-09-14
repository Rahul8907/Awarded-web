const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
var timer
function mousesquze(){
  var xscale=1;
  var yscale=1;
  var xprev=0;
  var yprev=0;
  window.addEventListener("mousemove",function(dets){
    clearTimeout(timer)
  xscale=gsap.utils.clamp(0.6,1.5,dets.clientX-xprev)
    yscale=gsap.utils.clamp(0.6,1.5,dets.clientY-yprev)
    xprev=dets.clientX
    yprev=dets.clientY
    circleMouse(xscale,yscale)
    timer=setTimeout(function() {
        document.querySelector("#mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`
    });
  });
}
mousesquze();
function circleMouse(xscale,yscale){
  window.addEventListener("mousemove",function (dets) {
    document.querySelector("#mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
  });
}
circleMouse();
gsap.from("#nav",{
  y:-10,
  opacity:0,
  duration:1.5,
  ease:Expo.easeInOut
})
gsap.from("#heading h1,#heading h5",{
  y:70,
  ease:Expo.easeInOut,
  opacity:0,
  duration:2,
  stagger:0.2
})
gsap.from("#side-heading h5 ",{
  y:-70,
  opacity:0,
  ease:Expo.easeInOut,
    duration:3,
  stagger:0.1
})
gsap.from(" #homefooter ",{
      y:-10,
      duration:3,
      ease:Expo.easeInOut,
    opacity:0,
})
document.querySelectorAll(".elem").forEach( function(elem){
  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  elem.addEventListener("mousemove",function(dets){
    var diff=dets.clientY-elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease:Power3,
      top:diff,
      left:dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
