import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

const  APIUrlRole ="http://localhost:8080/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService extends DataService{
  constructor(http:HttpClient,
              authService: AuthService){
    super(APIUrlRole,http, authService);
  }
}