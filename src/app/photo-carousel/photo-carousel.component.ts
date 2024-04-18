import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-carousel',
  templateUrl: './photo-carousel.component.html',
  styleUrls: ['./photo-carousel.component.css']
})
export class PhotoCarouselComponent implements OnInit{

  @Input() photos: string[] = [];
  currentPhotoIndex: number = 0;

  ngOnInit(): void {
    console.log(this.photos);
  }

  showPhoto(index: number) {
    this.currentPhotoIndex = index;
  }

  // nextPhoto() {
  //   this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
  // }

  // prevPhoto() {
  //   this.currentPhotoIndex =
  //     (this.currentPhotoIndex - 1 + this.photos.length) % this.photos.length;
  // }

  prevPhoto() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    } else {
      this.currentPhotoIndex = this.photos.length - 1;
    }
    this.scrollToCurrentPhoto();
  }
  
  nextPhoto() {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    } else {
      this.currentPhotoIndex = 0;
    }
    this.scrollToCurrentPhoto();
  }
  
  scrollToCurrentPhoto() {
    const slider = document.querySelector('.photo-slider') as HTMLElement;
    const selectedPhoto = document.querySelector('.slider-item.selected') as HTMLElement;
    if (slider && selectedPhoto) {
      slider.scrollLeft = selectedPhoto.offsetLeft - slider.offsetWidth / 2 + selectedPhoto.offsetWidth / 2;
    }
  }
  
  
}
