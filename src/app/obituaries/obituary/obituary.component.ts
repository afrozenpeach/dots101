import { Component, OnInit, Input} from '@angular/core';
import { Obituary, Obituaries } from '../obituaries.types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obituary',
  templateUrl: './obituary.component.html',
  styleUrls: ['./obituary.component.scss']
})
export class ObituaryComponent implements OnInit {

  slug: string;
  obituary: Obituary;

  constructor(private route: ActivatedRoute) {  
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.slug = p['slug'];

      Obituaries.forEach(o => {
        if (o.slug === this.slug) {
          this.obituary = o;
        }
      })
    })
  }

}
