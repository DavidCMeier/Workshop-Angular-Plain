import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppSettings} from "./app/shared/models/app-settings.model";
import {enableProdMode} from "@angular/core";
import {APP_CONFIG} from "./app/shared/tokens/tokens";
import {RootModule} from "./app/root/root.module";


const configListener = () => {
  try {
    const configuration: AppSettings = JSON.parse(request.responseText);

    if (configuration.production) {
      enableProdMode();
    }
    // pass config to bootstrap process using an injection token
    platformBrowserDynamic([
      { provide: APP_CONFIG, useValue: configuration },
    ])
      .bootstrapModule(RootModule)
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
};

const configFailed = (evt: any) => {
  console.error('Error: retrieving config.json');
};

const request = new XMLHttpRequest();
request.addEventListener('load', configListener);
request.addEventListener('error', configFailed);
request.open('GET', 'assets/settings.json');
request.send();
