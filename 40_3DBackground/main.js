const container = document.querySelector('.container');
const btnMagic = document.querySelector('.btn-change');
let width = 500;
let height = 600;
let row = 4;
let col = 3;
let totalItem = row * col;
console.log(totalItem);
let widthItem = width / col;
let heightItem = height / row;
let heightCurrent = 0;
let widthCurrent = 0;
btnMagic.addEventListener('click', function () {
    container.classList.toggle('active')
})
renderingMagicBox(totalItem)
function renderingMagicBox(totalItem) {
    for (let i = 0; i < totalItem; ++i) {
        const item = document.createElement('div');
        item.className = 'item';
        Object.assign(item.style, {
            height: `${heightItem}px`,
            width: `${widthItem}px`,
            backgroundImage: 'url("https://storage.googleapis.com/gamebyte/2021/06/feecce7d-eldenring.jpg")',
            backgroundSize: `${width}px ${height}px`,
            backgroundPosition: `-${widthCurrent}px -${heightCurrent}px`
        })
        container.append(item);
        if (widthCurrent < width - widthItem - 1) {
            widthCurrent += widthItem;

        } else {
            widthCurrent = 0;
            heightCurrent += heightItem;

        }
    }

}