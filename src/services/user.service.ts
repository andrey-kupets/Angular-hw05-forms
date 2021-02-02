import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {baseUrl} from './base-url/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(baseUrl + '/users');
  }

  getUserById(id): Observable<User>{
    return this.httpClient.get<User>(baseUrl + '/users' +  '/' + id);
  }
}
