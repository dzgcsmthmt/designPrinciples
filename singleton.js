/*是一种常用的软件设计模式，属于创建型模式的一种。
* 在应用这个模式时，单例对象的类必须保证只有一个实例存在。
* 许多时候整个系统只需要拥有一个的全局对象，这样有利于我们协调系统整体的行为
* 单例模式在多线程的应用场合下必须小心使用。如果当唯一实例尚未创建时，有两个线程同时调用创建方法，那么它们同时没有检测到唯一实例的存在，从而同时各自创建了一个实例，这样就有两个实例被构造出来，从而违反了单例模式中实例唯一的原则
*/

// we can use an object iteral,but we should use Class
var mySingleton = (function(){
    var instance;

    function init() {
        // Private methods and variables
        function privateMethod(){
            console.log( "I am private" );
        }

        var privateVariable = "Im also private";

        var privateRandomNumber = Math.random();

        return {

            // Public methods and variables
            publicMethod: function () {
                console.log( "The public can see me!" );
            },

            publicProperty: "I am also public",

            getRandomNumber: function() {
                return privateRandomNumber;
            }

        };

      };


      return {
          getInstance: function(){
              if(!instance){
                  instance = init();
              }
              return instance;
          }
      }

})();


var myBadSingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;
    function init() {
        // Singleton
        var privateRandomNumber = Math.random();
        return {
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };

    };

    return {
        // Always create a new Singleton instance
        getInstance: function () {
            instance = init();
            return instance;
        }
    };

})();

//since js doesn't have private constructor,so we need some magic
// in this mode you can modify this instance property directly
class Singleton{
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }
        //function call
        if(!(this instanceof Singleton)) return new Singleton();
        Singleton.instance = this;
    }

    static getInstance(){
        return Singleton.instance || new Singleton();
    }

    bar(){
        console.log('bar');
    }

    foo(){
        console.log('foo');
    }
}

//private property version
var Foo = (function () {
    "use strict";
    var instance; //prevent modification of "instance" variable
    function Singleton() {
        if (instance) {
            return instance;
        }
        instance = this;
    }
    Singleton.getInstance = function () {
        return instance || new Singleton();
    }
    return Singleton;
}());

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
const s3 = new Singleton();
const s4 = new Singleton();
console.log('s1===s2',s1 === s2);
console.log('s2===s3',s2 === s3);
console.log('s3===s4',s3 === s4);
s1.bar();
s4.foo();
