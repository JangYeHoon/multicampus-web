// JavaScript에서 리스트를 어떻게 변환
// map()함수를 이용해 numbers 배열의 값을 두배로 만든 후
// map()에서 반환하는 새 배열을 doubled 변수에 할당하는 코드
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// 여러개의 컴포넌트 렌더링
// 엘리먼트 모음을 만들고 {}를 이용하여 JSX에 포함
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

// 기본 리스트 컴포넌트
// 일반적으로 컴포넌트 안에서 리스트를 렌더링
// numbers를 이용해 순서 없는 엘리먼틀 리스트를 출력
// 각 항목에 key를 넣어야 한다는 경고가 표시
// key는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 어트리뷰트
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        //<li>{number}</li>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

// Key
// Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움
// key는 엘리먼트에 안정적인 고유성을 보유하기 위해 배열 내부의 엘리먼트에 지정
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
);
// Key는 해당 항목을 고유하게 식별할 수 있는 문자열을 사용
// 대부분의 경우 데이터의 ID를 key로 사용
const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);
// 항목에 ID가 없으면 최후의 수단으로 항목의 인덱스를 key로 사용
const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index}>
        {todo.text}
    </li>
);
// 항목의 순서가 바뀔 수 있어 key에 인덱스를 사용하는 것은 권장하지 않음
// 리스트 항목에 key를 지정하지 않으면 React는 기본적으로 인덱스를 key로 사용

// Key로 컴포넌트 추출하기
// key는 주변 배열의 context에서만 의미가 있음
// ListItem 컴포넌트를 추출한 경우 ListItem안에 있는 <li> 엘리먼트가 아니라
// 배열의 <ListItem /> 엘리먼트가 key를 가져야함
// 예시: 잘못된 Key 사용법
function ListItem(props) {
    const value = props.value;
    return (
        // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
        <li key={value.toString()}>
            {value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 틀렸습니다! 여기에 key를 지정해야 합니다.
        <ListItem value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

// 예시: 올바른 Key 사용법
function ListItem(props) {
    // 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 맞습니다! 배열 안에 key를 지정해야 합니다.
        <ListItem key={number.toString()} value={number} />
    )
    return (
        <ul>
            {listItems}
        </ul>
    );
}
// map() 함수 내부에 있는 엘리먼트에 key를 넣어주는게 좋음

// Key는 형제 사이에서만 고유한 값이어야 함
// Key는 배열안에서만 고유해야 하고 전체 범위에서 고유할 필요는 없음
// 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있음
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: "Installation", content: "You can install React from npm."}
];
// React에서 key는 제공하지만 컴포넌트로 전달하지 않음
// 컴포넌트에서 key와 동일한 값이 필요하면 다른 이름의 prop로 전달
const content = posts.map((post) =>
    <Post
        key={post.id}
        id={post.id}
        title={post.title}/>
);

// JSX에 map() 포함시키기
// 위 예제에서 별도의 listItems 변수를 선언하고 이를 JSX에 포함시킴
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
// JSX를 사용하면 중괄호 안에 모든 표현식을 포함 시킬 수 있음
// map() 함수의 결과를 인라인으로 처리할 수 있음
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) => value={number})}
        </ul>
    );
}
// 코드가 더 깔끔해 지지만 남발하는 것은 좋지 않음
// 가독성을 위해 변수로 추출해야 할지 아니면 인라인으로 넣을지는 개발자가 직접 판단

function ListKey() {
    return (
      <div className="ListKey">
          <Blog posts={posts} />
      </div>
    );
}

export default ListKey;