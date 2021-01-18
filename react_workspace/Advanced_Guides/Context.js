// context를 이용하면 단계마다 props를 넘겨주지 않고 컴포넌트 트리 전체에 데이터를 제공할 수 있음
// 언제 context를 써야 할까
// context는 React 컴포넌트 트리 안에서 전역적 데이터를 공유할 수 있도록 고안된 방법
class App extends React.Component {
    render() {
        return <Toolbar theme="dark" />
    }
}

function Toolbar(props) {
    // Toolbar 컴포넌트는 불필요한 테마 prop를 받아서
    // ThemeButton에 전달해야 합니다.
    // 앱 안의 모든 버튼이 테마를 알아야 한다면
    // 이 정보를 일일이 넘기는 과정은 매우 곤혹스러울 수 있습니다.
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

class ThemeButton extends React.Component {
    render() {
        return <Button theme={this.props.theme} />
    }
}
// context를 사용하면 중간에 있는 엘리먼트들에게 props를 넘겨주지 않아도 됨
// context를 사용하면 모든 컴포넌트를 일일이 통하지 않고도
// 원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음.
// light를 기본값으로 하는 테마 context를 만들어 봅시다.
const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        // Provider를 이용해 하위 트리에 테마 값을 보내줌
        // 아무리 깊숙히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있음
        // 아래 예시에서는 dark를 현재 선택된 테마 값으로 보냄
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

// 이젠 중간에 있는 컴포넌트가 일일이 테마를 넘겨줄 필요가 없음
function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // 현재 선택된 테마 값을 읽기 위해 contextType을 지정
    // React는 가장 가까이 있는 테마 Provider를 찾아 그 값을 사용할 것임
    // 이 예시에서 현재 선택된 테마는 dark
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />
    }
}

// API
// React.createContext = Context 객체를 만듬
const MyContext = React.createContext(defaultValue);
// Context.Provider = context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할
<MyContext.Provider value={/* 어떤 값 */} />
// Class.contextType = 생성한 Context객체를 원하는 클래스의 contextType 프로퍼티로 지정
class MyClass extends React.Component {
    componentDidMount() {
        let value = this.context;
        /* MyContext의 값을 이용한 코드 */
    }
    componentDidUpdate() {
        let value = this.context;
        /* ... */
    }
    componentWillMount() {
        let value = this.context;
        /* ... */
    }
    render() {
        let value = this.context;
        /* ... */
    }
}
MyClass.contextType = MyContext;
// Context.Consumer = context 변화를 구독하는 React 컴포넌트
<MyContext.Consumer>
    {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>
// Context.displayName = Context 객체는 displayName 문자열 속성을 설정할 수 있으
const MyContext = React.createContext(/* some value */);
MyContext.displayName = "MyDisplayName";

<MyContext.Provider/> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer/> // "MyDisplayName.Consumer" in DevTools

// 예시
// 값이 변하는 context. theme 값이 변하는 복잡한 예시
// theme-context.js
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // 기본값
);

//themed-button.js
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{backgroundColor: theme.background}}
            />
        );
    }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
// app.js
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// ThemedButton를 사용하는 중간에 있는 컴포넌트
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            }));
        };
    }

    render() {
        // ThemeProvider 안에 있는 ThemedButton은 state로부터 theme 값을 읽지만
        // Provider 밖에 있는 ThemedButton은 기본값인 dark를 사용
        return (
            <Page>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <Section>
                    <ThemeButton />
                </Section>
            </Page>
        );
    }
}
ReactDOM.render(<APP />, document.root);

// 하위 컴포넌트에서 context 업데이트 하기
// theme-context.js
//createContext에 보내는 기본값의 모양을
// 하위 컴포넌트가 받고 있는 매개변수 모양과 동일하게 만드는 것
export context ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

// theme-toggler-button.js
import {ThemeContext} from './theme-context';
function ThemeTogglerButton() {
    // ThemeTogglerButton은 context로부터
    // theme 값과 함께 toggleTheme 메서드도 받고 있음
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}
export defaut ThemeTogglerButton;

// app.js
import {ThemeContext, themes} from './theme-context';
import {ThemeTogglerButton} from './theme-toggler-button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            }));
        };

        // state에 업데이트 매서드도 포함되어 있으므로
        // 이 또한 context Provider를 통해 전달될 것입니다.
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        // Provider에 state 전체를 넘겨준다.
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}
ReactDOM.render(<App />, document.root);

// 여러 context 구독하기
// 기본값이 light인 themeContext
const ThemeContext = React.createContext('light');

// 로그인한 유저 정보를 담는 UserContext
const UserContext = React.createContext({
    name: 'Guest',
});

class App extends React.Component {
    render() {
        const {signedInUser, theme} = this.props;

        //context 초기값을 제공하는 App 컴포넌트
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}

// 여러 context의 값을 받는 컴포넌트
function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

// 주의사항
// 다시 렌더링할지 여부를 정할 때 참조를 확인하기 때문에,
// Provider의 부모가 렌더링될 때마다 불필요하게 하위 컴포넌트가 다시 렌더링되는 문제 발생
// 아래 코드는 value가 바뀔때마다 매번 새로운 객체가 생성되므로
// Provider가 렌더링될 때마다 그 하위에서 구독하고 있는 컴포넌트 모두가 다시 렌더링
class App extends React.Component {
    render() {
        return (
            <MyContext.Provider value={{something: 'something'}}>
                <Toolbar />
            </MyContext.Provider>
        );
    }
}
// 이를 피하기 위해 값을 부모의 state로 끌어올림
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {something: 'something'};
        };
    }
    render() {
        return (
            <Provider value={this.state.value}>
                <Toolbar />
            </Provider>
        );
    }
}