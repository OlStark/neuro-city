class Slider {
  constructor(slideImages) {
    this.slideImages = slideImages;
    this._currentIndex = 0;
    this._createContainer();
    this._updateContainer();

    this.previousBtn.addEventListener("click", () => this._slideToPrevious());
    this.nextBtn.addEventListener("click", () => this._slideToNext());

    this._startSlideShow();
  }

  async _startSlideShow() {
    window.onload = this._slideToNext();
  }

  _createContainer() {
    this.slideContainer = document.createElement("div");
    this.slideContainer.className = "slider-container";
    this.slideImg = document.createElement("img");
    this.previousBtn = document.createElement("button");
    this.nextBtn = document.createElement("button");
    this.previousBtn.classList.add("slider-container__button");
    this.nextBtn.classList.add("slider-container__button");
    this.previousBtn.textContent = "Previous";
    this.nextBtn.textContent = "Next";
  }

  _updateContainer() {
    this.slideContainer.appendChild(this.slideImg);
    this.slideContainer.appendChild(this.previousBtn);
    this.slideContainer.appendChild(this.nextBtn);
    document.querySelector(".container").appendChild(this.slideContainer);
  }

  _slideToNext() {
    this._currentIndex = (this._currentIndex + 1) % this.slideImages.length; // переходим к следующему слайду или только что вернулись к первому

    this._showCurrentSlide();
  }

  _slideToPrevious() {
    this._currentIndex =
      (this._currentIndex - 1 + this.slideImages.length) %
      this.slideImages.length; // переходим к предыдущему слайду или только что вернулись к последнему
    this._showCurrentSlide();
  }

  _showCurrentSlide() {
    this.slideImg.src = this.slideImages[this._currentIndex];
    this.slideImg.classList.add("slider-container__image");
    this.slideImg.alt = "slider-image";
  }
}

// Пример использования:
const slideImages = [
  "./assets/image1.webp",
  "./assets/image2.webp",
  "./assets/image3.webp",
];

const slider = new Slider(slideImages);
