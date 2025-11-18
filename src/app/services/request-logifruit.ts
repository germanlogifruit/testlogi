import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataUser } from '../models/dataUser.interface';
import { Table } from '../models/dataTable.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RequestLogifruit {
  constructor (public http: HttpClient) {}

  public login(user: {username: string, password: string}): Observable<dataUser>{
    return this.http.post<dataUser>('http://localhost:3000/api/login/autenticacion', user, {withCredentials: true})
  }

  public aut(){
    return this.http.get<boolean>('http://localhost:3000/api/session/check', {withCredentials: true})
  }

  public table(startParam: string, endParam: string){
    return this.http.get<Table>(`http://localhost:3000/api/cliente/movimiento/entrada?idOperador=10003&startDate=${startParam}&endDate=${endParam}&idioma=es`, {withCredentials: true})
  }

  public tableParams(startParam: string, endParam: string, idOpe: string){
    return this.http.get<Table>(`http://localhost:3000/api/cliente/movimiento/entrada`,{
      withCredentials: true,
      params: {
        idOperador: idOpe,
        startDate: startParam,
        endDate: endParam,
        idioma: 'es'
      }
    })
  }

  public deslogin(): Observable<{ok: boolean}>{
      return this.http.post<{ok: boolean}>('http://localhost:3000/api/auth/logout', {}, {withCredentials: true})
  }
}
