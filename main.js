const btn = document.getElementById('submit');

function whatsapp()
{
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    var win = window.open(`https://api.whatsapp.com/send?phone=51973988036&text=Hola%20me%20llamo%20${nombre}%20,mi%20correo%20es%20${correo}%20,mi%20teléfono%20es%20${telefono}%20y%20${mensaje}`,'_blank')
}

