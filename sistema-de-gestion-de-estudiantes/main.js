let estudiantes = []

function agregarEstudiante() {
let id = parseInt(prompt("Ingrese el ID del estudiante:"))
let nombre = prompt("Ingrese el nombre del estudiante:")
let edad = parseInt(prompt("Ingrese la edad del estudiante:"))
let notas = prompt("Ingrese las notas separadas por comas:").split(",").map(Number)
let activo = confirm("¿El estudiante está activo? (Aceptar = Sí, Cancelar = No)")
    
let estudiante = { id, nombre, edad, notas, activo }
    estudiantes.push(estudiante)
    console.log("Estudiante agregado:", estudiante)
}


