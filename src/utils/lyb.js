//随机数
export function $random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 时间格式化
export function $fmtTime(date, fmt = 'YYYY-MM-DD hh:mm:ss') {
  date = new Date(date);
  let ret,
    week = ['日', '一', '二', '三', '四', '五', '六'];
  const opt = {
    'Y+': date.getFullYear().toString(),
    'M+': (date.getMonth() + 1).toString(),
    'D+': date.getDate().toString(),
    'h+': date.getHours().toString(),
    'm+': date.getMinutes().toString(),
    's+': date.getSeconds().toString(),
    w: week[date.getDay()],
    n: new Date(date).valueOf()
  };
  for (let k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
}
