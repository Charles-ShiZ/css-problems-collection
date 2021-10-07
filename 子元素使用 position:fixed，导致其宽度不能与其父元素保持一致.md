原因：一个子元素如果设置了`position:fixed`，其宽度的百分比值将不再以其父元素的宽度为基数，而是window。

解决方法：
1. 子元素的宽度不要设置为百分比值，设置为固定值，如px，父元素也同样使用固定值。与该父元素同级的其他元素可以使用`width:calc(100% - 固定值)`来确定其宽度
2. 子元素使用`position:absolute`代替`position:fixed`。因为设置了`position:absolute`的元素，其宽度的百分比值，以设置了`position:relative`的上级元素为基数。但实现起来较为麻烦。
