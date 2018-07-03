import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false
    })
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class TranslateSharedModule {
  constructor(private translate: TranslateService, private storage: Storage) {
    translate.addLangs(['en', 'ch']);
    this.storage.get('currentLanguage')
      .then((currentLanguage) => {
        if (currentLanguage) {
          translate.use(currentLanguage);
          this.translate.setDefaultLang(currentLanguage);
        } else {
          this.storage.set("currentLanguage", "ch");
          translate.use('ch');
          translate.setDefaultLang('ch');
        }
      });
  }
}
