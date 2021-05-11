// 1. 조건문
let month = prompt("월 입력 : ", "");
if (1 <= month && month <= 7)
{
    if (month == 2)
        console.log(`${month}월은 윤달입니다.`);
    else if (month % 2 == 0)
        console.log(`${month}월은 30일까지 있습니다.`);
    else
        console.log(`${month}월은 31일까지 있습니다.`);
}
else if (month > 7 && month <= 12)
{
    if (month % 2 == 0)
        console.log(`${month}월은 31일까지 있습니다.`);
    else
        console.log(`${month}월은 30일까지 있습니다.`);
}
else
    console.log(`${month}월은 없습니다.`);