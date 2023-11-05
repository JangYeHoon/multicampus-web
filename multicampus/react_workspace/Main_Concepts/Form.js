import React from 'react';
// HTML 폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가지기 때문에
// React의 다른 DOM 엘리먼트와 조금 다르게 동작
<form>
    <label>
        Name:
        <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
</form>
// 이 폼은 사용자가 폼을 제출하면 새로운 페이지로 이동하는 기본 HTML 폼 동작을 수행
// React에서 그대로 사용하면 동일하게 동작
// 그러나 대부분의 경우, JavaScript함수로 폼의 제출을 처리하고
// 사용자가 폼에 입력한 데이터에 접근하도록 하는 것이 편리
// 이를 위한 표준 방식은 "제어 컴포넌트(controlled components)"라고 불리는 기술을 이용하는 것

// 제어 컴포넌트(Controlled Component)
// React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지
// setState()에 의해 업데이트됨
// React state를 신뢰 가능한 단일 출처(single source of truth)로 만들어 두 요소를 결합할 수 있음
// 폼을 렌더링하는 React컴포넌트는 폼에 발생하는 사용자 입력값을 제어
// React에 의해 값이 제어되는  입력 폼 엘리먼트를 제어 컴포넌트라고 함
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// textarea 태그
// HTML에서 <textarea> 엘리먼트는 텍스트를 자식으로 정의
<textarea>
    Hello there, this is some text in a text area
</textarea>
// React에서 <textarea>는 value 어트리뷰트를 대신 사용
// <textarea>를 사용하는 폼은 한 줄 입력을 사용하는 폼과 비슷하게 작성할 수 있음
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Please write an essay about your favorite DOM element."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefaultl();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
// this.state.value를 생성자에서 초기화하므로
// textarea는 일부 텍스트를 가진채 시작된다는 점을 주의

// select 태그
// HTML에서 <select>는 드롭 다운 목록을 만듬
<select>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option seleted value="coconut">Coconut</option>
    <option value="mango">Mango</option>
</select>
// React에서는 selected 어트리뷰트를 사용하는 대신 최상단 select 태그에 value 어트리뷰트를 사용
// 제어 컴포넌트에서 사용하기 더 편리함
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Your favorite flavor is: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
// 주의
// select 태그에 multiple 옵션을 허용한다면 value 어트리뷰트에 배열을 전달할 수 있음
// <select multiple={true} value={['B', 'C']}>

// file input 태그
// HTML에서는 사용자가 하나 이상의 파일을 자신의 장치 저장소에서
// 서버로 업로드하거나 File API를 통해 JavaScript로 조작할 수 있음
<input type="file" />
// 값이 읽기 전용이기 떄문에 React에서는 비제어 컴포넌트

// 다중 입력 제어
// 여러 input 엘리먼트를 제어해야할 때, 각 엘리먼트에 name 어트리뷰트를 추가하고
// event.target.name값을 통해 핸들러가 어떤 작업을 할 지 선택할 수 있게 해줌
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
//input태그의 name에 일치하는 state를 업데이트하기 위해 ES6의 computed property name 구문을 사용
this.setState({
    [name]:value
});
// ES5 코드는 아래와 같음
var partialState = {};
partialState[name] = value;
this.setState(partialState);
// 또한 setState()는 자동적으로 현재 state에 일부 state를 병합
// 바뀐 부분에 대해서만 호출하면 됨

// 제어되는 Input Null 값
// value를 설정했는데 여전히 수정할 수 있다면 실수로 value를 undefined나 null로 설정할 수 있음
ReactDOM.render(<input value="hi" />, mountNode);
setTimeout(function() {
    ReactDOM.render(<input value={null} />, mountNode);
}, 1000);

// 제어 컴포넌트의 대한
// 입력 폼을 구현하기 위한 대체 기술인 비제어 컴포넌트를 확인할 수 있음

// 완전한 해결책
// 유효성 검사, 방문한 필드 추적 및 폼 제출 처리와 같은 완벽한 해결을
// 원한다면 Formik이 대중적인 선택 중 하나

function Form() {
    return (
      <div className="Form">
        <Reservation />
      </div>
    );
}

export default Form;