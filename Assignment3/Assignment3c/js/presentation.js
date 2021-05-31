class Presentation
{
    constructor()
    {
        this.i = 0;
        this.slideIndex = 0;
        this.slides = document.getElementsByClassName("slider-img");
    }
    autoSlide()
    {
        for (this.i = 0; this.i < this.slides.length; this.i++) 
        {
            this.slides[this.i].style.display = "none";
        }
        this.slideIndex++;
        if (this.slideIndex > this.slides.length) 
        {
            this.slideIndex = 1;
        }
        this.slides[this.slideIndex-1].style.display = "block";
        setTimeout(this.autoSlide, 2000);
    }
}

var example = new Presentation();
example.autoSlide();


// }var i;
// var slideIndex = 0;
// var slides = document.getElementsByClassName("slider-img");
// autoSlide();
// function autoSlide() {
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(autoSlide, 2000);