## sysctl

* net.core.rmem_default
    指定了接收套接字缓冲区大小的缺省值（以字节为单位）
* net.core.rmem_max
    指定了接收套接字缓冲区大小的最大值（以字节为单位）
* net.core.wmem_default
    指定了发送套接字缓冲区大小的缺省值（以字节为单位）
* net.core.wmem_max
    指定了发送套接字缓冲区大小的最大值（以字节为单位）
* net.core.netdev_max_backlog
  该文件表示在每个网络接口接收数据包的速率比内核处理这些包的速率快时，允许送到队列的数据包的最大数目
* net.ipv4.udp_mem
* net.ipv4.udp_rmem_min
* net.ipv4.udp_wmem_min


## netstat -s --udp
## sudo sysctl -p

> [UDP Drops on Linux](https://answers.splunk.com/answers/7001/udp-drops-on-linux.html)
> [Node.js高并发配置](http://www.goorockey.com/2014/07/20/high-concurrency-setting-for-nodejs/)
