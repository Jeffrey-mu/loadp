class ImageLoading {
  constructor() { }
  initImageLoading({
    height, query, all = true
  }) {
    this.insertStyle(this.getImageLoadingClass(height))
    this.coreImageLoading(this.toArray(this.getImage(query, all)), height)
  }

  coreImageLoading(array, height) {
    array.forEach(element => {
      element.parentElement.classList.add('loading' + height)
      element.style.display = "none"
      element.onload = () => {
        element.style.display = "block"
        element.parentElement.classList.remove('loading' + height)
      }
    });
  }

  /**
  *    @param { string } query 查询字符串
  *    @param { boolean } all  获取全部 默认true
  *    @description 获取需要处理的img
  *    @Date 2022-09-27 10:43:51 星期二
  */
  getImage(query, all = true) {
    return all ? this.getEl(query) : this.getEl(query)[0];
  }

  /**
  *    @param { string } query 查询字符串
  *    @description document.querySelectorAll 获取元素
  *    @Date 2022-09-27 10:44:43 星期二
  */
  getEl(query) {
    return document.querySelectorAll(query);
  }

  /**
  *    @param {  }
  *    @description 获取占位符样式
  *    @Date 2022-09-27 10:45:41 星期二
  */
  getLoadingStyle() { }

  /**
  *    @param {  }
  *    @description 获取占位符样式
  *    @Date 2022-09-27 10:45:41 星期二
  */
  setLoadingStyle() { }

  /**
  *    @param { pseudoArray } pseudoArray
  *    @description 转数组
  *    @Date 2022-09-27 10:49:24 星期二
  */
  toArray(pseudoArray) {
    return [...pseudoArray]
  }

  getImageLoadingClass(height = 200) {
    return `.loading${height} {height: ${height}px;animation: loading${height} 2s infinite ease;}
    @keyframes loading${height} {
      0% {
        background-color: #ddd;
      }

      25% {
        background-color: #eee;
      }

      50% {
        background-color: #eeeeee6b;
      }

      75% {
        background-color: #eee;
      }


      100% {
        background-color: #ddd;
      }
    }`
  }

  insertStyle(el) {
    let style = document.createElement('style');
    style.innerHTML = el
    let head = this.getEl('head')[0];
    head.appendChild(style);
  }
}
