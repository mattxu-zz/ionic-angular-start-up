import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule.forChild({}),
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedLazyModule {}
