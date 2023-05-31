import { Component, OnInit } from '@angular/core';
import { Campus } from 'src/app/interface/campus';
import { CampusService } from 'src/app/services/campus.service';

@Component({
  selector: 'app-kampus',
  templateUrl: './kampus.component.html',
  styleUrls: ['./kampus.component.css']
})
export class KampusComponent implements OnInit {

  constructor(private CampusService:CampusService) { }
  campus:Campus[];

  ngOnInit() {

    this.CampusService.getCampus().subscribe(data=>{
      this.campus = data;
    });

   

  }

}
