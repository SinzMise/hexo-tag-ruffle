# hexo-tag-ruffle
[Ruffle](https://ruffle.rs/) for Hexo

## Inatall 安装插件
``` bash
# npm install npm安装：
npm install hexo-tag-ruffle --save
#(for china)cnpm install cnpm安装：
cnpm install hexo-tag-ruffle --save
```
## Usage 使用方法
In your markdown file: 在你的markdown文件中插入以下片段
```
{% ruffle [swf] [width] [height] %}
```
<table>
  <tr>
    <th>参数(Parameter)</th>
    <th>备选值(Alternative value) / 类型(type)</th>
    <th>释义(Interpretation)</th>
  </tr>
  <tr>
    <td>swf</td>
    <td>URL</td>
    <td>SWF链接(SWF Link)</td>
  </tr>
  <tr>
    <td>width</td>
    <td>number</td>
    <td>SWF宽度(SWF width)</td>
  </tr>
  <tr>
    <td>height</td>
    <td>number</td>
    <td>SWF高度(SWF height)</td>
  </tr>
</table>