import React, { Component } from 'react'
import TodoList from './task/TodoList'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div className='app'>
        <TodoList/>
      </div>
     );
  }
}
 
export default App;