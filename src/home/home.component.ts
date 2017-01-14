import { Component, OnInit } from '@angular/core';

import { Home } from './shared/home.model';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [HomeService]
})

export class HomeComponent implements OnInit {
  home: Home[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getList().subscribe((res) => {
      this.home = res;
    });
  }
}
