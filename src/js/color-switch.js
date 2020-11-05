const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
};

const DELAY = 1000;
let timerId = null;
let isActive = false;

refs.buttonStart.addEventListener('click', onChangeColor);
refs.buttonStop.addEventListener('click', onStopChangeColor);

function onChangeColor() {
  if (isActive === false) {
    isActive = true;
    timerId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, DELAY);
  }
}

function onStopChangeColor() {
  clearTimeout(timerId);
  isActive = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
