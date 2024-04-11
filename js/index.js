let titletext=['Welcome to OrignsbyMama','OrignsbyMama']
let counter=0;
setInterval(function(){
  document.title=titletext[counter % titletext.length]
  counter++;
},2000)
let internet1= document.getElementById('internet1')
if (window.navigator.onLine === true){
   internet1.innerHTML='';
  internet1.classList.remove('inter')

}
else{
     internet1.innerHTML="Please connect to the internet your are offline";
}

let burger =document.querySelector('.burger')
let remove=document.querySelector('.remove')
let mynav=document.querySelector('.mynav')
let both=document.querySelector('.both2')
burger.addEventListener('click',hamburger)
remove.addEventListener('click',x)
function hamburger(){
  burger.style.display='none';
  remove.style.display='block';
  mynav.classList.toggle('mynav')
  const timeline=gsap.timeline()
  timeline.from('.both2',{duration:0.5,x:'-50vh',ease:'slide' })
  
}
function x(){
  burger.style.display='block';
  remove.style.display='none';
  mynav.classList.toggle('mynav')
 
}

let day = document.querySelector('.day')  
let night = document.querySelector('.night')
let day2 = document.querySelector('.day2')  
let night2 = document.querySelector('.night2')
let body =document.querySelector('.body')
let color1 =document.querySelector('.color1')
let color2 =document.querySelector('.color2')
let color3 =document.querySelector('.color3')
let color4 =document.querySelector('.color4')
let color5 =document.querySelector('.color5')
let pleasure =document.querySelector('.pleasure')
let dope =document.querySelector('.dope')
let Service =document.querySelector('.Service-box')
let Service1 =document.querySelector('.Service-box1')
let Service2 =document.querySelector('.Service-box2')
let Service3 =document.querySelector('.Service-box3')
let Service4 =document.querySelector('.Service-box4')
let Service5 =document.querySelector('.Service-box5')
let line =document.querySelector('.line')
let line1 =document.querySelector('.line1')
let line2 =document.querySelector('.line20')
let line3 =document.querySelector('.line3')
let line4 =document.querySelector('.line4')
let line5 =document.querySelector('.line5')
let design =document.querySelector('.design')
let linka =document.querySelector('.linka')
let linkb =document.querySelector('.linkb')
let linkc =document.querySelector('.linkc')
let linkd =document.querySelector('.linkd')
let linke =document.querySelector('.linke')

day.addEventListener('click',shine)
function shine(e){
  e.preventDefault();
  day.style.display='none';
  night.style.display='block';
  dope.style.background='white';
  dope.style.border='none';
  dope.classList.add('dope2')
  body.style.background='white';
  body.style.color='rgb(95, 95, 95)';
  color1.style.color ='black';
  color2.style.color ='black';
  color3.style.color ='black';
  color4.style.color ='black';
  color5.style.color ='black';
  pleasure.style.color='rgb(95, 95, 95)';
  Service.classList.add('gown')
  Service1.classList.add('gown')
  Service2.classList.add('gown')
  Service3.classList.add('gown')
  Service4.classList.add('gown')
  Service5.classList.add('gown')
  line.classList.add('line2')
  line1.classList.add('line2')
  line2.classList.add('line2')
  line3.classList.add('line2')
  line4.classList.add('line2')
  line5.classList.add('line2')
  both.style.background='white';
  linka.style.color='black';
  linkb.style.color='black';
  linkc.style.color='black';
  linkd.style.color='black';
  linke.style.color='black';
} 
night.addEventListener('click',dim)
function dim(e){
  e.preventDefault();
  night.style.display='none';
  day.style.display='block';
  dope.style.background='black';
  dope.style.border=' 1px solid rgb(24, 34, 24)';
  dope.classList.remove('dope2')
  body.style.background='black';
  body.style.color='white';
  color1.style.color ='white';
  color2.style.color ='white';
  color3.style.color ='white';
  color4.style.color ='white';
  color5.style.color ='white';
  pleasure.style.color='white';
  Service.classList.remove('gown')
  Service1.classList.remove('gown')
  Service2.classList.remove('gown')
  Service3.classList.remove('gown')
  Service4.classList.remove('gown')
  Service5.classList.remove('gown')
  both.style.background='black';
  line.classList.remove('line2')
  line2.classList.remove('line2')
  line3.classList.remove('line2')
  line4.classList.remove('line2')
  line5.classList.remove('line2')
  line1.classList.remove('line2')
  linka.style.color='white';
  linkb.style.color='white';
  linkc.style.color='white';
  linkd.style.color='white';
  linke.style.color='white';
} 
day2.addEventListener('click',shine2)
function shine2(e){
  e.preventDefault();
  day2.style.display='none';
  night2.style.display='block';
  dope.style.background='white';
  dope.style.border='none';
  dope.classList.add('dope2')
  body.style.background='white';
  body.style.color='rgb(95, 95, 95)';
  color1.style.color ='black';
  color2.style.color ='black';
  color3.style.color ='black';
  color4.style.color ='black';
  color5.style.color ='black';
  pleasure.style.color='rgb(95, 95, 95)';
  Service.classList.add('gown')
  Service1.classList.add('gown')
  Service2.classList.add('gown')
  Service3.classList.add('gown')
  Service4.classList.add('gown')
  Service5.classList.add('gown')
  line.classList.add('line2')
  both.style.background='white';
  linka.style.color='black';
  linkb.style.color='black';
  linkc.style.color='black';
  linkd.style.color='black';
  linke.style.color='black';
} 
night2.addEventListener('click',dim2)
function dim2(e){
  e.preventDefault();
  night2.style.display='none';
  day2.style.display='block';
  dope.style.background='black';
  dope.style.border=' 1px solid rgb(24, 34, 24)';
  dope.classList.remove('dope2')
  body.style.background='black';
  body.style.color='white';
  color1.style.color ='white';
  color2.style.color ='white';
  color3.style.color ='white';
  color4.style.color ='white';
  color5.style.color ='white';
  pleasure.style.color='white';
  Service.classList.remove('gown')
  Service1.classList.remove('gown')
  Service2.classList.remove('gown')
  Service3.classList.remove('gown')
  Service4.classList.remove('gown')
  Service5.classList.remove('gown')
  both.style.background='black';
  linka.style.color='white';
  linkb.style.color='white';
  linkc.style.color='white';
  linkd.style.color='white';
  linke.style.color='white';
} 


var typed = new Typed('.autotyped', {
  strings: ["OrignbyMama"],
  typeSpeed: 50,
  backSpeed: 0,
  fadeOut: true,
  loop: true
});
