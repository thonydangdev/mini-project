const itemImage = document.querySelector('.item-image');
const infoTitle = document.querySelector('.info-title');
const infoDescription = document.querySelector('.info-description');
const userAvatar = document.querySelector('.user-avatar');
const nameUser = document.querySelector('.name-user');
const birthUser = document.querySelector('.birth-user')
const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedTexts = document.querySelectorAll('.animated-text')


setTimeout(getData, 2000)
function getData() {
    itemImage.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">'
    infoTitle.innerHTML = 'Lorem ipsum dolor sit amet'
    infoDescription.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    userAvatar.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    nameUser.innerHTML = 'John Doe'
    birthUser.innerHTML = 'Oct 08, 2020'
    animatedBgs.forEach(bg => {
        bg.classList.remove('animated-bg')
    })
    animatedTexts.forEach(bg => {
        bg.classList.remove('animated-text')
    })

}