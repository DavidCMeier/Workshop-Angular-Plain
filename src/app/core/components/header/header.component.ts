import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderRoutes } from "../../models/header-routes";
import { Language } from "../../models/lang";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title!:string | null;
  @Input() routes!:HeaderRoutes[];
  @Input() languages!:Language[];
  @Input() currentLang!: string;
  @Output() changeLang = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  changeLanguageValue(lang: string) {
    this.changeLang.emit(lang);
  }

}
