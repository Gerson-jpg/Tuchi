const open = document.getElementById('open');
const ventana = document.getElementById('ventana');
const close = document.getElementById('close');
const todo = document.getElementById('todo');


open.onclick = function() {
    ventana.style.display = 'block';
}

close.onclick = function() {
    ventana.style.display = 'none';
}

// todo.onclick = function(event) {
//     if (event.target == todo) {
//         ventana.style.display = 'none';
//     }
// }