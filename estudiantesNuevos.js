class Estudiante {
    constructor (nombre){
    this.nombre = nombre
    this.asignaturas = ['JavaScript', 'HTML', 'CSS']
}
    obtenDatos() {
        return `Nombre: ${this.nombre}. Asignaturas: ${this.asignaturas}.`
    }
}

const nuevo_estudiante = new Estudiante('Javier')

console.log(nuevo_estudiante.obtenDatos())