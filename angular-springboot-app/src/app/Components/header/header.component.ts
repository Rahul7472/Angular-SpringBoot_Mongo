import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAlignLeft, faBell, faExpand, faChartSimple } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HttpClientModule, FormsModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userTabSelected:boolean =true;
  faAlignLeft =faAlignLeft;
  faBell=faBell;
  faExpand=faExpand;
  faChartSimple=faChartSimple;
  ngOnInit(): void {
    //jQuery('#nav-button').click(function() {
      //alert("hello");
    //});
    
  }

  constructor(protected router: Router) {
    
  }
  title = 'angular-springboot-app';

  onTabSelection(path: string): void {
    this.router.navigate(['/',path]);
    this.userTabSelected = !this.userTabSelected;
  }
}
