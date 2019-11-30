function addingEventListener(event) {
  let input = document.querySelector('input#input');
  input.addEventListener(event,function(event) {
  alert('I was clicked!');
});
}


addingEventListener('click');
