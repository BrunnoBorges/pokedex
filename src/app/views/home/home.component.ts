import { Component, OnInit } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons/dragons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dragons: any;
  name: string;
  id: string;
  type: string;
  createdAt: string;

  constructor(private dragonsService: DragonsService) { 

  }

  ngOnInit(): void {
    this.dragonsService.getList().subscribe((data) => {
      this.dragons = data;
    }, (error) => {
      console.log('error', error)
    });
  }

}

