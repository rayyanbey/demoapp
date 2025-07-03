import Card from 'antd/es/card/Card'
import { Input, Button } from 'antd'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      console.log('Adding todo:', inputValue)
      setInputValue('')
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <main>
      <div className="container flex items-center justify-center flex-col">
        <h1>Todo list</h1>
        <p>Stay organized and get things done</p>
      </div>

      <div className='input-field'>
        <Card style={{ width: 400, margin: '20px auto' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Input
              placeholder="Enter your todo item..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={{ flex: 1 }}
            />
            <Button 
              type="primary" 
              onClick={handleAddTodo}
              disabled={!inputValue.trim()}
            >
              Add
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default App
