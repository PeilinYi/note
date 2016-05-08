# AngularJS应用骨架

### 基本的运作流程如下
1. 用户请求应用起始页
2. 用户的浏览器向服务器发起一次HTTP连接，然后加载index.html页面，这个页面里面包含了模板。
3. Angular被加载到页面中，等待页面加载完成，然后查找ng-app指令，用来定义模板边界。
4. Angular遍历模板，查找指令和绑定关系，这将触发一系列动作：注册监听器、执行一些DOM操作、从服务器获取初始化数据。这项工作的最后结果是，应用将会启动起来，并且模板被转换成了DOM视图
5. 连接到服务器去加载需要展示给用户的其它数据

### 显示文本
* `{{}}`
* ng-bind

### 表单输入
* $ watch()
* ng-click
* ng-dbclick
* ng-submit

### 非入侵式Javascript
	ng-eventhandler
* 所有浏览器中具有相同行为
* 不会在全局命名空间中进行操作

### 迭代指令
* ng-repeat

### 隐藏和显示
* ng-show
* ng-hide

### CSS类和样式
* ng-class
* ng-style

### img和a
* ng-src
* ng-href

### 控制器职责
* 为应用中的模型设置初始状态
* 通过$scope对象把数据模型和函数暴露给视图
* 监视模型其余部分的变化，并采取相应的动作

### 使用Module组织依赖关系
* provider
* factory
* service

### 过滤器
* filter

### 使用指令
* directive

### 校验用户输入