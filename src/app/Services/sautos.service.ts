import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAutos } from '../interfaces/iautos';
import { environment } from 'src/environments/environment';
import { IAuto } from '../interfaces/iauto';


@Injectable({
  providedIn: 'root'
})
export class SAutosService {

  constructor(private http:HttpClient) { }

  listarAutos():Observable<IAutos>{
    return this.http.get<IAutos>(`${environment.apiURL}/Auto`)
  }/*Aqui se realiza una solicitud get para obtener la lista de autos desde la api.
  Devuekve un objeto Observable de tipo 'IAutos'. */

  crearAuto(newAuto:IAuto):Observable<IAuto>{
    return this.http.post<IAuto>(`${environment.apiURL}/Auto`,newAuto)
  }/*Aqui se realiza una solicitud POST para crear un nuevo auto que toma un parametro newAuto */


  getAutoByID(id:number):Observable<IAutos>{
    return this.http.get<IAutos>(`${environment.apiURL}/Auto/?id=${id}`)
  }/*Aqui se realiza una solicitud get para obtener informacion sobre un  auto espesifico basado en su ID */


  actualizarAuto(auto:any):Observable<IAutos>{
    return this.http.put<IAutos>(`${environment.apiURL}/Auto/${auto.id}`,auto)
  }/*Aqui se realiza una solicitud PUT para actualizar la informacion de un auto existente.Toma un parametro 'auto'
  y devuelve un objeto observable de tipo 'IAutos' */

  eliminarAuto(auto:any):Observable<IAutos>{
    return this.http.delete<IAutos>(`${environment.apiURL}/Auto/${auto.id}`)
  }/*Aqui realiza una solicitud DELETE para eliminar un auto existente  */
  
}
