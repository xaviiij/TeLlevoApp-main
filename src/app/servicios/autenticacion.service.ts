/*Utilizaremos la autenticacion para proporcionar metodos para la autenticacion a los usuarios 
y su gestion de sesiones */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  public autenticado!: boolean;

  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;

  }
  async register(username: string, password: string): Promise<Boolean> {
    const users = await this.local?.get('users') || [];
    const existe = users.find((us: User) => us.username === username && us.password === password);
    if (existe) {
      console.log("Usuario Existente")
      return true;
    } else {
      const nuevo: User = { username, password };
      users.push(nuevo);
      await this.local.set('users', users);
      console.log("Registro Exitoso")
      return false;
    }
  }/*Aqui permite registrar nuevos usuarios.Comprueba si un usuario con el mismo nombre ya existe 
  en el almacenamiento local y, si no existe,lo agrega  */

  async login(username: string, password: string): Promise<boolean> {
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us: User) => us.username === username && us.password === password);
    if (user) {
      this.autenticado = true;
      return true;
    }
    this.autenticado = false;
    return false;
  }
  /*Aqui verifica las credenciales proporcionadas por el usuario comparandolas con las almacenadas localmente.
  Si las credenciales son correctas,donde establece la propiedad 'autenticado' en 'true' */

  logout() {
    this.autenticado = false;
    this.route.navigate(['/home']);
  }/*Y aqui el metodo cierra la sesion del usuario estableciendo 'autenticado' en 'false' 
  y redirige a la pagina de inicio '/home'*/
}
