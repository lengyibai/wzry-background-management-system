//#####··········全屏背景视差··········#####//
//####········视频········####//
const parallaxVideo = {
  inserted(el, binding) {
    const size = binding.value === "small" ? [15, 1.1] : [5, 1.25];
    const multiple = size[0];
    const body = document.body;
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${size[1]})`;
    }

    body.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

//####········图片········####//
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
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

//#####··········粒子效果··········#####//
import { $random, $frameInterval } from "@/utils/lyb.js";
//####········纵向········####//
const particle = {
  inserted(el, binding) {
    const box = el;
    let {
      color = "#cfb45c",
      size = 10,
      brightness = 1.5,
      contrast = 1.1,
      filter = true,
    } = binding.value || {};
    if (filter) el.style.transition = "all 0.25s";
    const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      bottom:0;
      box-shadow: 0 0 10px 0 ${color};
      filter: contrast(125%) brightness(125%);
      `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    $frameInterval(() => {
      const left = $random(0, box_width - size),
        top = $random(box_height / 2, box_height),
        scale = $random(0.25, 0.75, 1),
        time = $random(0.5, 2, 1),
        c = document.createElement("span");
      c.style.cssText = style;
      c.style.left = left + "px";
      c.style.transform = `scale(${scale})`;
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.bottom = top / 1.5 + "px";
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = 0;
        }, time * 1000 - (time * 1000) / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1000);
      });
    }, 50);
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
};

//####········横向········####//
/* const particle1 = {
  inserted(el, binding) {
    const box = el;
    el.style.transition = "all 0.25s";
    let {
      color = "#cfb45c",
      size = 10,
      brightness = 1.5,
      contrast = 1.1,
      filter = true,
    } = binding.value || {};
    const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left:0;
      transform:scale(0);
      box-shadow: 0 0 10px 0 ${color};
      filter: contrast(125%) brightness(125%);
      `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    $frameInterval(() => {
      const top = $random(0, box_height - size),
        left = $random(box_width / 2, box_width),
        scale = $random(0.5, 1, 1),
        time = $random(0.5, 1, 1),
        c = document.createElement("span");
      c.style.cssText = style;
      c.style.top = top + "px";
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.transform = `scale(${scale})`;
        c.style.left = left / 1.5 + "px";
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = 0;
        }, time * 1000 - (time * 1000) / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1000);
      });
    }, 100);
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
}; */

//#####··········底部渐变··········#####//
const maskGradient = {
  inserted(el) {
    const mask = document.createElement("div");
    el.style.position = "relative";
    mask.style.cssText = `
    position: absolute;
    inset:0;
    background-image: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 50%);
    pointer-events: none;
    `;
    el.appendChild(mask);
  },
};

//#####··········卡片扫光··········#####//
const sweepLight = {
  inserted(el, binding) {
    const auto = binding.value !== false ? true : false;
    const light = document.createElement("div");
    el.style.position = "relative";
    light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 3}px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      transform: skewX(45deg) translateX(${el.offsetWidth * 2}px);
      transition: all 1s;
      filter: blur(5px)
    `;
    el.appendChild(light);
    if (auto) {
      light.style.transitionDelay = ` ${binding.value}s`;
      light.style.transform = `skewX(45deg) translateX(${
        -el.offsetWidth * 1.5
      }px)`;
    } else {
      el.addEventListener("mouseenter", () => {
        light.style.transform = `skewX(45deg) translateX(${
          -el.offsetWidth * 1.5
        }px)`;
      });

      el.addEventListener("mouseleave", () => {
        light.style.transform = `skewX(45deg) translateX(${
          el.offsetWidth * 2
        }px)`;
      });
    }
  },
};

//#####··········打字机··········#####//
const typewriter = {
  inserted(el, binding) {
    setTimeout(() => {
      let say = binding.value;
      let timer;
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      timer = setInterval(() => {
        text += say[num]; //遍历输出的文字
        el.innerHTML = text; //输出在屏幕上
        num++;
        if (num == say.length) {
          //如果文字输出完毕
          clearInterval(timer); //清除用于输出文字的计时器
        }
      }, 100);
    }, 750);
  },
};

//#####··········文字悬浮变色··········#####//
const textHoverColor = {
  inserted(el) {
    const mask = document.createElement("div");
    el.style.position = "relative";
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background-color: #fff;
    transition: all 0.25s;
    animation: light 3s infinite;
    -webkit-background-clip: text;
    clip-path: circle(75% at 50% 50%);
    `;

    el.appendChild(mask);
    el.addEventListener("mouseenter", () => {
      mask.style.clipPath = "circle(0% at 50% 50%)";
    });
    el.addEventListener("mouseleave", () => {
      mask.style.clipPath = "circle(75% at 50% 50%)";
    });
  },
};

let directives = {
  parallaxVideo,
  parallaxBody,
  particle,
  maskGradient,
  sweepLight,
  typewriter,
  textHoverColor,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};
