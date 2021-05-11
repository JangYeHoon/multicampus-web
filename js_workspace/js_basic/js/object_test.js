//class : object생성하기 위한 template, type(요구사항을  추상화해서 속성과 기능을 표현한 템플릿), 
//object : class type으로  생성된 변수(클래스 new 생성자를 통해 인스턴스화된 개체)
//1. class 선언(ECMA6 - class)
//class 클래스 이름{
//     변수;
//     생성자'
//     메소드;
// }
class Person{
    _name="";
    _age=0;
    
    constructor(name, age){
        this._name=name;
        this._age=age;
    }
   
    print(){
        console.log(`이름 : ${this._name}  나이: ${this._age}`);
    }
}

let p=new Person("권혜영",25);
p.print();


//2.function 객체로 선언
function Student(name, age, major){
    this._name = name;
    this._age = age;
    this._major =major;

    this.print=function(){
        console.log(`이름 : ${this._name}  나이: ${this._age} 전공: ${this._major}`);
    }
}

let s=new Student("허성현",26,"컴공" );
s.print();

//3.JSON(Javascript Object Notation)
let e = { person: {name:'한로빈', age:28} , department:'연구소',array:[1,2,3,4], male:'true'};
let array =[{name:'박기윤', age:28}, 1, [1,2,3,4],'name', "false","null"];
console.log(e);
