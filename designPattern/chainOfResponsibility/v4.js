class Request{
    constructor(msg){
        this.msg = msg;
    }
}

class Response{
    constructor(msg){
        this.msg = msg;
    }
}

class Filter{
    doFilter(req,res,filterchain){}
}

class HtmlFilter extends Filter{
    doFilter(req,res,filterchain){
        req.msg = req.msg.replace('<','&lt;').replace('>','&gt;');
        //do something
        filterchain.doFilter(req,res,filterchain);
        res.msg += '---html response---';
    }
}

class SensitiveFilter extends Filter{
    doFilter(req,res,filterchain){
        req.msg = req.msg.replace('tqd','xxx');
        //do something
        filterchain.doFilter(req,res,filterchain);
        res.msg += '----sensitive response----';
    }
}

class FilterChain{
    constructor(){
        this.filters = [];
        this.index = 0;
    }

    addFilter(filter){
        this.filters.push(filter);
        return this;
    }

    doFilter(req,res,filterchain){
        if(this.index === this.filters.length) return;
        this.filters[this.index++].doFilter(req,res,filterchain);
    }

}

let req = new Request(`<img src='http://www.xh.com'/>是发生纠纷dsf水电费tqd`);
let res = new Response('response');

const f1 = new HtmlFilter();
const f2 = new SensitiveFilter();
const fc = new FilterChain();
fc.addFilter(f1).addFilter(f2);
fc.doFilter(req,res,fc);

console.log(req.msg,res.msg);
