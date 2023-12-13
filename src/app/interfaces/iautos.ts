/*Se realiza esta interfaz para definir la estructura de un objeto ya creado y que se mostrara su informacion */
export interface IAutos{
    id:number,
    nombre: string,
    rut: string,
    patente: string,
    capacidad: number,
    metodo_de_pago: string,
    comuna: string,
    precio: number
}