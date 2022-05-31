let msg = `<img src='http://www.xh.com'/>是发生纠纷dsf水电费tqd`;

//msg = msg.replace('<','&lt;').replace('>','&gt;').replace('tqd','xxx');
//console.log(msg);

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

const f1 = new HtmlFilter();
const f2 = new SensitiveFilter();

let res = f2.doFilter(f1.doFilter(msg));
console.log(res);




