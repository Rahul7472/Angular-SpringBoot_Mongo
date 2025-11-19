import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

const  APIUrlUser ="http://localhost:8080/user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService{
  constructor(http:HttpClient,
              authService: AuthService) {
    super(APIUrlUser,http, authService);
  }
  
}