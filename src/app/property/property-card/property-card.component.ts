import { Component, OnInit, Input } from '@angular/core';
import { iProperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: iProperty;
  constructor() {}

  ngOnInit(): void {}
}
