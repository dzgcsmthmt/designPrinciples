class Train{
    move(){
        console.log('guangchiguangchiguanchi.....');
    }
}

class TimeProxyTrain{
    constructor(train){
        this.train = train
    }

    move(){
        console.log('start:',Date.now());
        this.train.move();
        console.log('end:',Date.now());
    }
}

class LogProxyTrain{
    constructor(train){
        this.train = train
    }

    move(){
        console.log('log start');
        this.train.move();
        console.log('log end');
    }
}

const t = new Train();
const t1 = new TimeProxyTrain(t);
const t2 = new LogProxyTrain(t);
t1.move();
t2.move();

// const t1 = new TimeProxyTrain(t);
// const t2 = new LogProxyTrain(t1);
// t2.move();

// const t1 = new LogProxyTrain(t);
// const t2 = new TimeProxyTrain(t1);
// t2.move();

// https://redux.js.org/understanding/history-and-design/middleware