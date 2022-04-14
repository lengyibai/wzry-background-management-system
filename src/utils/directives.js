/* 全屏视频背景视差 */
const parallaxVideo = {
  inserted(el) {
    const multiple = 5;
    const body = document.body;

    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(1.25)`;
      body.style.backgroundPosition = `${calcX}px ${calcY}px`;
    }

    body.addEventListener("mousemove", (e) => {
      window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

/* 全屏图片背景视差 */
const parallaxBody = {
  inserted() {
    const multiple = 10;
    const body = document.body;

    function transformElement(x, y) {
      let box = body.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      body.style.backgroundPosition = `calc(${calcX}px - 5vw) calc(${calcY}px - 5vh)`;
    }
    body.addEventListener("mousemove", (e) => {
      window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

let directives = {
  parallaxVideo,
  parallaxBody,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};
