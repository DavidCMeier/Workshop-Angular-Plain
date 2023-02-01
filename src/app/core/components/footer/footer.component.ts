import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  private _company!: string;
  @Input() set company(val:string) {
    this._company = val;
    this.cd.detectChanges();
  }
  get company() {
    return this._company;
  }

  private _user!: { name: string} | undefined;
  @Input() set user(val: { name: string} | undefined) {
    this._user = val;
    this.cd.detectChanges();
  }
  get user(): { name: string} | undefined {
    return this._user;
  }

  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  ngOnInit(): void {
    this.cd.detectChanges();
  }

}
