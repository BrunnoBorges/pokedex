import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor( private http: HttpClient) { }


  getList() {
    return this.http.get(`${environment.listDragons}/api/v1/dragon`);
  }
}
