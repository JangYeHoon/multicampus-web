//1. javascript는 일급함수 
//함수 정의,  함수 호출해서 사용
//정의 : fuction 함수명([parameter, paramter,....]){ 구현; [return data;]} 
//호출 : let data = 함수명([parameter값, paramter값,....])
//parmeter, return data에 함수 사용 가능
//====
//let functionV = fuction([parameter, paramter,....]){ 구현 [return data;]}
//funtcionV : 함수객체
//arrow function :   ([parameter, paramter,....])=>{구현 [return data;]}}
// console.log("add(10,20) =",add(10,20));
//함수정의
function add(x, y){
   return x+y;
}
//함수사용
let sum = add(10, 20);
console.log("add(10,20) =",sum);


//익명함수
// let substract = function(x, y){
//     return x-y;
// }
let substract =(x,y)=>{ return x-y };
console.log("substract(20,10) = ", substract(20,10), typeof substract);

//arrow function
let divide = (x, y)=>{ return x/y }; 
console.log("divide(20,10) = ", divide(20,10));

//함수선언 및 실행
 ((x, y)=>{ console.log(`multiply(${x}*${y}):`, x*y) })(20,10);
 
//클로져
//함수에서 다른 함수 리턴
function makeAdder(x){
    let y=1; //makeAdder function local variable
    return function(z){
        y=100;   //외부함수 local variable 사용
        return x+y+z;
    }
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(2), add5);
console.log(add10(2), add10);

//클로져
function multi(n){
    return function(){
        return n*=n;
    }
}

let multi5 = multi(5);
let multi10 = multi(10);
console.log( multi5, multi5());
console.log( multi10, multi10());
//재귀함수
let result=1;
function factorial(n){
   
    if(n === 0){
        console.log('호출 끝');
    }else{
        console.log('호출' + n);
        result*=n;
        factorial(n-1);
    }

    return result;
}
console.log("10!", factorial(10));

