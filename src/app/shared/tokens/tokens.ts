import { AppSettings } from "../models/app-settings.model";
import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken<AppSettings>('APP_CONFIG');
