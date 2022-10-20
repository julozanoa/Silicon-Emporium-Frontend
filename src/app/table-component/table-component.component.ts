import { Component, OnInit } from '@angular/core';
import { item } from '../Model';
import { ScrapperService } from '../Services/scrapper.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {

  items!: item[];
  constructor(
    private scrapperService: ScrapperService,
  ) { }

  ngOnInit(): void {
    this.loadPDTProducts();
  }

  loadPDTProducts(): void {
    this.scrapperService
      .getAllItems('AMD Ryzen 5600')
      .subscribe((pdtProducts) => {
        this.items = pdtProducts;
        console.log(this.items)
      });
  }



}
