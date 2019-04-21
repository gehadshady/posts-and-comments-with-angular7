import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  url:string = "https://jsonplaceholder.typicode.com/posts";

    getPosts(){
      return this.http.get(this.url);
    }
   
}
