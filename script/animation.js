

// $('.main-title').on('mouseover',function(e){
//     var rect = e.target.getBoundingClientRect();
//     var x = e.clientX - rect.left; 
//     var y = e.clientY - rect.top; 

//     console.log("Left" + x + "Top" + y);
// })


// $('.main-title p').on('mouseover',function(e){
//     var rect = e.target.getBoundingClientRect();
//     var x = e.clientX - rect.left; 
//     var y = e.clientY - rect.top;
//     console.log(x, " " ,y ); 
//     if(x && y){
//         $('.main-title p').addClass('active') 
//     }else{
//         setTimeout(() => {
//             $('.main-title p').removeClass('active') 
//         }, 200);
//     }
// })

// $('.main-title p').mouseenter(function(){
//         $('.main-title p').addClass('active') 

// }).mouseleave(function(){
//     setTimeout(() => {
//         $('.main-title p').removeClass('active') 
//     }, 900);
// })

// const tilt = $('.game-container, .inner-components').tilt();

// tilt.tilt.destroy.call(tilt)


// function destroyTilt(){
//     let customWidth = 840;
//     const tilt = $('.game-container, .inner-components').tilt();
//     if($(window).width() < customWidth){
//         tilt.tilt.destroy.call(tilt)
//         console.log("%cTILT JS is Destroyed", "color:red; font-size: 13px; font-weight:700");
//     }   
//     else{
//         console.log("%cTILT JS is Active", "color:green; font-size: 13px; font-weight:700 ");
//     }
// }

// destroyTilt();

// $(window).resize(function(){
//     let customWidth = 840;
//     const tilt = $('.game-container, .inner-components').tilt();
//     if($(window).width() < customWidth){
//         tilt.tilt.destroy.call(tilt)
//         console.log("%cTILT JS is Destroyed", "color:red; font-size: 13px; font-weight:700");
//     }   
//     else{
//         console.log("%cTILT JS is active", "color:green; font-size: 13px; font-weight:700 ");
//     }
// })


var ball   = document.querySelector('.mini-games-content-wrapper');

var maxX = $(window).clientWidth  - ball.clientWidth;
var maxY = $(window).clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180)
  var y = event.gamma; // In degree in the range [-90,90)


  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxY*y/180 - 10) + "px";
  ball.style.left = (maxX*x/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);


