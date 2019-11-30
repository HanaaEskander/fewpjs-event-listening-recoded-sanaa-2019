document.querySelector('main#main').remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "JALAL is the champion";
document.body.appendChild(newHeader);

addingEventListener('click');
