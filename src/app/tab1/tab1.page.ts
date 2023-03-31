import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  allEpisodes: any;

  constructor(private rickAndMortyService: RickAndMortyService ) {}

  ngOnInit() {
      this.rickAndMortyService.getAllEpisodes().then((res: any) => {
        this.allEpisodes = res;
        console.log(this.allEpisodes);
      });
  }

}
