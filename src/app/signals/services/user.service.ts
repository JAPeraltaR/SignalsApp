import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Data, Users } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject( HttpClient );

  private userURL = 'https://reqres.in/api/users';

  constructor() { }

  getUsers( id: number ): Observable<Data> {
    return this.http.get<Users>(`${ this.userURL }/${ id }`)
      .pipe(
        map( response => response.data )
      );
  }
}
