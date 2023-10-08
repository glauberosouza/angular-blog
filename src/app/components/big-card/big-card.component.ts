import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() //Consigo declarar o valor em quem está chamando essa propriedade
  // no caso o home.component.html
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardCescription: string = '';
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
