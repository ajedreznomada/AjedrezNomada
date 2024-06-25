document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name && email && message) {
        alert('Mensaje enviado correctamente.');
        // Aquí puedes agregar lógica para enviar los datos a tu servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
