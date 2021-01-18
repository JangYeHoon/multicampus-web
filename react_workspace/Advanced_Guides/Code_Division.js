// 번들링
// React 앱들은 Webpack, Roolup 또는 Browserify 같은 툴을 사용하여
// 여러 파일을 하나로 병합한 번들 된 파일을 웹페이지에 포함하여 한번에 전체 앱을 로드
// 예시
// app.js
import { add } from './math.js'
console.log(add(16, 26));
// math.js
export function add(a, b) {
    return a + b;
}
// Bundle
function add(a, b) {
    return a + b;
}
console.log(add(16, 26));
// 주의: 실제 번들은 위 예시와는 많이 다름

// 코드 분할
// 번들링은 훌륭하지만 앱이 커지면 번들도 커짐
// 번들이 거대해지는 것을 방지하기 위한 좋은 해결방법은 번들을 나누는 것
// 코드 분할은 런타임에 여러 번들을 동적으로 만들고 불러오는 것으로
// Webpack, Rollup과 Browserify(factor-bundle)같은 번들러가 지원하는 기능

// import()
// 앱에 코드 분할을 도입하는 가장 좋은 방법은 동적 import() 문법
// Before
import { add } from './math'
console.log(add(16, 26));
// After
import("./math").then(math => {
    console.log(math.add(16, 26));
});

// React.lazy
// Route-based code splitting