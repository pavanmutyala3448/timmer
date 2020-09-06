
let countDown=new Date(window .prompt('Enter the Date'));
let x=setInterval(function(){
 let today=new Date();
 
 let distance=countDown-today;
 let days = Math.floor(distance / (1000 * 60 * 60 * 24));
 let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 let seconds = Math.floor((distance % (1000 * 60)) / 1000);
 document.getElementById('demo').innerHTML=days+'  Days  '+hours+'  '+'  Hours  '+'  '+ minutes+'  '+'  Minutes  '+'  '+seconds+'  '+'  Seconds  ';
 if (distance<0){
  clearInterval(x);
  document.getElementById('demo').innerHTML='EXPIRED';
 }
},1000);