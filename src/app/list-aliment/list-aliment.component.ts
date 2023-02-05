import { AlimentService } from './../aliment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.scss']
})
export class ListAlimentComponent implements OnInit{

  public aliments? : string[]

  constructor(private AlimentService:AlimentService){}


  ngOnInit(): void {
    this.aliments = this.AlimentService.aliments
  }

  removeAliment(index:number):void{
    this.AlimentService.removeOne(index)
  }
}
