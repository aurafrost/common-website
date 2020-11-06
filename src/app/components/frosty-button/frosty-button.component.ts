import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frosty-button',
  templateUrl: './frosty-button.component.html',
  styleUrls: ['./frosty-button.component.css']
})
export class FrostyButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() redirectTarget: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(): void {
    if (this.redirectTarget) {
      this.router.navigate([this.redirectTarget]);
    }
  }
}
