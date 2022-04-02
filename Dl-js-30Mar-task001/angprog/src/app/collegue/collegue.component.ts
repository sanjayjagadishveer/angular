import { Component, OnInit } from '@angular/core';
import { COLLEGUES } from 'src/mock-collegues';
import { Collegue } from '../collegue';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  collegue=COLLEGUES;
  @Output() newCol = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addCol(event:any)
  {
    this.newCol.emit(event);
  }
   
}
