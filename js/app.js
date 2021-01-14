


var test ="yes";
function smoothScroll(target,duration){

  var target =document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance =targetPosition- startPosition;
  var starttime= null;
  
  
  function animation(currentTime){
    if(starttime===null) starttime = currentTime;
    var timeElapsed = currentTime -starttime;
    var run =easeInOutQuad(timeElapsed, startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed<duration) requestAnimationFrame(animation)
  }
  function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  }
  
  requestAnimationFrame(animation);
  
  }


  var about_me = document.querySelector('.about');

  about_me.addEventListener('click',function(){
   smoothScroll('.about1', 1500);
  });



  var me = document.querySelector('.services');

  me.addEventListener('click',function(){
   smoothScroll('.services1', 1500);
  });


  
  

  
