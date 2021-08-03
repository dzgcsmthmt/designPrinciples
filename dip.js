// Dependency Inversion Principle
/**
 * A.高层次的模块不应该依赖于低层次的模块，他们都应该依赖于抽象。
 * B.抽象不应该依赖于具体，具体应该依赖于抽象。
 * C.依赖倒转(倒置)的中心思想是面向接口编程
 */


class XMLHttpService extends XMLHttpRequestService {}
class Http {
    constructor(xmlhttpService: XMLHttpService) { }
    get(url: string , options: any) {
        this.xmlhttpService.request(url,'GET');
    }
    post() {
        this.xmlhttpService.request(url,'POST');
    }
    //...
}



interface Connection {
    request(url: string, opts:any);
}

class Http {
    constructor(private httpConnection: Connection) { }
    get(url: string , options: any) {
        this.httpConnection.request(url,'GET');
    }
    post() {
        this.httpConnection.request(url,'POST');
    }
    //...
}


class XMLHttpService implements Connection {
    const xhr = new XMLHttpRequest();
    //...
    request(url: string, opts:any) {
        xhr.open();
        xhr.send();
    }
}

class NodeHttpService implements Connection {
    request(url: string, opts:any) {
        //...
    }
}
class MockHttpService implements Connection {
    request(url: string, opts:any) {
        //...
    }    
}