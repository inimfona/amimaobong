let internet1= document.getElementById('internet1')
if (window.navigator.onLine === true){
  internet1.innerHTML='';
}
else{
  internet1.innerHTML="Please connect to the internet your are offline";
}

let burger =document.querySelector('.burger')
let remove=document.querySelector('.remove')
let mynav=document.querySelector('.mynav')
burger.addEventListener('click',hamburger)
remove.addEventListener('click',x)
function hamburger(){
  burger.style.display='none';
  remove.style.display='block';
  mynav.classList.toggle('mynav')
}
function x(){
  burger.style.display='block';
  remove.style.display='none';
  mynav.classList.toggle('mynav')
}

let day = document.querySelector('.day')  
let night = document.querySelector('.night')
let body =document.querySelector('.body')
let color1 =document.querySelector('.color1')
let color2 =document.querySelector('.color2')
let color3 =document.querySelector('.color3')
let color4 =document.querySelector('.color4')
let color5 =document.querySelector('.color5')
let pleasure =document.querySelector('.pleasure')
let dope =document.querySelector('.dope')
day.addEventListener('click',shine)
function shine(e){
  e.preventDefault();
  day.style.display='none';
  night.style.display='block';
  dope.style.background='white';
  dope.style.border='none';
  body.style.background='white';
  body.style.color='black';
  color1.style.color ='black';
  color2.style.color ='black';
  color3.style.color ='black';
  color4.style.color ='black';
  color5.style.color ='black';
  pleasure.style.color='rgb(95, 95, 95)';
} 
night.addEventListener('click',dim)
function dim(e){
  e.preventDefault();
  night.style.display='none';
  day.style.display='block';
  dope.style.background='black';
  dope.style.border=' 1px solid rgb(24, 34, 24)';
  body.style.background='black';
  body.style.color='white';
  color1.style.color ='white';
  color2.style.color ='white';
  color3.style.color ='white';
  color4.style.color ='white';
  color5.style.color ='white';
  pleasure.style.color='white';
  onions.style.background='white';
  active.style.background='white';

} 
var typed = new Typed('.autotyped', {
  strings: ["OrignbyMama"],
  typeSpeed: 50,
  backSpeed: 0,
  fadeOut: true,
  loop: true
});
