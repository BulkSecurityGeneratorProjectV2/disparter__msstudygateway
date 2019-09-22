import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDemo } from 'app/shared/model/msstudy/demo.model';

@Component({
  selector: 'jhi-demo-detail',
  templateUrl: './demo-detail.component.html'
})
export class DemoDetailComponent implements OnInit {
  demo: IDemo;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ demo }) => {
      this.demo = demo;
    });
  }

  previousState() {
    window.history.back();
  }
}
