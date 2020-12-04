import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

export interface CookieText {
    cookie: string 
}

@Injectable() 
export class CookieService {


    constructor(private http: HttpClient) { }

    //methods
    getCookies(n = '1') {

        const queryString = new HttpParams().set('count', n)
        return this.http.get('/api/cookie',{params: queryString}).toPromise()

    }

}