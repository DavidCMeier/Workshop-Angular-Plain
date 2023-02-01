import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Film } from "../../models/film";

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailFilmComponent implements OnInit {

  film!: Film | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      if('film' in data) {
        this.film = data['film'];
      }
    });
  }

}
