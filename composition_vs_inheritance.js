class Train{
    move(){
        console.log('guangchiguangchiguanchi.....');
    }
}

//inheritance
/*
class TimeTrain extends Train{
    move(){
        console.log('start:',Date.now());
        super.move();
        console.log('end:',Date.now())
    }
}

class LogTrain extends Train{
    move(){
        console.log('log before start');
        super.move();
        console.log('log end start');
    }
}

class TimeLogTrain extends Train{
    move(){
        console.log('start:',Date.now());
        console.log('log before start');
        super.move();
        console.log('log end start');
        console.log('end:',Date.now())
    }
}*/

//composition
class TimeTrain{
    constructor(train){
        this.train = train
    }

    move(){
        console.log('start:',Date.now());
        this.train.move();
        console.log('end:',Date.now());
    }
}

class LogTrain{
    constructor(train){
        this.train = train
    }

    move(){
        console.log('log before start');
        this.train.move();
        console.log('log end start');
    }
}





// const t = new Train();
const t = new LogTrain(new TimeTrain(new Train()));
t.move();