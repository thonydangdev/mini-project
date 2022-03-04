const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const sliderBox = document.querySelector('.slider-container')
const body = document.querySelector('body')
const slider = {
    currentIndex: 0,
    listImage: [
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
        'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'],
    start() {
        this.renderingImage(this.currentIndex)
        this.eventHandle()
    },
    renderingImage(index) {
        const sliderPic = document.createElement('div')
        sliderPic.classList.add('slider-image')
        sliderPic.style.backgroundImage = `url(${this.listImage[index]})`
        body.style.backgroundImage = `url(${this.listImage[index]})`

        sliderBox.appendChild(sliderPic)
    },
    eventHandle() {
        _this = this;
        btnPrev.addEventListener('click', function () {
            _this.currentIndex--
            if (_this.currentIndex < 0) {
                _this.currentIndex = _this.listImage.length - 1
            }
            _this.removeSlider()
            _this.renderingImage(_this.currentIndex)
        })
        btnNext.addEventListener('click', function () {
            _this.currentIndex++
            if (_this.currentIndex > _this.listImage.length - 1) {
                _this.currentIndex = 0
            }
            _this.removeSlider()
            _this.renderingImage(_this.currentIndex)
        })
    },
    removeSlider() {
        const OldSlider = document.querySelector('.slider-image')
        sliderBox.removeChild(OldSlider)
    }


}
slider.start()