//为啥需要迭代器，底层其实只有两种数据结构，数组和链表
//java提供的迭代器是hasNext和next方法，js中是{value,done}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    add(val){
        const node = new Node(val);
        if(this.head === null) return this.head = node;
        let cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = node;
    }
}

function getIterableObj(linkedList){
    let cur = linkedList.head;
    return {
        [Symbol.iterator](){
            return this;
        },
        next(){
            if(!cur) return {done: true};
            val = cur.val;
            cur = cur.next;
            return {value:val,done:false};
        }
    }
}


var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
let iter = getIterableObj(ll);
for(let v of iter){
    console.log(v);
}
