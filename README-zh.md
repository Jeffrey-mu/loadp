# loadp
- 一个图片加载框脚本
- 当首屏图片资源过多，图片较大时 请求图片资源会占用大量时间，会降低用户体验
- 使用此脚本，为图片添加一个loading框，当图片加载完成展示图片

## 使用
- script标签 src 引入
```html
<script src="./ImageLoading.js"></script>

<!--html文件底部使用 或者window.onload 使用-->
<script>
    // 参数说明
    // height 加载框高度
    // query querySelectorAll 选择器字符串
    new ImageLoading().initImageLoading({
      height: 500, query: 'ul li img'
    })
</script>
```
[演示](./img.html)
