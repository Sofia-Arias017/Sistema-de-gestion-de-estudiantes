# **1. Sistema de gestión de estudiantes**

Crea un pequeño sistema de gestión de estudiantes utilizando objetos y JSON en JavaScript. El sistema debe cumplir con los siguientes requisitos:

1. Crea un array llamado `estudiantes` que contenga objetos. Cada objeto representa a un estudiante y debe tener las siguientes propiedades:
   - `id` (número)
   - `nombre` (string)
   - `edad` (número)
   - `notas` (array de números)
   - `activo` (boolean)
2. Agrega una función llamada `agregarEstudiante(estudiante)` que reciba un objeto con las propiedades anteriores y lo agregue al array `estudiantes`.
3. Crea una función `calcularPromedio(id)` que reciba el `id` de un estudiante y retorne su promedio de notas. Si el estudiante no existe, debe retornar un mensaje adecuado.
4. Crea una función `estudiantesActivos()` que devuelva un array con los nombres de los estudiantes que estén activos (`activo === true`).
5. Implementa una función `eliminarEstudiante(id)` que elimine del array al estudiante con el id especificado.
6. Implementa una función `exportarEstudiantesJSON()` que retorne la cadena JSON del array `estudiantes`.
7. Implementa una función `importarEstudiantesJSON(json)` que reciba una cadena JSON válida, la convierta en un array de objetos y lo asigne al array `estudiantes`.