import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  min:number = 0;
  max:number = 100;
  inputValue = 0;
  left!:number;
  long!: number;
  newPosition!: number;
  value!: number;


  @ViewChild('test') test!: ElementRef;
  @ViewChild('inputWidth') inputWidth!: ElementRef;


  sliderForm = this.fb.group({
    slider: [0],
   })

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  changeValue() {

    let thumbWidth = 48;
    this.inputValue = this.sliderForm.get('slider')?.value;
    this.long = (this.inputWidth.nativeElement).offsetWidth;

    this.value = (this.long - thumbWidth) / (this.max - this.min);
    this.newPosition = ((this.inputValue - this.min) * this.value) - (this.long / 2) + (thumbWidth *2 );
    this.left = this.newPosition;


  }



}


