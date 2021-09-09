import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public companyName: string = 'LnT';
  public logoUrl: string = '/assets/ltgrouplogo.jpeg'

  constructor() { 
    setTimeout(() => {
      this.companyName = 'Larsen & Turbo'
    }, 7000);
  }

  ngOnInit(): void {
  }

}
