import { Component, OnInit } from '@angular/core';
import { item } from '../Model';
import { ScrapperService } from '../Services/scrapper.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  itemSearch!:string;
  items!: item[];

  constructor(
    private scrapperService: ScrapperService,
  ) { }

  ngOnInit(): void {
  }



  addRow() {
    console.log(this.itemSearch)
  }

  loadProducts(): void {

    this.scrapperService
      .getAllItems(this.itemSearch)
      .subscribe((pdtProducts) => {
        this.items = pdtProducts;
        console.log(this.items)
      });
  }


}
