import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(public githubService: GithubService) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.githubService.update();
  }

  getRepositories() {
    return this.githubService.repositories;
  }
}