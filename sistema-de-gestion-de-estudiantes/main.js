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

function calcularPromedio() {
let id = parseInt(prompt("Ingrese el ID del estudiante para calcular el promedio:"))
let estudiante = estudiantes.find(est => est.id === id)
    
if (estudiante) {
    let promedio = estudiante.notas.reduce((acc, nota) => acc + nota, 0) / estudiante.notas.length
    console.log(`El promedio de ${estudiante.nombre} es: ${promedio.toFixed(2)}`)
    } else {
    console.log("Estudiante no encontrado.")
    }
}

function estudiantesActivos() {
let activos = estudiantes.filter(est => est.activo).map(est => est.nombre)
    console.log("Estudiantes activos:", activos.length > 0 ? activos : "No hay estudiantes activos.")
}

function eliminarEstudiante() {
let id = parseInt(prompt("Ingrese el ID del estudiante que desea eliminar:"))
let indice = estudiantes.findIndex(est => est.id === id)
    
if (indice !== -1) {
    estudiantes.splice(indice, 1)
    console.log("Estudiante eliminado correctamente.")
    } else {
    console.log("Estudiante no encontrado.")
    }
}
