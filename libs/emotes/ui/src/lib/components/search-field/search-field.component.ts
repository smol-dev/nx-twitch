import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-twitch-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  @Input() value = '';

  constructor() {}

  ngOnInit(): void {}
}
