import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
interface IUser {
    nombreCompleto: object;
    keys: object;
    direccion: string;
    correo: string;
    alias: string;
}
@Injectable({
  providedIn: 'root'
})
export class Tuberia1Service {
    private usersSubject = new Subject();

  constructor() { }

  public getUsers(): Observable<any> {
        return this.usersSubject.asObservable();
  }
  public enviUsers(recibido: any) {
      this.usersSubject.next(recibido);
  }
}

