import { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import BookPage from './view/BookPage';
import TodoPage from './view/TodoPage';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  
  const handleItemClick = (e, { name }) => { setActiveItem(name); }
  
  return (
    <Segment.Group>
      <Segment>
        <Menu>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            >
              Home
            </Menu.Item>

            <Menu.Item
              name='book'
              active={activeItem === 'book'}
              onClick={handleItemClick}
            >
              Book
            </Menu.Item>

            <Menu.Item
              name='todo'
              active={activeItem === 'todo'}
              onClick={handleItemClick}
            >
              Todo
            </Menu.Item>

            <Menu.Item
              name='login'
              position='right'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            >
              Login
            </Menu.Item>
          </Menu>
        </Segment>
        <Segment>
          {activeItem === 'home' && <h1>WELCOME!</h1>}
          {activeItem === 'book' && <BookPage/>}
          {activeItem === 'todo' && <TodoPage/>}
          {activeItem === 'login' && <h1>Sign In!</h1>}
        </Segment>
      </Segment.Group>
  );
}

export default App;
