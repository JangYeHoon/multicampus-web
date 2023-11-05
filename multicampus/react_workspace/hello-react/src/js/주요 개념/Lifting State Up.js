import React from 'react';
// 스태이트 끌어올리기
// 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 될 수 있음
// 가장 가까운 공통 조상으로 state를 끌어올리는 것이 좋음
// 주어진 온도에서 물의 끓는 여부를 추정하는 온도 계산기를 만들기

// celsius prop를 받아서 이 온도가 물이 끓기에 충분한지 여부를 출력
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

// 온도를 입력할 수 있는 <input>을 렌더링하고 그 값을 this.state.temperature에 저장
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

// 두 번째 Input 추가하기
// 섭씨 입력 필드뿐만 아니라 화씨 입력 필드를 추가
// 두 필드 간에 동기화 상태를 유지하도록 설계
// Calculator에서 TemperatureInput 컴포넌트를 빼냄
const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ""};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}
// 두 개의 입력 필드를 가짐
// 둘 중 하나에 온도를 입력해도 다른 하나는 갱신되지 않음
// Calculator에서 BoilinigVerdict도 역시 보여줄 수 없음

// 변환 함수 작성하기
// 섭씨를 화씨로 또는 그 반대로 변환해주는 함수를 작성
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// temperature 문자열과 변환함수를 인수로 취해서 문자열을 변환하는 함수 작성
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
// tryConvert('abc', toCelsius)는 빈 문자열을 반환
// tryConvert('10.22', toFahrenheit)는 '50.396'을 반환

// State 끌어올리기
// 현재는 두 TemperatureInput 컴포넌트가 각각의 입력갓을 각자의 state에 독립적으로 저장
// 그러나 두 입력값이 서로의 것과 동기화된 상태로 있길 원함
// 컴포넌트 간의 가장 가까운 공통 조상으로 state를 끌어올림으로써 할 수 있음
// TemperatureInput이 개별적으로 가지고 있던 state를 지우는 대신 Calculator로 그 값을 옮겨 놓음
const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = {temperature: ""};
    }

    handleChange(e) {
        // Before: this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value); // Calculator로부터 건네받음
    }

    render() {
        // Before: const temperature = this.state.temperature;
        const temperature = this.props.temperature; // Calculator로부터 건네받음
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}
// temperature와 scale의 현재 입력값을 이 컴포넌트의 지역 state에 저장
// 입력 필드들로부터 "끌어올린" state
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
// 어떤 입력 필드를 수정하든 간에 Calculator의
// this.state.temperature와 this.state.scale이 갱신됨

function Lifting() {
    return (
      <div className="Lifting">
        <Calculator />
      </div>
    );
}

export default Lifting;