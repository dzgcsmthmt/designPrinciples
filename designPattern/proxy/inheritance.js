class Train{
    move(){
        console.log('guangchiguangchiguanchi.....');
    }
}


class TimeProxyTrain extends Train{
    move(){
        console.log('start:',Date.now());
        super.move();
        console.log('end:',Date.now())
    }
}
class LogProxyTrain extends Train{
    move(){
        console.log('log start');
        super.move();
        console.log('log end');
    }
}

const t1 = new TimeProxyTrain();
const t2 = new LogProxyTrain();
t1.move();
t2.move();

/* 
class TimeLogProxyTrain extends Train{
    move(){
        console.log('start:',Date.now());
        console.log('log start');
        super.move();
        console.log('log end');
        console.log('end:',Date.now())
    }
}
class LogTimeProxyTrain extends Train{
    move(){
        console.log('log start');
        console.log('start:',Date.now());
        super.move();
        console.log('end:',Date.now())
        console.log('log end');
    }
}
const tlT = new TimeLogProxyTrain();
const ltT = new LogTimeProxyTrain();
console.log(tlT.move());
console.log(ltT.move()); */
