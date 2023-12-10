localStorage.setItem('studentEmail', 'an@example.com');
localStorage.setItem('studentGrade', 'SegundoA');

let nombreUsuario = "Juan"; // Aquí asignar el nombre del usuario

document.getElementById("nombreUsuario").textContent = nombreUsuario;

function irPaginaProyectos() {
    window.location.href = '../pages/proyectos.html';
}

document.getElementById('irProyecto').addEventListener('click', irPaginaProyectos);

function irPaginaCalificaciones() {
    window.location.href = '../pages/calificaciones.html';
}

document.getElementById('irCalificacion').addEventListener('click', irPaginaCalificaciones);

