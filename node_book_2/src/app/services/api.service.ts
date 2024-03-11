import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient : HttpClient
  private serverPrefix : string = 'http://localhost:8080'

  constructor(httpClient : HttpClient) 
  {
    this.httpClient = httpClient;
  }

  public getBooks ()
  {
    this.httpClient.get(this.serverPrefix + '/book/all')
  }
}
