import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService) { }
   foodData:any;
  ngOnInit(): void {
    this.foodData=this.data.foodDetails;
  }

}
