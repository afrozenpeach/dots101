import { Component, OnInit, Input} from '@angular/core';
import { Obituary } from '../obituaries.types';

@Component({
  selector: 'app-obituary',
  templateUrl: './obituary.component.html',
  styleUrls: ['./obituary.component.scss']
})
export class ObituaryComponent implements OnInit {

  @Input() obituary: Obituary;

  constructor() {
   }

  ngOnInit(): void {
  }

}
