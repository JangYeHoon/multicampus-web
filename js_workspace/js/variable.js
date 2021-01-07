//1. var, let, const
// 변수선언은 let 사용(이유 : 유효범위 구분)
// 상수선언은 const 사용
var x; // 변수 선언 var: 변수 유효범위 구분 안되기 때문에 let 사용
x = 6; // 값 할당
const constVariable = 10;

let globalVariable = 5;
{
    let localVariable = 5;
    var y = 5;
    console.log("localVariable ", localVariable);
    console.log("globalVariable ", globalVariable);
    console.log("var x", x);
    console.log("var y", y);
    console.log("const ", constVariable);
}

// constVariable = 100; 상수는 값할당 안됨
// console.log("localVariable ", localVariable);
console.log("globalVariable ", globalVariable);
console.log("var x", x);
console.log("var y", y);
console.log("const ", constVariable);
document.getElementById("data").innerHTML = "<h3> variable x = " + x + "</h3>";

// 2. DataType - prinitive(int, float, string, boolean), Reference(Class, Array)
let intV = 10;
let floatV = 10.5;
let stringV = "10";
let booleanV = true;
console.log("data type ", intV, floatV, StringV, booleanV);
console.log("type ", typeof intV, typeof floatV, typeof StringV, typeof booleanV);