## HTTP 1.1 VS HTTP 2.0

<Mark>HTTP stand for Hypertext Transfer Protocal<Mark>

  ***HTTP*** is used for loading webpages using hyperlinks. ***HTTP*** is a application layer protocal design to transfer information between networked devices and run on the top of other layers of the network protocal stack.


#### What is HTTP 1.1 ?
 The first version of the HTTP is called HTTP1.1. The first version of HTTP is established in 1997 by Tim Berners-Lee. This version is still in use on web.

#### What is HTTP 2.0 ?
 In 2015 the ***HTTP 2.0*** is been introduced and have solved several problems. ***HTTP 2.0*** is much faster than the ***HTTP 1.1***.

<p>==One of the major faster performance is how it prioritizes content during the loading process.==<p>

![Protocol Image!](/Blogs/HTTP1%20VS%20HTTP2/image.png "https protocol image")

            
### HTTP/1.1

HTTP protocol was developed in 1989 as the common language that enables client and server machines’ interaction. Process steps are as enlisted:

The client (browser) has to send a request to the server using the method (GET/POST).
Server responds with the requested resource, for example – image, alongside the status of what it did to the client’s request.
Keep in mind that this is not a one-time process. Such requests and responses needs to be transferred between both these machines until the client receives all the resources, essential to load a web page on the end-user’s (your) screen.

This request-response exchange can be regarded as an IP stack being handled by transfer layer and networking layers before finally reaching to the application layer. Now, let’s see how HTTP/2 handles the same scenario.

### HTTP/2

HTTP/2 was released at Google as the significant improvement of its predecessor. It was initially modeled after the SPDY protocol and went through significant changes to include features like multiplexing, header compression, and stream prioritization to minimize page load latency. After its release, Google announced that it would not provide support for SPDY in favor of HTTP/2.

The major feature that differentiates HTTP/2 from HTTP/1.1 is the binary framing layer. Unlike HTTP/1.1, HTTP/2 uses a binary framing layer. This layer encapsulates messages – converted to its binary equivalent – while making sure that its HTTP semantics (method details, header information, etc.) remain untamed. This feature of HTTP/2 enables gRPC to use lesser resources.