import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public companyName: string = 'LnT';
  public logoUrl: string = '/assets/ltgrouplogo.jpeg'

  constructor(private changeDetector: ChangeDetectorRef) { 
    console.log(changeDetector)
    setTimeout(() => {
      this.companyName = 'Larsen & Turbo'
    }, 10000);
  }

  ngOnInit(): void {
  }

}
