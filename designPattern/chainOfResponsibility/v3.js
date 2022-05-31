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
    doFilter(){}
}

class HtmlFilter extends Filter{
    doFilter(req,res){
        req.msg = req.msg.replace('<','&lt;').replace('>','&gt;');
        //do something
        res.msg += '---html response---';
    }
}

class SensitiveFilter extends Filter{
    doFilter(req,res){
        req.msg = req.msg.replace('tqd','xxx');
        //do something
        res.msg += '----sensitive response----';
    }
}

class FilterChain{
    constructor(){
        this.filters = [];
    }

    addFilter(filter){
        this.filters.push(filter);
        return this;
    }

    doFilter(req,res){
        for(let filter of this.filters){
            filter.doFilter(req,res);
        }
        // return msg;
    }

}

let req = new Request(`<img src='http://www.xh.com'/>是发生纠纷dsf水电费tqd`);
let res = new Response('response');

const f1 = new HtmlFilter();
const f2 = new SensitiveFilter();
const fc = new FilterChain();
fc.addFilter(f1).addFilter(f2);
fc.doFilter(req,res);

console.log(req.msg,res.msg);
