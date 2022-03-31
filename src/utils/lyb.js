/* 功能 */
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

//根据时间段问候
export function $timeGreet(greet = {}) {
  const { a = '午夜好', b = '早上好', c = '上午好', d = '中午好', e = '下午好', f = '晚上好' } = greet;
  const now = new Date().getHours();
  return now < 4 ? a : now < 10 ? b : now < 12 ? c : now < 14 ? d : now < 18 ? e : f;
}
