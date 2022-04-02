import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit {

  
 name="san";

 success="text-success";

 highlight="blue";

stylebind=
{
  color:"brown",
  fontstyle:"italic"
}


greeting="";

hero= {
  id: 1,
  name: 'Windstorm'
};

displayname=true;


color="red";

data=["red","blue","green","yellow"];


surname="veer";

public date=new Date();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any)
  {
   
    console.log(event);
    this.greeting="welcome";
  }

  log(value:any)
  {
    console.log(value)
  }

}
