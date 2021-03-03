// 엘리먼트는 React 앱의 가장 작은 단위
// 엘리먼트는 컴포넌트의 구성 요소
import React from 'react';

// tick 예제
// UI를 업데이트하는 유일한 방법은
// 새로운 엘리먼트를 생성하고 이를 ReactDOM.render()로 전달
// React DOM은 해당 엘리먼트와 그 자식 엘리먼트를
// 이전의 엘리먼트와 비교하여 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트
// 매초 전체 UI를 업데이트하도록 했지만 변경된 텍스트 노드만 업데이트함
const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);

function ElementRendering() {
    return (
      <div className="ElementRendering">
        {element}
      </div>
    );
}

export default ElementRendering;