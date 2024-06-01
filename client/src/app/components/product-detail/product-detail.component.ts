import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TypesComponent } from './children/types/types.component';
import { VideoComponent } from './children/video/video.component';
import { EffectComponent } from './children/effect/effect.component';
import { HistoryComponent } from './children/history/history.component';

interface Display{
  types:boolean;
  video:boolean;
  effect:boolean;
  history:boolean;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, TypesComponent, VideoComponent, EffectComponent, HistoryComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() display:Display
  @ViewChild(TypesComponent) typesComponent?:TypesComponent;
  @ViewChild(VideoComponent) videoComponent?:VideoComponent;
  @ViewChild(EffectComponent) effectComponent?:EffectComponent;
  @ViewChild(HistoryComponent) historyComponent?:HistoryComponent;
  constructor() {
    this.display = {
      types:false,
      video:false,
      effect:false,
      history:false
    }
  }
  ngOnInit(): void {
    this.display = {
      types:false,
      video:false,
      effect:false,
      history:false
    }
    console.log(this.display)
  }



  show(type:string){
   if(type === 'types'){
    const displayBool = this.display.types
    this.falseDisplay()
    this.display.types = displayBool? false : true
   }else if(type === 'video'){
    const displayBool = this.display.video
    this.falseDisplay()
    this.display.video = displayBool? false : true
   }else if(type === 'effect'){
    const displayBool = this.display.effect
    this.falseDisplay()
    this.display.effect = displayBool? false : true
   }else{
    const displayBool = this.display.history
    this.falseDisplay()
    this.display.history = displayBool? false : true
   }
  }

  falseDisplay(){
    this.display = {
      types:false,
      video:false,
      effect:false,
      history:false
    }
  }
}
