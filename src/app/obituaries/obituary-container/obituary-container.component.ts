import { Component, OnInit } from '@angular/core';
import { Obituary, Obituaries } from '../obituaries.types';

@Component({
  selector: 'app-obituary-container',
  templateUrl: './obituary-container.component.html',
  styleUrls: ['./obituary-container.component.scss']
})
export class ObituaryContainerComponent implements OnInit {

  obituaries: Obituary[] = Obituaries;

  constructor() { }

  ngOnInit(): void {
  }

}
