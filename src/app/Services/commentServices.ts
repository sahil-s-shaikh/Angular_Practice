import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})

export class CommentServices {
  httpComment = inject(HttpClient);

  Comment_api='https://jsonplaceholder.typicode.com/Comments';

  getAllComments() : Observable<Comment[]>{
    return this.httpComment.get<Comment[]>(this.Comment_api);
  }
}
