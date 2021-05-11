//Array

let info = [45, 11, 7, 32, 20, 19];

//sort
info.sort(function(a, b) {
    return a - b;
});
console.log(info.toString());

//filter : array data filtering new Array 생성
const filterResult = info.filter(data => data > 10);
console.log(filterResult);

//map(callback(currentValue[, index[, array]]))
//map : array data조작 new Array 생성 
const result = info.map(data => data * 2);
console.log(result);

//slice(startindex,[ deletecount, appenddata])
//array data 수정 삭제
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
months.splice(4, 1);
console.log(months);