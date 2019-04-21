import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url:string = "https://jsonplaceholder.typicode.com/posts";

  getComments(id){
    return this.http.get(this.url+`/${id}/comments`);
  
}
}
