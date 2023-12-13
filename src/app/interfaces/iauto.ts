/*Se realiza la interfaz para definir la estructura de un objeto cuando se crea */
export interface IAuto {
    nombre: string,
    rut: string,
    patente: string,
    capacidad: number,
    metodo_de_pago: string,
    comuna: string,
    precio: number
}