import { Injectable } from '@angular/core';
import { AppSettings } from "../models/app-settings.model";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  public appSettings: AppSettings = {
    production: false,
    apiUrl: '',
  };

  constructor() { }

  loadSettings(config: AppSettings) {
    if (config) {
      this.appSettings = config;
    }
    return of(this.appSettings);
  }
}
