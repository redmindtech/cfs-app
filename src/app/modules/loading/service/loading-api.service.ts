import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoadingApiService {

  devanningDataKey = 'devanningData';

  constructor(
    private http: HttpClient
  ) {}

  private setLocalStorage(obj: any) {
    window.localStorage.setItem(this.devanningDataKey, JSON.stringify(obj));
  }

  private getLocalStorage(): any {
    try {
      return JSON.parse(window.localStorage.getItem(this.devanningDataKey) as string);
    } catch (e) {
      return [];
    }
  }

  getContainerDetails(username: any): Observable<any> {
    let saasId = "LIVEFSL";
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/getcontainer_list?user_token=${user_token}&username=${username}&saas_id=${saasId}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

  saveSeal(details: any,selectedContainer: any): Observable<any> {
    let saasId = "LIVEFSL";
    let segment_code = selectedContainer.segment_code;
    let job_no = selectedContainer.job_no; 
    let container_no = selectedContainer.container_no;
    let house_no = "";
    let actual_seal = details.actualSeal;
    let unloading_date = details.unloadingDate;
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/save_seal?user_token=${user_token}&segment_code=${segment_code}&saas_id=${saasId}&job_no=${job_no}&container_no=${container_no}&house_no=${house_no}&actual_seal=${actual_seal}&unloading_date=${unloading_date}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            // return JSON.parse(JSON.stringify(res));
            return res;
        }  
    }) );
  }

  getHblDetails(selectedContainer: any): Observable<any> {
    let saasId = "LIVEFSL";
    let segment_code = selectedContainer.segment_code;
    let job_no = selectedContainer.job_no; 
    let container_no = selectedContainer.container_no;
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/gethbl_list?user_token=${user_token}&segment_code=${segment_code}&saas_id=${saasId}&job_no=${job_no}&container_no=${container_no}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            // return JSON.parse(JSON.stringify(res));
            return res;
        }  
    }) );
  }

  getSaveItem(details: any, selectedContainer:any ): Observable<any> {  
    let saasId = "LIVEFSL";
    let username = "";
    let segment_code = selectedContainer.segment_code;
    let job_no = details.jobNo;
    let container_no = details.containerNo;
    let house_no =details.hblNumber;
    let package_type = details.packageType;
    let received_qty = details.receivedPiece;
    let good_damage = details.damageCondition;
    let damage_type = details.damageType;
    let damage_note = details.damageNotes;
    let weight = details.weight;
    let volume = details.cbm;
    let subjob_no = details.subJobNo;
    let cfs_note = details.cfsNote;
    let landed_marks = details.landedMarks;

  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/save_item?user_token=${user_token}&username=${username}&segment_code=${segment_code}&saas_id=${saasId}&job_no=${job_no}&container_no=${container_no}&house_no=${house_no}&package_type=${package_type}&received_qty=${received_qty}&good_damage=${good_damage}&damage_type=${damage_type}&damage_note=${damage_note}&weight=${weight}&volume=${volume}&subjob_no=${subjob_no}&cfs_note=${cfs_note}&landed_marks=${landed_marks}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

  getUnloadDetails(hblDetails: any, selectedContainer: any): Observable<any> {
    let saasId = "LIVEFSL";
    let username = "";
    let segment_code = selectedContainer.segment_code;
    let job_no = hblDetails.selectedContainer.job_no; 
    let container_no = selectedContainer.container_number;
    let house_no = hblDetails.hblNumber;
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/getitem_list?user_token=${user_token}&username=${username}&segment_code=${segment_code}&saas_id=${saasId}&job_no=${job_no}&container_no=${container_no}&house_no=${house_no}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }
  deleteItem(sl_no: any, job_no: any, segment_code: any,house_no:any): Observable<any> {
    let slNo = sl_no;
    let segmentCode = segment_code;
    let jobNo = job_no; 
    let houseNo = house_no;
    let containerNo = "";
    let username = "";
    let saasId = "LIVEFSL";
  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/delete_item?user_token=${user_token}&username=${username}&sl_no=${slNo}&segment_code=${segmentCode}&saas_id=${saasId}&job_no=${jobNo}&container_no=${containerNo}&house_no=${houseNo}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }


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

  damageType(): Observable<any> {

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
    let url = `${environment.apiUrl}/getdamage_list?user_token=${user_token}&username=${username}&saas_id=${saasId}&search_key=${search_key}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

  addUnloadEntry(containerNumber: string, hblNumber: string, unloadObj: any): Observable<any> {
    let data = this.getLocalStorage() as any[];
    data.map( (cont: any) => {
      if ( cont.container == containerNumber ) {
        cont.hblList.map( (hbl: any) => {
          if( hbl.hblNumber == hblNumber ) {
            hbl.unloadEntries.push(unloadObj);
            hbl.unloaded = hbl.unloaded + unloadObj.receivedPiece;
            hbl.balance = hbl.manifestedPieces - hbl.unloaded;
          }
        });
      }
    });
    this.setLocalStorage(data);
    return of( {} ).pipe( delay(1000) );
  }

  uploadPhoto(base64data: string, source: string, selectedContainer: any, selectedHbl: any, subjobNo: string): Observable<any> {
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/insert_image?master_house=${source}`;
    const obj = {
      user_token: user_token,
      username:"",
      saas_id:"LIVEFSL",
      segment_code: selectedContainer.segment_code,
      container_no: selectedContainer.container_number,
      house_no: selectedHbl.hblNumber,
      job_no: selectedContainer.job_no,
      file_name: (new Date()).getTime(),
      file_content: base64data,
      subjob_no: subjobNo

    };
    const httpOptions : Object = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post<any>(url, obj , httpOptions);
  }

  
  
  complete(hblDetails: any, selectedContainer: any): Observable<any> {
    let saasId = "LIVEFSL";
    let segment_code = selectedContainer.segment_code;
    let job_no = hblDetails.selectedContainer.job_no; 
    let container_no = selectedContainer.container_number;
    let subjob_no = hblDetails.subjob_no;

  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/complete_devanning?user_token=${user_token}&segment_code=${segment_code}&saas_id=${saasId}&job_no=${job_no}&container_no=${container_no}&subjob_no=${subjob_no}`;
    return this.http.post<any>(url, params.toString(),httpOptions)
    .pipe( map(res => {
        try {
            return res;
 
        } catch (e) {
            return res;
        }  
    }) );
  }

  labelPrint(hblDetails: any, selectedContainer: any, selectedHbl:any): Observable<any> {
    let saasId = "LIVEFSL";
    let fsc = selectedContainer.fse_number;
    let hbl = selectedHbl.hblNumber; 
    let eta = hblDetails.eta;
    let pod = selectedContainer.pod_text ;
    let no_of_label = hblDetails.unload;
    let pcktype = hblDetails.numberOfPakages;

  const httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  };
  const params=new URLSearchParams();
    let user_token = window.localStorage.getItem("Token");
    let url = `${environment.apiUrl}/labelprint_devanning?user_token=${user_token}&saas_id=${saasId}&fsc=${fsc}&hbl=${hbl}&eta=${eta}&pod=${pod}&no_of_label=${no_of_label}&pcktype=${pcktype}`;
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

