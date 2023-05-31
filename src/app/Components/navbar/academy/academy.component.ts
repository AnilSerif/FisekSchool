import { Component, OnInit } from '@angular/core';
import { Awards } from 'src/app/interface/awards';
import { Local } from 'src/app/interface/local';
import { AwardsService } from 'src/app/services/awards.service';
import { LocalService } from 'src/app/services/local.service';



@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
  providers:[AwardsService,LocalService]
})
export class AcademyComponent implements OnInit {

  constructor(private AwardService:AwardsService,private LocalService:LocalService) { }
  selectedOption: string;
  awards:Awards[];
  locals:Local[];

  ngOnInit() {
    this.AwardService.getAwards().subscribe(data=>{
      this.awards = data;
    });

    this.LocalService.getLocal().subscribe(data=>{
      this.locals = data;
    })
  }

}
