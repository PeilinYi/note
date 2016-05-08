# WebSocket

## Javascript实现
```javascript
var wsServer = 'ws://localhost'
var websocket = new WebSocket(wsServer)
websocket.onopen = function(evt) {
    console.log('Connected to WebSocket server: %j', evt)
}
websocket.onclose = function(evt) {
    console.log('Disconnected: %j', evt)
}
websocket.onmessage = function(evt) {
    console.log('Retrieved data from server: %j', evt)
}
websocket.onerror = function(evt) {
    console.log('Error occured: %j', evt)
}
```

## 引用
* [IBM DeveloperWorks -- 使用 HTML5 WebSocket 构建实时 Web 应用](http://www.ibm.com/developerworks/cn/web/1112_huangxa_websocket/)
* [WebSocket.org](http://www.websocket.org/index.html)