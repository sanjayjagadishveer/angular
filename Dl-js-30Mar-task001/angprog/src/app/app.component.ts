import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angprog';


  selectedCol:any;
  addCol(newCol:any)
  {
    this.selectedCol=newCol;
  }

}
