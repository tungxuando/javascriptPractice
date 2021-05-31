class Presentation 
{
    constructor()
    {
        this.slider_img = document.querySelector('.slider-img');
        this.images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg'];
        this.i = 0;
    }

    previous() 
    {
        if (this.i <= 0) this.i = this.images.length;
        this.i--;
        return this.setImage();
    }

    next() 
    {
        if (this.i >= this.images.length - 1) this.i = -1;
        this.i++;
        return this.setImage();
    }

    setImage() 
    {
        return this.slider_img.setAttribute('src', 'images/' + this.images[this.i]);
    }
}
var presentation = new Presentation();
function clickEventPrevious()
{
    presentation.previous();
}
function clickEventNext()
{
    presentation.next();
}