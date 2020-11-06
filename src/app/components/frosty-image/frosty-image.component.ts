import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'frosty-image',
  templateUrl: './frosty-image.component.html',
  styleUrls: ['./frosty-image.component.css']
})
export class FrostyImageComponent implements OnInit {
  @Input() altText: string;
  @Input() height: number;
  @Input() source: string;
  @Input() width: number;

  constructor() { }

  ngOnInit(): void {
  }

}
