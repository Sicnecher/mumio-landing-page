import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-response',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-response.component.html',
  styleUrl: './submit-response.component.css'
})
export class SubmitResponseComponent {
  @Input() responseOk?: boolean
}
