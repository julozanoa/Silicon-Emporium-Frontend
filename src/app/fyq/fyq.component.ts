import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-fyq',
  templateUrl: './fyq.component.html',
  styleUrls: ['./fyq.component.scss']
})
export class FYQComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
