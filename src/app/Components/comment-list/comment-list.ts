import { Component, inject } from '@angular/core';

import { Observable, observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CommentServices } from '../../Services/commentServices';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  Comments_services = inject(CommentServices);

  Comments$: Observable<Comment[]>|undefined;

  ngOnInit(){
    this.Comments$=this.Comments_services.getAllComments();
  }
}
