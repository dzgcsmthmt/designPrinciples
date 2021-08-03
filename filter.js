//Chain of Responsibility
class Request{

}
class Response{

}

class Filter {
    doFilter(request,response,filterChain) {

    }
}

class HtmlFilter extends Filter {
    doFilter(request,response,filterChain) {
       console.log('html',request.msg);
       filterChain.doFilter(request,response,filterChain);
       console.log('html',response.msg);
    }
}

class SensitiveFilter extends Filter {
    doFilter(request,response,filterChain){
        console.log('sensitive',request.msg);
        filterChain.doFilter(request,response,filterChain);
        console.log('sensitive',response.msg);
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
    doFilter(request,response,filterChain){
        // console.log(this.index); 
        if(this.index === this.filters.length) return;
        this.filters[this.index++].doFilter(request,response,filterChain);
        // for(let filter of this.filters){
            // filter.doFilter(request,response);
        // }
    }
}

function filter(){
    let request = new Request();
    request.msg = 'request';
    let response = new Response();
    response.msg = 'response';

    let fc = new FilterChain();
    fc.addFilter(new HtmlFilter()).addFilter(new SensitiveFilter());
    fc.doFilter(request,response,fc);
}
filter()