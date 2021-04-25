import React,{useState} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import BookPage from './view/BookPage';
import TodoPage from './view/TodoPage';

function App() {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e, { name })=>{
    setActiveItem(name);
  }

  return (
    <>
    <Menu>
    <Menu.Item
      name='home'
      active={activeItem === 'home'}
      onClick={handleItemClick}
    >
      홈
    </Menu.Item>

    <Menu.Item
      name='book'
      active={activeItem === 'book'}
      onClick={handleItemClick}
    >
      책목록
    </Menu.Item>

    <Menu.Item
      name='todo'
      active={activeItem === 'todo'}
      onClick={handleItemClick}
    >
      일정
    </Menu.Item>
    
    <Menu.Item
      name='login'
      active={activeItem === 'login'}
      onClick={handleItemClick}
      position='right'
    >
      Sign In
    </Menu.Item>
    </Menu>   
    <Segment>
      {activeItem === "home" && <h1>WELCOME!</h1>}
      {activeItem ==="book" && <BookPage/>}
      {activeItem ==="todo" && <TodoPage/>}
      {activeItem ==="login" && <h1>Sign In!</h1>}

    </Segment>
    </>
  );
}

export default App;
