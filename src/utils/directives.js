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
      transform:scale(0);
      box-shadow: 0 0 10px 0 ${color};
      filter: contrast(125%) brightness(125%);
      `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    $frameInterval(() => {
      const left = $random(0, box_width - size),
        top = $random(box_height / 2, box_height),
        scale = $random(0.5, 1, 1),
        time = $random(0.5, 1, 1),
        c = document.createElement("span");
      c.style.cssText = style;
      c.style.left = left + "px";
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.transform = `scale(${scale})`;
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
// const particle1 = {
//   inserted(el, binding) {
//     const box = el;
//     el.style.transition = "all 0.25s";
//     let {
//       color = "#cfb45c",
//       size = 10,
//       brightness = 1.5,
//       contrast = 1.1,
//       filter = true,
//     } = binding.value || {};
//     const style = `
//       position: absolute;
//       background-color: ${color};
//       pointer-events: none;
//       width: ${size}px;
//       height: ${size}px;
//       left:0;
//       transform:scale(0);
//       box-shadow: 0 0 10px 0 ${color};
//       filter: contrast(125%) brightness(125%);
//       `;
//     const box_width = box.offsetWidth;
//     const box_height = box.offsetHeight;

//     $frameInterval(() => {
//       const top = $random(0, box_height - size),
//         left = $random(box_width / 2, box_width),
//         scale = $random(0.5, 1, 1),
//         time = $random(0.5, 1, 1),
//         c = document.createElement("span");
//       c.style.cssText = style;
//       c.style.top = top + "px";
//       c.style.transition = `all ${time}s linear`;
//       box.appendChild(c);
//       setTimeout(() => {
//         c.style.transform = `scale(${scale})`;
//         c.style.left = left / 1.5 + "px";
//         setTimeout(() => {
//           c.style.transition = `all ${time / 4}s linear`;
//           c.style.opacity = 0;
//         }, time * 1000 - (time * 1000) / 4);
//         setTimeout(() => {
//           c.remove();
//         }, time * 1000);
//       });
//     }, 100);
//     el.addEventListener("mouseenter", () => {
//       if (!filter) return;
//       el.style.filter = `brightness(${brightness * 100}%) contrast(${
//         contrast * 100
//       }%)`;
//     });
//     el.addEventListener("mouseleave", () => {
//       el.style.filter = "";
//     });
//   },
// };

let directives = {
  parallaxVideo,
  parallaxBody,
  particle,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};
