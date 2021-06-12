import {Injectable} from '@angular/core';
import {Post} from "../model/post.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

// ctr + alt + (c / m / v)
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      userId: 123,
      id: 1,
      title: 'Lorem ipsum',
      body: 'Lorem ipsum exun non'
    },
    {
      userId: 124,
      id: 2,
      title: 'Lorem ipsum2',
      body: 'Lorem ipsum exun non2'
    },
    {
      userId: 125,
      id: 3,
      title: 'Lorem ipsum3',
      body: 'Lorem ipsum exun non3'
    }
  ];

  constructor(
    private http: HttpClient
  ) {
  }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(BASE_URL);
  }

  public readPost(id: string): Observable<Post> {
    return this.http.get<Post>(BASE_URL + id);
  }

}
