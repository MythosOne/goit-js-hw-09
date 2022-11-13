function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('.data-start');
const buttonStop = document.querySelector('.data-stop');

// console.log(buttonStart);
// console.log(buttonStop);

let timerId = null;

buttonStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
});

buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStop.disabled = true;
    buttonStart.disabled = false;
});


