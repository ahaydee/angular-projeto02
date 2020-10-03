import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  id: number;
  name: string;
  owner: {
    login: string;
    html_url: string;
  },
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface Repositories {
  name: string;
  repositories: Response[];
}

@Injectable()
export class GithubService {
  repositories: Array<Repositories> = [];
  lastUpdate: Date;

  constructor(private http: HttpClient) {}

  update() {
    this.repositories = [];
    this.http.get<Array<Response>>("https://api.github.com/users/ahaydee/repos")
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.repositories.push({
        name: "Anna Haydée",
        repositories: data
      });
    });
    
    this.http.get<Array<Response>>("https://api.github.com/users/Danubia-Cunha/repos")
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.repositories.push({
        name: "Danubia Cunha",
        repositories: data
      });
    });
  }

}