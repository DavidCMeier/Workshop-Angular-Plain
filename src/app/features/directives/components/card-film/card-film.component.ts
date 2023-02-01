import { Component, Input, OnInit } from '@angular/core';
import { Film } from "../../models/film";

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent implements OnInit {

  @Input() film!: Film;
  constructor() { }

  ngOnInit(): void {
  }

}
