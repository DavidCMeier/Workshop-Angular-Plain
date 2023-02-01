import { Inject, Optional } from "@angular/core";
import { Observable, take } from "rxjs";
import { AppSettings } from "../shared/models/app-settings.model";
import { AppSettingsService } from "../shared/services/app-settings.service";
import { APP_CONFIG } from "../shared/tokens/tokens";

export class RootModuleInitializer {
  public static initializeSettings(
    settingsService: AppSettingsService,
    @Optional() @Inject(APP_CONFIG) config: AppSettings
  ): () => Observable<AppSettings> {
    return () => settingsService.loadSettings(config).pipe(take(1))
  }
}
