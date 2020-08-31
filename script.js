document.addEventListener('scroll', runParallax);

function runParallax() {
    debugger
    let scrollSize = window.scrollY;
    const speed = [-1.8, -2.8, -3.8];
    const offsetTop = [100, 200, 300];
    const elementList = document.querySelectorAll('.parallax-circle');

    for (let index = 0; index < elementList.length; index++) {
        elementList[index].style.top = `${offsetTop[index] + scrollSize * speed[index]}px`;
    }

}

// Math.ceil(Math.random() * 10) = Math.random()

// var newDiv = document.createElement('div');
// document.body.appendChild(newDiv);
// newDiv.className = "parallax-circle";

for (let index = 0; index < 3; index++) {
    document.querySelector('.parallax-elements').innerHTML += `<div class="parallax-circle" data-id="${index}"></div>`;
}

const elementList = document.querySelectorAll('.parallax-circle');

for (let i = 0; i < elementList.length; i++) {
    elementList[i].style.background = `#${getRandColor() + getRandColor() + getRandColor()}`;
}

// function randomHexColor() {
//     return '#'+Math.floor(Math.random()*16777215).toString(16);
// }

function getRandColor() {
    let color = Math.ceil(Math.random() * 99);
    if(color < 10) {
        color = '0' + color;
    } else {
        color = color.toString();
    }

    return color;
}