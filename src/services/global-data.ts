import { Injectable } from '@angular/core';
/*
  Generated class for the GlobalDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalData {
  private _token: string;
  private _userId:string;
  private _userEmail:string;
  private _userRole:string;

  private _currentPage:string;

  private _haveEnterHomePage:boolean;  //push page when app is close

  //用户权限
  private _userAuth: any;

  //app更新进度.默认为0,在app升级过程中会改变
  private _updateProgress: number = -1;


  get currentPage():string{
    return this._currentPage;
  }
  set currentPage(value:string){
    this._currentPage=value;
  }

  get haveEnterHomePage():boolean{
    return this._haveEnterHomePage;
  }

  set haveEnterHomePage(value:boolean){
    this._haveEnterHomePage=value;
  }

  get userId():string{
    return this._userId;
  }
  set userId(value:string){
    this._userId=value;
  }

  get userEmail():string{
    return this._userEmail;
  }
  set userEmail(value:string){
    this._userEmail=value;
  }

  get userRole():string{
    return this._userRole;
  }
  set userRole(value:string){
    this._userRole=value;
  }

  get userAuth():any {
    return this._userAuth;
  }

  set userAuth(value:any) {
    this._userAuth = value;
  }


  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get updateProgress(): number {
    return this._updateProgress;
  }

  set updateProgress(value: number) {
    this._updateProgress = value;
  }
}
