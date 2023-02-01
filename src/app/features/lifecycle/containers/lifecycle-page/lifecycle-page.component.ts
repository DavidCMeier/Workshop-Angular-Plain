import { Component, OnInit } from '@angular/core';
import { Size } from "../../../../shared/models/size";

@Component({
  selector: 'app-lifecycle-page',
  templateUrl: './lifecycle-page.component.html',
  styleUrls: ['./lifecycle-page.component.scss']
})
export class LifecyclePageComponent implements OnInit {

  title = 'Ciclo de vida';
  size = Size.LARGE;

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = this.title.split("").reverse().join("");
  }
}
