import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel } from '../components/model/interface/role';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }


  getDesignations():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignations");
  }
  // getDesignations():Observable<APIResponseModel>{
  // return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignations");
  // }


  // getDesignations(): Observable<APIResponseModel> {
  //   return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignations");
  // }
  // https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles
}
   