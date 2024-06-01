import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {
  @Input() display?:string
}
