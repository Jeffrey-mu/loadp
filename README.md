# loadp
- A picture loading box script
- When there are too many image resources on the first screen, requesting image resources will take a lot of time, which will reduce the user experience
- Use this script to add a loading box for the picture. When the picture is loaded, display the picture

## Usage
- Introduction of script tag src
```html
<script src="./ImageLoading.js"></script>

<!--Use at the bottom of the html file or window Onload usage-->
<script>
    let img = document.getElementsByTagName('img')[0]
    console.log(img.height)
    // Parameter Description
    // height Loading box height
    // query querySelectorAll Selector String
    new ImageLoading().initImageLoading({
      height: 500, query: 'ul li img'
    })
</script>
```
[demo](./img.html)
