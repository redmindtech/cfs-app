import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from "../../../environments/environment"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http: HttpClient,) { }

  login(username: any, password: any, ) {
  //  api.efreightsuite.com/CFS_WebApi/api/cfs_app/login?username=WEBUSER&password=FREIGHT2017&saas_id=LIVEFSL
  let saasId = "LIVEFSL";
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
   let url = `${environment.apiUrl}/login?username=${username}&password=${password}&saas_id=${saasId}`;
   return this.http.post<any>(url, params.toString(),httpOptions)
   .pipe( map(res => {
       try {
           return JSON.parse(JSON.stringify(res));

       } catch (e) {
           return JSON.parse(JSON.stringify(res));
       }  
   }) );
  }
}
