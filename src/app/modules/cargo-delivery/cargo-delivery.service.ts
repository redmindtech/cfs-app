import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoDeliveryService {

  constructor(
    private http: HttpClient
  ) { }

  packType(): Observable<any> {

    let saasId = "LIVEFSL";
    let username = "";
    let search_key = "";
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/getpack_list?user_token=${user_token}&username=${username}&saas_id=${saasId}&search_key=${search_key}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

  getCargoDeliveryList(search:any): Observable<any> {

    let saasId = "LIVEFSL";
    let username = "";
    let search_key = search;
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/getcargo_delivery_list?user_token=${user_token}&username=${username}&saas_id=${saasId}&search_key=${search_key}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

}
