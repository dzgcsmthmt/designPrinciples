//Chain of Responsibility
class Filter {
    doFilter(msg) {

    }
}

class HtmlFilter extends Filter {
    doFilter(msg) {
       return msg.replace('<','[').replace('>',']')
    }
}

class SensitiveFilter extends Filter {
    doFilter(msg){
        return msg.replace('996','955')
    }
}

class EmojiFilter extends Filter{
    doFilter(msg){
        return msg.replace(':)','^V^');
    }
}

class DeduplicateFilter extends Filter{
    doFilter(msg){
        return msg.replace('am am','am');
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

function filter(msg){
    // return msg.replace('<','[').replace('>',']').replace('996','955').replace(':)','^V^');
    // msg = new HtmlFilter().doFilter(msg);
    // msg = new SensitiveFilter().doFilter(msg);
    // let filters = [new HtmlFilter(),new SensitiveFilter()];
    // for(let filter of filters){
    //     msg = filter.doFilter(msg);
    // }
    // return msg;
    let fc2 = new FilterChain();
    fc2.addFilter(new DeduplicateFilter()).addFilter(new EmojiFilter());
    let fc = new FilterChain();
    fc.addFilter(new HtmlFilter()).addFilter(fc2).addFilter(new SensitiveFilter());

    return fc.doFilter(msg);
}

console.log(filter('hello:),i am am <script>,heard that you work 996'));



