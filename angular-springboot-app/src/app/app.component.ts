import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from "./Components/header/header.component";
import { AuthService } from './Services/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['../../src/styles.scss'],
    imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, FontAwesomeModule, HeaderComponent]
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.authenticate();
  }
  authenticate(): void {
    this.authService.authenticate({
    userName: "john_admin",
    password: "password123"
    }).subscribe();
  }

  constructor(protected router: Router,
              protected authService: AuthService
  ) {
    
  }
  title = 'angular-springboot-app';
}
