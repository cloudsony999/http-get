import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient:HttpClient) { }

  //private url = 'https://jsonplaceholder.typicode.com/posts';
  private url = 'http://localhost:8888/users';

  getPosts(){
    return this.httpclient.get(this.url);
  }

}
