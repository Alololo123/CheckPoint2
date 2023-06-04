class Clock {
    constructor(clockElement) {
      this.clockElement = clockElement;
      this.displayElement = clockElement.querySelector('.clock-display');
      this.startButton = clockElement.querySelector('.start-btn');
      this.stopButton = clockElement.querySelector('.stop-btn');
      this.pauseButton = clockElement.querySelector('.pause-btn');
      this.intervalId = null;
      this.time = 0;
      this.isRunning = false;
    }
  
    render() {
      const minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
      const seconds = (this.time % 60).toString().padStart(2, '0');
      this.displayElement.textContent = `${minutes}:${seconds}`;
    }
  
    start() {
      if (!this.isRunning) {
        this.intervalId = setInterval(() => {
          this.time++;
          this.render();
        }, 1000);
        this.isRunning = true;
      }
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.time = 0;
      this.render();
      this.isRunning = false;
    }
  
    pause() {
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }
  
  //khoi tao clocks
  const clockElements = document.querySelectorAll('.clock');
  const clocks = Array.from(clockElements).map(clockElement => new Clock(clockElement));
  
  //start 1 clock
  clocks.forEach(clock => {
    clock.startButton.addEventListener('click', () => {
      clock.start();
    });
  });
  
  //xoa thoi gian 1 clock
  clocks.forEach(clock => {
    clock.stopButton.addEventListener('click', () => {
      clock.stop();
    });
  });
//tam dung 1 clock
clocks.forEach(clock => {
    clock.pauseButton.addEventListener('click', () => {
      clock.pause();
    });
  });


//dung tat ca
const stopAllButton = document.getElementById('stop-all-btn');
stopAllButton.addEventListener('click', () => {
  clocks.forEach(clock => {
    clock.stop();
  });
});

//Bat dau tat ca clock
const startAllButton = document.getElementById('start-all-btn');
startAllButton.addEventListener('click', () => {
    clocks.forEach(clock => {
      if (!clock.isRunning) {
        clock.start();
      }
    });
});