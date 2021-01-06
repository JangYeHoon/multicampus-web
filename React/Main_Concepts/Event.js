// React 엘리먼트에서 이벤트 처리는 DOM 엘리먼트 이벤트 처리 방식과 유사
// 몇가지 문법 차이
// 1. React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용
// 2. JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달
// HTML
<button onclick="activateLasers()">
    Activate Lasers
</button>
// React
<button onClick={activateLasers}>
    Activate Lasers
</button>

// React는 false를 반환해도 기본 동작을 방지하지 못함
// 반드시 preventDefault를 명시적으로 호출해야 함
// HTML 새 페이지를 여는 링크의 기본 동작 방지
<a href="#" onclick="console.log('The link was clicked.'); return false">
    Click me
</a>

//React
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

// React를 사용하면 DOM 엘리먼트가 생성된 후 리스너를 추가히기 위해 addEventListener를 호출할 필요가 없음
// 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 됨
// ES6 클래스를 사용하여 컴포넌트를 정의할 때
// 일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

  // 만약 bind를 호출하는 것이 불편하다면,
  class LoggingButton extends React.Component {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    // 주의: 이 문법은 *실험적인* 문법입니다.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }

  class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }
// 두 문법의 문제점은 LoggingButton이 렌더링될 때마다 다른 콜백이 생성된다는 것

// 이벤트 핸들러에 인자 전달하기
// id가 행의 ID일 경우 다음 코드가 모두 작동
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// 화살표 함수를 사용하면 명시적으로 인자를 전달해야 함
// 하지만 bind를 사용하면 추가 인자가 자동으로 전달