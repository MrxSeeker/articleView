import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  dokumenti = [
    { datum: new Date(Date.UTC(1999, 1, 1)), stranka: 'Twento', znesek: 20.0 },
    { datum: new Date(Date.UTC(2000, 3, 1)), stranka: 'Tento', znesek: 10.0 },
    { datum: new Date(Date.UTC(2002, 2, 1)), stranka: 'Fivto', znesek: 5.0 },
    { datum: new Date(Date.UTC(2005, 1, 1)), stranka: 'Ones', znesek: 1.0 },
    { datum: new Date(Date.UTC(2010, 11, 1)), stranka: 'Quarto', znesek: 0.25 },
    { datum: new Date(Date.UTC(2015, 12, 1)), stranka: 'Dimes', znesek: 0.1 },
    { datum: new Date(Date.UTC(2020, 11, 1)), stranka: 'Nickl', znesek: 0.05 },
    { datum: new Date(Date.UTC(2021, 1, 1)), stranka: 'Goki', znesek: 0.01 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
