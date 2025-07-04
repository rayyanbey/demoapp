import React, { useState, useCallback, useMemo } from 'react';
import { Card, Input, Button } from 'antd';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';

const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  
  const handleAddTodo = useCallback(() => {
    if (inputValue.trim()) {
      const newTodo = {
        id: uuidv4(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos((prev) => [...prev, newTodo]);
      setInputValue('');
    }
  }, [inputValue]);

  
  const handleDeleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  
  const handleToggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  
  const totalTodos = useMemo(() => todos.length, [todos]);
  const activeTodos = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);
  const completedTodos = useMemo(() => todos.filter((t) => t.completed).length, [todos]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className="container flex items-center justify-center flex-col mb-8">
        <h1 className='text-6xl font-extrabold font-serif mb-4'>Todo list</h1>
        <p className='text-xl font-serif mb-6'>Stay organized and get things done</p>
        <Button className='mt-3 rounded-full text-2xl w-14 h-14'>🌙</Button>
      </div>

      <div className='input-field w-full max-w-xl'>
        <Card style={{ width: 600, margin: '10px auto', padding: '2px' }} className='shadow-2xl'>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Input
              placeholder="What's need to be done?"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={{ flex: 1, height: '45px', fontSize: '16px' }}
            />
            <Button
              type="primary"
              onClick={handleAddTodo}
              disabled={!inputValue.trim()}
              style={{
                backgroundColor: 'blue',
                borderColor: '#4CAF50',
                color: 'white',
                height: '50px',
                fontSize: '16px',
                minWidth: '100px',
              }}
            >
              Add
            </Button>
          </div>
        </Card>
      </div>

      <Filter
        todos={todos}
        selectedFilter={filter}
        onFilterChange={setFilter}
        totalTodos={totalTodos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </>
  );
};

export default Hero;
