import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Size } from "../../../../shared/models/size";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() title!: string;
  @Input() size!: Size;
  @ViewChild('titleElement') titleElement!: ElementRef;
  constructor() {
    console.log('Constructor', this.title, this.size, this.titleElement);
  }

  ngOnInit(): void {
    console.log('OnInit', this.title, this.size, this.titleElement);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.title, this.size, this.titleElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges',changes);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
