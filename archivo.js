const { rejects } = require("assert");
const { request } = require("express");

function most() {
  var r =document.getElementById("dato");      
          
  var t = document.getElementById("tablamu").value;
  for (var a =1 ; a <=10 ; a++){
  var c = t*a;
  r.innerHTML += `<br> ${t} x ${a} = ${c}  <br>`;
    
      }      
    

    }

const fs = require ('fs');

 
let promesaEscrituraarchivo = new Promise((resolve, reject)=>{
  fs.writeFile('archivo_mult.txt', 'tabla de multiplicar '+c, (error)=>{
    if(error){
      reject(error);
    }else{
      resolve();
    }
  });
});

promesaEscrituraarchivo
.then(()=>{
console.log('el proceso a sido correcto');
})
.catch((errror)=>{
  console.log('la escritura a sido erronea');
});