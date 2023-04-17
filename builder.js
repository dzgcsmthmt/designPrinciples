// 是一种对象构建模式。它可以将复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象
// 使用场景 一个对象有很多参数
class Employee{
    constructor(){
        //base info
        this.name = this.address = this.birthday = '';
        //contact 
        this.phone = this.wechat =  '';
    }
    toString(){
        return `I am ${this.name},birthday is ${this.birthday},live in ${this.address};phone number is${this.phone}and wechat is ${this.wechat}`;
    }

}

class EmployeeBuilder{
    constructor(employee){
        this.employee = employee;
    }
    
    get info(){
        return new InfoBuilder(this.employee);
    }

    get contact(){
        return new ContactBuilder(this.employee);
    }

    build(){
        return this.employee;
    }

}

class InfoBuilder extends EmployeeBuilder{
    constructor(employee){
        super(employee);
    }
    name(name){
        this.employee.name = name;
        return this;
    }
    address(address){
        this.employee.address = address;
        return this;
    }
    birthday(birthday){
        this.employee.birthday = birthday;
        return this;
    }
}

class ContactBuilder extends EmployeeBuilder{
    constructor(employee){
        super(employee);
    }
    phone(phone){
        this.employee.phone = phone;
        return this;
    }
    wechat(wechat){
        this.employee.wechat = wechat;
        return this;
    }
}
var e = new Employee();
console.log(e + '');
var eb = new EmployeeBuilder(e);
eb.info.name('zhangsan').address('yaodong').birthday('1992-06-19')
.contact.phone('13563452345').wechat('dfszxz').build();
console.log(e + '');