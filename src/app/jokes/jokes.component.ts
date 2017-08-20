import { Router, GuardsCheckEnd, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    });
    this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof GuardsCheckEnd) {
        console.log(event);
      }
    });
  }

}
