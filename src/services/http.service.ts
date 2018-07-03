import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { environment } from '@app/env';
import { GlobalData } from './global-data';

@Injectable()
export class WebApiConfigService {
    baseUrl = environment.baseApiUrl;
}

@Injectable()
export class HttpRequestHelpService {

    constructor(
        private http: HttpClient,
        private globalData: GlobalData
    ) {
    }

    headerWithToken(): HttpHeaders {
        const access_token = this.globalData.token;
        if (access_token) {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            })
            return headers;
        }
    }

    get(url, params: HttpParams = null): Observable<any> {
        return this.http.get(url, {
            params: params,
            headers: this.headerWithToken()
        });
    }

    getPlainText(url, params: HttpParams = null): Observable<any> {
        return this.http.get(url, {
            params: params,
            responseType: 'text',
            headers: this.headerWithToken()
        });
    }

    post(url, parametersModel): Observable<any> {
        return this.http.post(url, parametersModel, {
            headers: this.headerWithToken()
        });
    }

    put(url, parametersModel): Observable<any> {
        return this.http.put(url, parametersModel, {
            headers: this.headerWithToken()
        });
    }

    delete(url, parameterId): Observable<any> {
        return this.http.delete(url + parameterId, {
            headers: this.headerWithToken()
        });
    }

}
