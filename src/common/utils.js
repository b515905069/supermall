//防抖函数
export function debounce (func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)    //如果下一次执行的非常快，那么会将上一次取消掉
    timer = setTimeout(() => {  
      func.apply(this, args)        //如果有图片加载，就记录时间
    }, delay);
  }
}