import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private data:DataService) { }
  foodData:any
  ngOnInit(): void {
    this.foodData=this.data.foodDetails;
  }

}
