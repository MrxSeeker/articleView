import { Component, OnInit } from '@angular/core';
import articles from './json_files/example_1.json';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  public articleList: {
    ident: number;
    naziv: string;
    tip: string;
    klasifikacija: string;
  }[] = articles || undefined;
  constructor() {}

  ngOnInit(): void {}
}
