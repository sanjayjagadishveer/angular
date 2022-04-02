import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.css']
})
export class CollegueDetailComponent implements OnInit {


 
  @Input() colldetail:any;


  constructor() { }

  ngOnInit(): void {
  }

 

}
