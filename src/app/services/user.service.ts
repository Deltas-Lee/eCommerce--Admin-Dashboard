import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'https://fakestoreapi.com/users';

  constructor(private readonly http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<IUser[]>(this.apiUrl);
  }
}
