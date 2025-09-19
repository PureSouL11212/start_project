import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponseModel } from '../components/model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client } from '../components/model/class/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<APIResponseModel>{
return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients");
  }

  addUpdate(obj: Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL + "GetAllDesignation",obj);
      } 

      deleteClientById (id:number):Observable<APIResponseModel>{
        return this.http.get<APIResponseModel>(environment.API_URL + "DeleteClientByClientId="+id);
          }
}
