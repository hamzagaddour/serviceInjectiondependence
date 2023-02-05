import { AlimentService } from './../aliment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-aliment',
  templateUrl: './add-aliment.component.html',
  styleUrls: ['./add-aliment.component.scss']
})
export class AddAlimentComponent implements OnInit {

  public aliment : string = "Aliment"


  constructor(private alimentService : AlimentService){}
  ngOnInit(): void {}

  public addAliment(){
    //this.alimentService.aliments.push(this.aliment);
    this.alimentService.addOne(this.aliment)
    this.aliment = '';
    //console.log(this.alimentService.aliments);

  }
}
