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

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['../../src/styles.scss'],
    imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, RouterModule, FontAwesomeModule, HeaderComponent]
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    //jQuery('#nav-button').click(function() {
      //alert("hello");
    //});
    
  }

  constructor(protected router: Router) {
    
  }
  title = 'angular-springboot-app';
}
