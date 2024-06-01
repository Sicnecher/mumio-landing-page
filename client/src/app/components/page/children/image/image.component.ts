import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  images: string[] = [
    '../../../../.../assets/static-info/images/מומיו3',
    '../../../../../assets/static-info/images/מומיו3',
    // Add more image URLs as needed
  ];

  currentImageIndex: number = 0;

  constructor() { }

  getNextImageIndex(): number {
    return (this.currentImageIndex + 1) % this.images.length;
  }

  transitionToNextImage(): void {
    this.currentImageIndex = this.getNextImageIndex();
  }
}
