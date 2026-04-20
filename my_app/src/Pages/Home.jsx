import { useState, useEffect } from 'react'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList'
import StatsBar from '../Components/StatsBar'
import FilterTabs from '../Components/FilterTabs'
import { createTodo, FILTERS } from '../Interfaces/todo'

const STORAGE_KEY = 'taskflow-todos'

function Home() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [filter, setFilter] = useState(FILTERS.ALL)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // CREATE
  const addTodo = (text) => {
    setTodos([createTodo(text), ...todos])
  }

  // DELETE
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  // UPDATE
  const updateTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)))
  }

  // TOGGLE
  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  // CLEAR COMPLETED
  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed))
  }

  const active = todos.filter((t) => !t.completed)
  const completed = todos.filter((t) => t.completed)

  const filtered = (() => {
    if (filter === FILTERS.ACTIVE) return active
    if (filter === FILTERS.COMPLETED) return completed
    return todos
  })()

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>TaskFlow</h1>
        <p>Görevlerinizi kolayca yönetin</p>
      </header>

      <StatsBar
        total={todos.length}
        active={active.length}
        completed={completed.length}
      />

      <TodoForm onAdd={addTodo} />

      {todos.length > 0 && (
        <FilterTabs currentFilter={filter} onFilterChange={setFilter} />
      )}

      <TodoList
        todos={filtered}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
        onToggle={toggleTodo}
      />

      {completed.length > 0 && (
        <button className="clear-btn" onClick={clearCompleted} id="clear-btn">
          Tamamlananları temizle ({completed.length})
        </button>
      )}

      <footer className="app-footer">
        React + Vite + Bootstrap 5
      </footer>
    </div>
  )
}

export default Home
