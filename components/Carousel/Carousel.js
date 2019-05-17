class Carousel {
    constructor(carouselElement){
        this.carousel = carouselElement;
        this.left = this.carousel.querySelector(".left-button");
        this.right = this.carousel.querySelector(".right-button");
        this.imgs = this.carousel.querySelectorAll("img");
        this.index = 0;
        this.maxIndex = Array.from(this.imgs).length - 1;
        this.imgs.forEach(img => img.dataset.index == this.index ? img.classList.add("display-block") : null);
        this.left.addEventListener("click", () => {
            this.handleLeftClick();
        });
        this.right.addEventListener("click", () => {
            this.handleRightClick();
        });
    }

    handleLeftClick(){
        // this.index--;
        // this.index - 1 < 0 ? this.index = this.maxIndex : this.index--;
        if(this.index - 1 < 0)
        {
            this.index = this.maxIndex;
        }
        else {
            this.index--;
        }
        this.carousel.querySelector(".display-block").classList.remove("display-block");
        this.imgs.forEach(img => img.dataset.index == this.index ? img.classList.add("display-block") : null);
        // console.log(this.index);
    }

    handleRightClick(){
        // this.index++;
        if(this.index + 1 > this.maxIndex)
        {
            this.index = 0;
        }
        else {
            this.index++;
        }
        this.carousel.querySelector(".display-block").classList.remove("display-block");
        this.imgs.forEach(img => img.dataset.index == this.index ? img.classList.add("display-block") : null);
    }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
