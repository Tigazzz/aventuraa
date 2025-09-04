const avanca=document.querySelectorA11('Btn-proximo');
const reiniciarBtn=document.getElementById('Btn-reiniciar');

avanca.forEach(button => {
  button.addEventListener('click',function(){
   const atual = document.querySelector('.ativo');
   const proximoPasso='passo'+this.getAttribute('data-proximo');
  })  
}
);