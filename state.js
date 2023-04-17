//严格意义上说 state模式跟finite State Machine 不是一回事
//这个主要应用在类的方法相对固定，每个方法中都需要基于state状态做分支判断
//如果state的状态很少，也没必要使用这个模式
//Context方法不固定，拓展一个方法就需要所有的state对象也拓展方法
class Context {
    constructor(state) {
        this.state = state;
    }

    setState(state){
        this.state = state;
    }
    request1(){
        this.state.handle1();
    }

    request2(){
        this.state.handle2();
    }
}

class State{
    constructor(context){
        this.context = context;
    }
    request1(){
        
    }
    request2(){

    }
}

class ConcreteStateA extends State{
    constructor(context){
        super(context);
    }
    request1(){
        console.log('A handle request1')
    }
    request2(){
        console.log('A handle request2')
    }

}

class ConcreteStateB extends State{
    constructor(context){
        super(context);
    }
    request1(){
        console.log('B handle request1')
    }
    request2(){
        console.log('B handle request2')
    }

}