class Filter{
    doFilter(){}
}

class HtmlFilter extends Filter{
    doFilter(msg){
        return msg.replace('<','&lt;').replace('>','&gt;')
    }
}

class SensitiveFilter extends Filter{
    doFilter(msg){
        return msg.replace('tqd','xxx')
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

    doFilter(msg){
        for(let filter of this.filters){
            msg = filter.doFilter(msg);
        }
        return msg;
    }

}


let msg = `<img src='http://www.xh.com'/>是发生纠纷dsf水电费tqd`;
const f1 = new HtmlFilter();
const f2 = new SensitiveFilter();
const fc = new FilterChain();
fc.addFilter(f1).addFilter(f2);
//fc2 add EmojiFilter UrlFilter
//fc1 add fc2
let res = fc.doFilter(msg);
console.log(res);




