
const leftBg = document.querySelector('.left-bg')
const rightBg = document.querySelector('.right-bg')
const imgRight = document.querySelector('.img')
const animatedBgs = document.querySelectorAll('.animated-bg');
console.log(animatedBgs)
const app = {
    indexCurrent: 0,
    dataBoxs: [
        {
            backgroundLeft: '#FFB866',
            title: 'Flying angle',
            article: 'in the sunset',
            img_path: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80'
        },
        {
            backgroundLeft: '#252E33',
            title: 'Lonely castle',
            article: 'in the wilderness',
            img_path: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80'
        },
        {
            backgroundLeft: '#2A86BA',
            title: 'Bluuue Sky',
            article: "with it's mountains",
            img_path: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80'
        },
        {
            backgroundLeft: '#FD3555',
            title: 'Nature flower',
            article: 'all in pink',
            img_path: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
        },
        {
            backgroundLeft: '#FD3555',
            title: 'Nature flower',
            article: 'all in pink',
            img_path: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
        }

    ],
    start() {
        this.renderingData()
        this.handleEvent()


    },
    leftContents: [],
    rightImgs: [],
    renderingData() {
        leftBg.innerHTML = `<button class="btn btn-down"><i class="fas fa-arrow-down"></i></button>`
        rightBg.innerHTML = `<button class="btn btn-up"><i class="fas fa-arrow-up"></i></button>`
        this.dataBoxs.forEach((data, index) => {
            const img = document.createElement('div')
            const content = document.createElement('div')
            content.innerHTML = `<h1>${data.title}</h1>
            <p>${data.article}</p>`
            img.style.backgroundImage = `url('${data.img_path}')`
            img.style.transform = `translateY(${index * 100}%)`
            content.style.backgroundColor = `${data.backgroundLeft}`
            content.style.transform = `translateY(-${index * 100}%)`
            rightBg.appendChild(img)
            leftBg.appendChild(content)
            this.leftContents.push(content)
            this.rightImgs.push(img)
        })
        animatedBgs.forEach(bg => {
            bg.classList.remove('animated-bg')
        })

    },
    handleEvent() {
        const btnUp = document.querySelector('.btn-up')
        const btnDown = document.querySelector('.btn-down')
        var _this = this;
        btnUp.addEventListener('click', function () {
            _this.indexCurrent++
            if (_this.indexCurrent > _this.dataBoxs.length - 1) {
                _this.indexCurrent = 0;
            }
            scrollSlider()

        })
        btnDown.addEventListener('click', function () {
            _this.indexCurrent--
            if (_this.indexCurrent < 0) {
                _this.indexCurrent = _this.dataBoxs.length - 1
            }
            scrollSlider()

        })
        function scrollSlider() {
            _this.leftContents.forEach((content, index) => {
                var contentNewPosition = _this.indexCurrent - index
                content.style.transform = `translateY(${contentNewPosition == 0 ? 0 : contentNewPosition * 100 + '%'})`
            })
            _this.rightImgs.forEach((img, index) => {
                var imgNewPosition = index - _this.indexCurrent
                img.style.transform = `translateY(${imgNewPosition == 0 ? 0 : imgNewPosition * 100 + '%'})`
            })
        }

    }


}
setTimeout(() => {
    app.start()
}, 5000)