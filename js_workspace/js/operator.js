// 연산자
// 1. 산술연산자
let x = 10;
let y = 20;

console.log(x, " + ", y, " = ", x+y);
console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${x} % ${y} = ${x%y}`);

// 2. 대입연산자 : =, 다른연산자=
const z = x + y;
console.log(z);
let result = 0;
result += x;
console.log(`result += x => ${result}`);
result *= x;
console.log(`result *= x => ${result}`);
result -= x;
console.log(`result -= x => ${result}`);
result /= x;
console.log(`result /= x => ${result}`);

// 3. 비교연산자 : >, <, >=, <=, ==, !=, ===, !==
// a === b : a와 b가 같고 데이터 타입도 같으면 true 아니면 false
// a !== b : a와 b가 같지 않거나 데이터 타입이 같지 않으면 true, 같으면 false
console.log(`5 > 2 => ${5 > 2}`);
console.log(`5 < 2 => ${5 < 2}`);
console.log(`5 == 5 => ${5 == 5}`);
console.log(`5 == '5'' => ${5 == '5'}`);
console.log(`5 === '5'' => ${5 === '5'}`);
console.log(`5 != '5' => ${5 != '5'}`);
console.log(`5 !== '5' => ${5 !== '5'}`);

// 4. 논리연산자 : &&, ||, !
console.log(`(3 > 2) && (5 > 3) => ${(3 > 2) && (5 > 3)}`);
console.log(`(3 > 2) || (5 > 3) => ${(3 > 2) || (5 > 3)}`);
console.log(`!(3 < 2) ${!(3 < 2)}`);

// 5. 비트연산자 : &, |, ~. ^, <<, >>
console.log(`1 & 3 => ${1 & 3}`);
console.log(`1 | 3 => ${1 | 3}`);
console.log(`~2 => ${~2}`);
console.log(`1 ^ 3 => ${1 ^ 3}`);
console.log(`1 << 2 => ${1 << 2}`);
console.log(`0 >> 1 => ${0 >> 1}`);

// 6. 삼항연산자 : 조건 ? 참 : 거짓
console.log(`10 > 0 ? '양수' : '음수' => ${10 > 0 ? '양수' : '음수'}`);