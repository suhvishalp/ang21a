import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public postList:Post  [] = [];

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
              .subscribe(
                (posts:Post[])=> {
                  console.log('Response recd successfully')
                  console.log(posts)
                  this.postList = posts;
                },
                (error)=>{}
              )
            }

}
