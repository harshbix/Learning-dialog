const openBtn = document.querySelector('#open');
const dialog = document.querySelector('#my-dialog');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', ()=>{dialog.showModal()});
closeBtn.addEventListener('click', ()=> {dialog.close()});