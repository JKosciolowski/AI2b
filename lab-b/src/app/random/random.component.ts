import { Component, Input, OnInit } from '@angular/core';
import { RandomService } from "../random.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  myNumber!: number;
  myNumber2!: number;
  @Input() max = 10;

  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
    this.myNumber2 = this.randomService.randomNumber(100); 
  }

  btnClick() {
    this.myNumber = this.randomService.randomNumber(this.max);
  }
  btnClick2() {
    this.myNumber2 = this.randomService.randomNumber(100);
  }
  

  isSmallerThanHalf(): boolean {
    return this.myNumber <= this.max / 2;
  }

  isSmallerThanHalf2(): boolean {
    return this.myNumber2 <= 50;
  }
}
