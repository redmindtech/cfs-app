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

  getDeliveryItem(search:any): Observable<any> {
    let saasId = "LIVEFSL";
    let segment_code = "";
    let user_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzMzNTMxNTcsImV4cCI6MTcwNDg4OTE1NywiaWF0IjoxNjczMzUzMTU3fQ.AJ5SuHBJHTRTVefhab5u6RDVzkIb26N_hbTNbTTcZp4";
    let booking_no=search;

  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    //let user_token = window.localStorage.getItem("Token");
    
    let url = `${environment.apiUrl}/save_cargo_header?user_token=${user_token}&segment_code=${segment_code}&saas_id=${saasId}&booking_no=${booking_no}&draft_cfs_no=&item_desc=TEST&pack_code=BAG&customer_code=C904086&customer_name=BOSCO&driver_name=1&truck_no=1&received_qty=&volume=&weight=&cfs_note=1&marks_no=1&supplier_code=C0058059&supplier_name=RAJEN%20ODEDRA&supplier_ref=&receive_delivery=DELIVERY`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

  SaveDeliveryItem(bookingNo:any,draftNo:any,qty:any): Observable<any> {
    let saasId = "LIVEFSL";
    let draft_no = draftNo;
    let received_qty=qty;
    let user_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkNGU1RBQjEiLCJuYmYiOjE2NzMzNTMxNTcsImV4cCI6MTcwNDg4OTE1NywiaWF0IjoxNjczMzUzMTU3fQ.AJ5SuHBJHTRTVefhab5u6RDVzkIb26N_hbTNbTTcZp4";
    let booking_no=bookingNo;

  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    //let user_token = window.localStorage.getItem("Token");
    
    let url = `${environment.apiUrl}/save_cargo_detail?user_token=${user_token}&subjob_uid=&saas_id=${saasId}&booking_no=${booking_no}&draft_cfs_no=${draft_no}&height=1&breadth=1&length=1&received_qty=${received_qty}&volume=0.000&weight=1& receive_delivery=DELIVERY`;
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
