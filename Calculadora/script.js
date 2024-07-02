
/**/ 
const formulario = document.querySelector('form')
const div = document.querySelector('div')

const resultado = formulario.addEventListener('submit', (e) =>{
   e.preventDefault()
   
   let numero = parseInt(document.querySelector('#numero').value)
   let multiplicador = parseInt(document.querySelector('#multiplicador').value)

   const retirar = document.querySelector('#some')
   retirar.style.display = 'none';

   for (let i = 1; i <= multiplicador; i++){
      const novoParagrafo = document.createElement('p')
      novoParagrafo.textContent = `${numero} * ${i} = ${numero * i}`
      
      const todosParagrafos = document.querySelectorAll('p')
      const ultimoParagrado = todosParagrafos[todosParagrafos.length - 1]

      // Inserindo o último paragráfo
      ultimoParagrado.insertAdjacentElement('afterend', novoParagrafo)
   } 
})



